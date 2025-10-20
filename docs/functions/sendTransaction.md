[**@cyberchain/smart-contract-wrapper**](../README.md)

***

[@cyberchain/smart-contract-wrapper](../README.md) / sendTransaction

# Function: sendTransaction()

## Call Signature

> **sendTransaction**(`to`, `data`, `value`, `options`): `Promise`\<[`TransactionReceipt`](../interfaces/TransactionReceipt.md)\>

Defined in: src/tx.ts:46

Sends a transaction

### Parameters

#### to

`string`

Destination address

#### data

[`BytesLike`](../type-aliases/BytesLike.md)

Data

#### value

[`QuantityLike`](../type-aliases/QuantityLike.md)

Value (wei)

#### options

[`TransactionSendingOptions`](../type-aliases/TransactionSendingOptions.md)

RPC options

### Returns

`Promise`\<[`TransactionReceipt`](../interfaces/TransactionReceipt.md)\>

The transaction receipt

## Call Signature

> **sendTransaction**(`details`, `options`): `Promise`\<[`TransactionReceipt`](../interfaces/TransactionReceipt.md)\>

Defined in: src/tx.ts:54

Sends a transaction

### Parameters

#### details

[`TransactionBuildDetails`](../interfaces/TransactionBuildDetails.md)

The transaction build details

#### options

[`TransactionSendingOptions`](../type-aliases/TransactionSendingOptions.md)

RPC options

### Returns

`Promise`\<[`TransactionReceipt`](../interfaces/TransactionReceipt.md)\>

The transaction receipt
