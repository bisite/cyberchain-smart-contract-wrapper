// CLI

"use strict";

import ReadLine from "node:readline/promises";
import { parseSimpleCsv } from "./csv";
import { generateMixedWallet, privateKeysToAddress, privateKeyToAddress } from "./account";
import { SignKey, SignKeyECDSA } from "./types";
import { SignKeyMLDSA } from "@cyberchain/tx";
import { readFileSync, writeFileSync } from "node:fs";
import { Web3RPCClient } from "./rpc-client";
import { isValidAddress } from "@ethereumjs/util";
import { sendTransaction } from "./tx";

type Wallet = { signKeyECDSA: SignKeyECDSA, signKeyMLSA: SignKeyMLDSA };

function getSignKey(w: Wallet, mode: "ec" | "ml-dsa"): SignKey {
    if (mode === "ml-dsa") {
        return w.signKeyMLSA;
    } else {
        return w.signKeyECDSA;
    }
}

function getComplementaryAddress(w: Wallet, mode: "ec" | "ml-dsa"): string {
    if (mode === "ec") {
        return privateKeyToAddress(w.signKeyMLSA);
    } else {
        return privateKeyToAddress(w.signKeyECDSA);
    }
}

async function main() {
    const rl = ReadLine.createInterface({ input: process.stdin, output: process.stdout });

    console.log("CLI testing tool for CyberChain")
    console.log("Type help to view the commands list")
    console.log("-----------------------------------------");
    console.log("");

    let rpcUrl = "http://127.0.0.1:8545";

    let currentWallet: Wallet | null = null;
    let currentAddress = "";

    let mlDsaLevel: 44 | 65 | 87 = 44;

    let signMode: "ec" | "ml-dsa" = "ml-dsa";

    let finished = false;

    while (!finished) {
        const line = await rl.question(currentAddress + "> ");

        const cmdParts = parseSimpleCsv(line, " ", '"');

        const cmd = cmdParts[0] + "";

        switch (cmd) {
            case "help":
            case "h":
            case "?":
                printHelp();
                break;
            case "rpc":
                if (cmdParts.length === 1) {
                    console.log("RPC URL: " + rpcUrl);
                } else if (cmdParts.length === 2) {
                    try {
                        rpcUrl = new URL(cmdParts[1]).toString();
                    } catch (ex) {
                        console.log("Error: " + ex.message);
                        continue;
                    }
                    console.log("RPC URL changed: " + rpcUrl);
                } else {
                    console.log("rpc - Invalid number of arguments")
                }
                break;
            case "ml-dsa-level":
                {
                    if (cmdParts.length === 1) {
                        console.log("ML-DSA level: " + mlDsaLevel);
                    } else if (cmdParts.length === 2) {
                        const newLevel = parseInt(cmdParts[1], 10);

                        if (newLevel !== 44 && newLevel !== 65 && newLevel !== 87) {
                            console.log("Invalid ML-DSA level");
                            continue;
                        }

                        mlDsaLevel = newLevel;
                        console.log("ML-DSA level changed: " + mlDsaLevel);
                    } else {
                        console.log("ml-dsa-level - Invalid number of arguments");
                    }
                }
                break;
            case "sign-mode":
            case "mode":
                {
                    if (cmdParts.length === 1) {
                        console.log("Sign mode: " + signMode);
                    } else if (cmdParts.length === 2) {
                        const newMode = cmdParts[1].toLowerCase();

                        if (newMode !== "ec" && newMode !== "ml-dsa") {
                            console.log("Invalid signature mode");
                            continue;
                        }

                        signMode = newMode;
                        console.log("Sign mode changed: " + signMode);
                    } else {
                        console.log("sign-mode - Invalid number of arguments");
                    }
                }
                break;
            case "nw":
            case "new-wallet":
            case "cw":
            case "create-wallet":
                {
                    if (cmdParts.length !== 2) {
                        console.log("cw - Invalid number of arguments");
                        continue;
                    }

                    const wallet = generateMixedWallet({
                        mlDsaLevel: mlDsaLevel,
                    });

                    const walletJson = {
                        address: privateKeysToAddress(wallet.signKeyECDSA, wallet.signKeyMLSA),
                        ec: {
                            key: Buffer.from(wallet.signKeyECDSA.key).toString("hex"),
                        },
                        ml_dsa: {
                            sec: Buffer.from(wallet.signKeyMLSA.secretKey).toString("hex"),
                            pub: Buffer.from(wallet.signKeyMLSA.publicKey).toString("hex"),
                        },
                    };

                    try {
                        writeFileSync(cmdParts[1], JSON.stringify(walletJson, null, 4));
                    } catch (ex) {
                        console.log("Error: " + ex.message);
                        continue;
                    }

                    currentWallet = wallet;
                    currentAddress = privateKeysToAddress(wallet.signKeyECDSA, wallet.signKeyMLSA);

                    console.log("Wallet created (" + currentAddress + ") -> " + cmdParts[1]);
                }
                break;
            case "lw":
            case "load-wallet":
                {
                    if (cmdParts.length !== 2) {
                        console.log("lw - Invalid number of arguments");
                        continue;
                    }

                    try {
                        const json = JSON.parse(readFileSync(cmdParts[1]).toString());

                        const newWallet: Wallet = {
                            signKeyECDSA: {
                                type: "ec-dsa",
                                key: Buffer.from(json.ec.key, "hex"),
                            },
                            signKeyMLSA: {
                                type: "ml-dsa",
                                spec: mlDsaLevel,
                                publicKey: Buffer.from(json.ml_dsa.pub, "hex"),
                                secretKey: Buffer.from(json.ml_dsa.sec, "hex"),
                            },
                        };

                        currentAddress = privateKeysToAddress(newWallet.signKeyECDSA, newWallet.signKeyMLSA);
                        currentWallet = newWallet;
                    } catch (ex) {
                        console.log("Error: " + ex.message + ex.stack);
                        continue;
                    }

                    console.log("Wallet loaded (" + currentAddress + ") <- " + cmdParts[1]);
                }
                break;
            case "block":
                {
                    try {
                        const data = await Web3RPCClient.getInstance().rpcRequest("eth_getBlockByNumber", [cmdParts[1] || "latest", true], {
                            rpcURL: rpcUrl,
                        });
                        console.log(JSON.stringify(data, null, 4));
                    } catch (ex) {
                        console.log("Error: " + ex.message);
                    }
                }
                break;
            case "transaction":
            case "tx":
                {
                    if (!cmdParts[1]) {
                        console.log("tx - Invalid number of parameters");
                        continue;
                    }

                    try {
                        const data = await Web3RPCClient.getInstance().rpcRequest("eth_getTransactionByHash", [cmdParts[1]], {
                            rpcURL: rpcUrl,
                        });
                        console.log(JSON.stringify(data, null, 4));
                    } catch (ex) {
                        console.log("Error: " + ex.message);
                    }
                }
                break;
            case "transaction-recept":
            case "tr":
            case "tx-r":
            case "tx-receipt":
                {
                    if (!cmdParts[1]) {
                        console.log("tx - Invalid number of parameters");
                        continue;
                    }

                    try {
                        const data = await Web3RPCClient.getInstance().rpcRequest("eth_getTransactionReceipt", [cmdParts[1]], {
                            rpcURL: rpcUrl,
                        });
                        console.log(JSON.stringify(data, null, 4));
                    } catch (ex) {
                        console.log("Error: " + ex.message);
                    }
                }
                break;
            case "role":
                {
                    const account = cmdParts[1] || currentAddress;

                    if (!account) {
                        console.log("role - Invalid number of parameters");
                        continue;
                    }

                    try {
                        const data = await Web3RPCClient.getInstance().rpcRequest("eth_getRole", [account, "latest"], {
                            rpcURL: rpcUrl,
                        });
                        console.log(JSON.stringify(data, null, 4));
                    } catch (ex) {
                        console.log("Error: " + ex.message);
                    }
                }
                break;
            case "set-role":
                {
                    if (!currentWallet) {
                        console.log("Must select a wallet before doing this.")
                        continue;
                    }

                    if (cmdParts.length !== 3) {
                        console.log("set-role - Invalid number of parameters");
                        continue;
                    }

                    const account = cmdParts[1];

                    if (!isValidAddress(account)) {
                        console.log("set-role - Invalid account address");
                        continue;
                    }

                    const roles = ["READER", "WRITER", "DEPLOYER", "ROLE_MANAGER", "ADMIN"];

                    const role = cmdParts[2].toUpperCase();

                    if (!roles.includes(role)) {
                        console.log("set-role - Invalid account role");
                        console.log("Available roles: " + roles.join(", "));
                        continue;
                    }

                    const roleNumber = roles.indexOf(role);

                    try {
                        const result = await sendTransaction(account, Buffer.from("/0x0000000000000000000000000000000000000001:0x" + roleNumber, "utf-8"), 0, {
                            rpcURL: rpcUrl,
                            signKey: getSignKey(currentWallet, signMode),
                            complementaryAddress: getComplementaryAddress(currentWallet, signMode),
                            logFunction: msg => {
                                console.log(msg);
                            },
                        });
                        console.log(result.transactionHash.toString("hex"));
                    } catch (ex) {
                        console.error(ex);
                    }
                }
                break;
            case "exit":
            case "quit":
            case "bye":
            case "q":
                finished = true;
                break;
            default:
                console.log("Unknown command: " + cmd);
        }
    }
}

function printHelp() {
    console.log("help - Prints the commands list");
    console.log("rpc <url> - Changes the RPC URL");
    console.log("ml-dsa-level <44 | 65 | 87> - Changes the ML-DSA level");
    console.log("sign-mode <ec|ml-dsa> - Changes th sign mode");
    console.log("nw <file> - Creates a new wallet, saves it into a file, and sets it as the current account");
    console.log("lw <file> - Loads a wallet from a file, setting it as the current account");
    console.log("block <number> - Gets a block");
    console.log("tx <hash> - Gets a transaction");
    console.log("tx-r <hash> - Gets a receipt");
    console.log("role [account] - Gets the role of an account");
    console.log("set-role <account>, <READER|WRITER|DEPLOYER|ROLE_MANAGER|ADMIN> - Sends a transaction to change the role of an account");
    console.log("exit - Closes the CLI");
}

main().then(() => {
    process.exit(0);
}).catch(ex => {
    console.error(ex);
    process.exit(1);
});
