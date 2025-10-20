[**@cyberchain/smart-contract-wrapper**](../README.md)

***

[@cyberchain/smart-contract-wrapper](../README.md) / deploySmartContract

# Function: deploySmartContract()

> **deploySmartContract**(`byteCode`, `abi`, `constructorParams`, `value`, `options`): `Promise`\<[`TransactionResult`](../interfaces/TransactionResult.md)\<`string`\>\>

Defined in: src/contract.ts:21

Deploys smart contract

## Parameters

### byteCode

[`BytesLike`](../type-aliases/BytesLike.md)

The byte code of the smart contract

### abi

[`ABILike`](../type-aliases/ABILike.md)

The ABI definition of the smart contract

### constructorParams

[`InputABIParams`](../type-aliases/InputABIParams.md)

The constructor params

### value

[`QuantityLike`](../type-aliases/QuantityLike.md)

The value to send to the constructor (wei)

### options

[`TransactionSendingOptions`](../type-aliases/TransactionSendingOptions.md)

The transaction options (including RPC options)

## Returns

`Promise`\<[`TransactionResult`](../interfaces/TransactionResult.md)\<`string`\>\>

A result with the transaction receipt and the contract address
