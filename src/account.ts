// Account management utils

"use strict";

import randombytes from "randombytes";
import { ml_dsa44, ml_dsa65, ml_dsa87 } from '@noble/post-quantum/ml-dsa';
import { keccak256 } from 'ethereum-cryptography/keccak';
import { secp256k1 } from 'ethereum-cryptography/secp256k1';
import { Address, SignKey, SignKeyECDSA, SignKeyMLDSA } from './types';
import { hexNoPrefix, hexWithPrefix } from './utils';

/**
 * Generates a mixed address
 * @param addressECDSA The ECDSA address
 * @param addressMLDSA The MLDSA address
 * @returns The address
 */
export function generateMixedAddress(addressECDSA: Address, addressMLDSA: Address): Address {
    const concatenatedAddress = hexNoPrefix(addressECDSA) + hexNoPrefix(addressMLDSA);
    const concatenatedAddressBytes = new Uint8Array(Buffer.from(concatenatedAddress, "hex"));
    return hexWithPrefix(Buffer.from(keccak256(concatenatedAddressBytes).slice(-20)).toString("hex"));
}

/**
 * Generates an address from a public key
 * @param pubKey The public key
 * @returns The address
 */
export function publicKeyToAddress(pubKey: Uint8Array): Address {
    return hexWithPrefix(Buffer.from(keccak256(pubKey).slice(-20)).toString("hex"));
}

/**
 * Generates mixed address from a private key and a complementary address
 * @param privateKey The private key
 * @param complementaryAddress Complementary address
 * @returns The address
 */
export function privateKeyToMixedAddress(privateKey: SignKey, complementaryAddress: Address): Address {
    switch (privateKey.type) {
        case "ec-dsa":
        {
            const publicKeyECDSA = Buffer.from(secp256k1.ProjectivePoint.fromPrivateKey(privateKey.key).toRawBytes(false).slice(1));
            const addressECDSA = publicKeyToAddress(publicKeyECDSA);
            return generateMixedAddress(addressECDSA, complementaryAddress);
        }
        case "ml-dsa":
        {
            const addressMLDSA = publicKeyToAddress(privateKey.publicKey);
            return generateMixedAddress(complementaryAddress, addressMLDSA);
        }
        default:
            throw new Error("Unknown sign key type");
    }
}


/**
 * Generates address from a private key
 * @param privateKey The private key
 * @returns The address
 */
export function privateKeyToAddress(privateKey: SignKey): Address {
    switch (privateKey.type) {
        case "ec-dsa":
        {
            const publicKeyECDSA = Buffer.from(secp256k1.ProjectivePoint.fromPrivateKey(privateKey.key).toRawBytes(false).slice(1));
            return publicKeyToAddress(publicKeyECDSA);
        }
        case "ml-dsa":
            return publicKeyToAddress(privateKey.publicKey);
        default:
            throw new Error("Unknown sign key type");
    }
}

/**
 * Generates an address from 2 sign keys
 * @param keyECDSA The ECDSA key
 * @param keyMLDSA The MLDSA key
 * @returns The address
 */
export function privateKeysToAddress(keyECDSA: SignKeyECDSA, keyMLDSA: SignKeyMLDSA): Address {
    const publicKeyECDSA = Buffer.from(secp256k1.ProjectivePoint.fromPrivateKey(keyECDSA.key).toRawBytes(false).slice(1));
    const addressECDSA = publicKeyToAddress(publicKeyECDSA);

    const addressMLDSA = publicKeyToAddress(keyMLDSA.publicKey);

    return generateMixedAddress(addressECDSA, addressMLDSA);
}

export interface WalletGenerationOptions {
    /**
     * Seed phrase
     */
    seed?: string;

    /**
     * ML-DSA security level
     */
    mlDsaLevel: 44 | 65 | 87;
}

/**
 * Generates a random mixed wallet
 * @param options The options
 * @returns The sign keys
 */
export function generateMixedWallet(options: WalletGenerationOptions): { signKeyECDSA: SignKeyECDSA, signKeyMLSA: SignKeyMLDSA } {
    const privateKeyECDSA = options.seed ? keccak256(Buffer.from(options.seed + "/EC-DSA", "utf8")) : randombytes(32);

    let privateKeyMLDSA: Uint8Array;
    let publicKeyMLDSA: Uint8Array;

    const mlDSASeed = options.seed ? keccak256(Buffer.from(options.seed + "/ML-DSA", "utf8")) : randombytes(32);

    switch (options.mlDsaLevel) {
        case 65:
            {
                const k = ml_dsa65.keygen(mlDSASeed);
                privateKeyMLDSA = k.secretKey;
                publicKeyMLDSA = k.publicKey;
            }
            break;
        case 87:
            {
                const k = ml_dsa87.keygen(mlDSASeed);
                privateKeyMLDSA = k.secretKey;
                publicKeyMLDSA = k.publicKey;
            }
            break;
        default:
        {
            const k = ml_dsa44.keygen(mlDSASeed);
            privateKeyMLDSA = k.secretKey;
            publicKeyMLDSA = k.publicKey;
        }
    }

    return {
        signKeyECDSA: {
            type: "ec-dsa",
            key: privateKeyECDSA,
        },
        signKeyMLSA: {
            type: "ml-dsa",
            spec: options.mlDsaLevel,
            publicKey: publicKeyMLDSA,
            secretKey: privateKeyMLDSA,
        },
    };
}
