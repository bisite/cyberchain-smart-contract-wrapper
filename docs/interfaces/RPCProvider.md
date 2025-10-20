[**@cyberchain/smart-contract-wrapper**](../README.md)

***

[@cyberchain/smart-contract-wrapper](../README.md) / RPCProvider

# Interface: RPCProvider

Defined in: src/types.ts:242

RPC provider to send json-RPC request to the node

## Methods

### rpcRequest()

> **rpcRequest**(`method`, `params`, `timeout`): `Promise`\<`any`\>

Defined in: src/types.ts:250

Performs a JSON-RPC request

#### Parameters

##### method

`string`

RPC Method

##### params

`any`[]

Method parameters

##### timeout

`number`

Timeout in ms

#### Returns

`Promise`\<`any`\>

The JSON RPC result
