[**@cyberchain/smart-contract-wrapper**](../README.md)

***

[@cyberchain/smart-contract-wrapper](../README.md) / Web3RPCClient

# Class: Web3RPCClient

Defined in: src/rpc-client.ts:13

Minimal version of Web3 RPC client
For smart contract interaction

## Constructors

### Constructor

> **new Web3RPCClient**(): `Web3RPCClient`

#### Returns

`Web3RPCClient`

## Methods

### estimateGas()

> **estimateGas**(`callOptions`, `tag`, `options`): `Promise`\<`bigint`\>

Defined in: src/rpc-client.ts:153

Estimates gas for a transaction
This can be used to set the gas limit

#### Parameters

##### callOptions

[`MessageCallOptions`](../interfaces/MessageCallOptions.md)

Calling options

##### tag

[`BlockTag`](../type-aliases/BlockTag.md)

Tag that can be latest=last block or pending=last pending transaction

##### options

[`RPCOptions`](../type-aliases/RPCOptions.md)

RPC options

#### Returns

`Promise`\<`bigint`\>

The estimated gas used by the transaction

***

### gasPrice()

> **gasPrice**(`options`): `Promise`\<`bigint`\>

Defined in: src/rpc-client.ts:140

Gets the current gas price in wei

#### Parameters

##### options

[`RPCOptions`](../type-aliases/RPCOptions.md)

RPC options

#### Returns

`Promise`\<`bigint`\>

The gas price

***

### getBalance()

> **getBalance**(`address`, `tag`, `options`): `Promise`\<`bigint`\>

Defined in: src/rpc-client.ts:184

Get account balance

#### Parameters

##### address

`string`

Address (0x...)

##### tag

[`BlockTag`](../type-aliases/BlockTag.md)

Tag that can be latest=last block or pending=last pending transaction

##### options

[`RPCOptions`](../type-aliases/RPCOptions.md)

RPC options

#### Returns

`Promise`\<`bigint`\>

The account balance

***

### getBlockByNumber()

> **getBlockByNumber**(`num`, `options`): `Promise`\<[`BlockData`](../interfaces/BlockData.md)\>

Defined in: src/rpc-client.ts:77

Gets a block by number (required for certain calls)

#### Parameters

##### num

Block number

`string` | `number` | `bigint`

##### options

[`RPCOptions`](../type-aliases/RPCOptions.md)

RPC options

#### Returns

`Promise`\<[`BlockData`](../interfaces/BlockData.md)\>

The block data

***

### getLogs()

> **getLogs**(`filter`, `options`): `Promise`\<[`TransactionLog`](../interfaces/TransactionLog.md)[]\>

Defined in: src/rpc-client.ts:281

Gets transaction logs

#### Parameters

##### filter

[`TransactionLogFilterOptions`](../interfaces/TransactionLogFilterOptions.md)

Block range and filter

##### options

[`RPCOptions`](../type-aliases/RPCOptions.md)

RPC options

#### Returns

`Promise`\<[`TransactionLog`](../interfaces/TransactionLog.md)[]\>

The array of transaction logs

***

### getNetworkId()

> **getNetworkId**(`options`): `Promise`\<`bigint`\>

Defined in: src/rpc-client.ts:130

Gets the network ID
This is used by default if the chain ID is not specified

#### Parameters

##### options

[`RPCOptions`](../type-aliases/RPCOptions.md)

RPC options

#### Returns

`Promise`\<`bigint`\>

The network ID

***

### getTransactionCount()

> **getTransactionCount**(`address`, `tag`, `options`): `Promise`\<`bigint`\>

Defined in: src/rpc-client.ts:172

Get transaction count (for next nonce)

#### Parameters

##### address

`string`

Address (0x...)

##### tag

[`BlockTag`](../type-aliases/BlockTag.md)

Tag that can be latest=last block or pending=last pending transaction

##### options

[`RPCOptions`](../type-aliases/RPCOptions.md)

RPC options

#### Returns

`Promise`\<`bigint`\>

The transaction count

***

### getTransactionReceipt()

> **getTransactionReceipt**(`txHash`, `options`): `Promise`\<[`TransactionReceipt`](../interfaces/TransactionReceipt.md)\>

Defined in: src/rpc-client.ts:225

Gets transaction receipt

#### Parameters

##### txHash

[`BytesLike`](../type-aliases/BytesLike.md)

The transaction hash

##### options

[`RPCOptions`](../type-aliases/RPCOptions.md)

RPC options

#### Returns

`Promise`\<[`TransactionReceipt`](../interfaces/TransactionReceipt.md)\>

The transaction receipt, or null if the transaction is not mined yet

***

### msgCall()

> **msgCall**(`callOptions`, `tag`, `options`): `Promise`\<`Buffer`\>

Defined in: src/rpc-client.ts:196

Performs a message call (for pure and view methods)

#### Parameters

##### callOptions

[`MessageCallOptions`](../interfaces/MessageCallOptions.md)

Calling options

##### tag

[`BlockTag`](../type-aliases/BlockTag.md)

Tag that can be latest=last block or pending=last pending transaction

##### options

[`RPCOptions`](../type-aliases/RPCOptions.md)

RPC options

#### Returns

`Promise`\<`Buffer`\>

The results (ABI encoded)

***

### rpcRequest()

> **rpcRequest**(`method`, `params`, `options`): `Promise`\<`any`\>

Defined in: src/rpc-client.ts:34

Performs a JSON-RPC request

#### Parameters

##### method

`string`

RPC Method

##### params

`any`[]

Method parameters

##### options

[`RPCOptions`](../type-aliases/RPCOptions.md)

Request options

#### Returns

`Promise`\<`any`\>

The JSON RPC result

***

### sendRawTransaction()

> **sendRawTransaction**(`txData`, `options`): `Promise`\<`Buffer`\>

Defined in: src/rpc-client.ts:214

Sends raw transaction

#### Parameters

##### txData

[`BytesLike`](../type-aliases/BytesLike.md)

Signed transaction

##### options

[`RPCOptions`](../type-aliases/RPCOptions.md)

RPC options

#### Returns

`Promise`\<`Buffer`\>

The transaction hash

***

### getInstance()

> `static` **getInstance**(): `Web3RPCClient`

Defined in: src/rpc-client.ts:20

Creates a singleton instance of Web3RPCClient

#### Returns

`Web3RPCClient`

A singleton instance
