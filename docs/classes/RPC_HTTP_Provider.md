[**@cyberchain/smart-contract-wrapper**](../README.md)

***

[@cyberchain/smart-contract-wrapper](../README.md) / RPC\_HTTP\_Provider

# Class: RPC\_HTTP\_Provider

Defined in: src/rpc-provider-http.ts:27

HTTP provider for JSON-RPC requests

## Implements

- [`RPCProvider`](../interfaces/RPCProvider.md)

## Constructors

### Constructor

> **new RPC\_HTTP\_Provider**(`url`, `options?`): `RPC_HTTP_Provider`

Defined in: src/rpc-provider-http.ts:41

#### Parameters

##### url

The HTTP or HTTPS url to connect to the node

`string` | `URL`

##### options?

[`RPC_HTTP_Provider_Options`](../interfaces/RPC_HTTP_Provider_Options.md)

Options

#### Returns

`RPC_HTTP_Provider`

## Properties

### url

> **url**: `URL`

Defined in: src/rpc-provider-http.ts:28

## Methods

### destroy()

> **destroy**(): `void`

Defined in: src/rpc-provider-http.ts:148

Closes all the active connections

#### Returns

`void`

***

### rpcRequest()

> **rpcRequest**(`method`, `params`, `timeout`): `Promise`\<`any`\>

Defined in: src/rpc-provider-http.ts:79

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

#### Implementation of

[`RPCProvider`](../interfaces/RPCProvider.md).[`rpcRequest`](../interfaces/RPCProvider.md#rpcrequest)
