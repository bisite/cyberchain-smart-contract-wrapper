[**@cyberchain/smart-contract-wrapper**](../README.md)

***

[@cyberchain/smart-contract-wrapper](../README.md) / SmartContractInterface

# Class: SmartContractInterface

Defined in: src/contract.ts:56

Provides an interface for smart contract interaction

## Constructors

### Constructor

> **new SmartContractInterface**(`address`, `abi`, `rpcOptions`): `SmartContractInterface`

Defined in: src/contract.ts:82

#### Parameters

##### address

`string`

Address of the smart contract

##### abi

[`ABILike`](../type-aliases/ABILike.md)

Contract ABI

##### rpcOptions

[`RPCOptions`](../type-aliases/RPCOptions.md)

RPC options

#### Returns

`SmartContractInterface`

## Properties

### abi

> **abi**: [`ABILike`](../type-aliases/ABILike.md)

Defined in: src/contract.ts:70

Contract ABI

***

### address

> **address**: `string`

Defined in: src/contract.ts:60

Address of the smart contract

***

### rpcOptions

> **rpcOptions**: [`RPCOptions`](../type-aliases/RPCOptions.md)

Defined in: src/contract.ts:65

RPC options

## Methods

### callMutableMethod()

> **callMutableMethod**(`method`, `params`, `options`): `Promise`\<[`TransactionResult`](../interfaces/TransactionResult.md)\<`void`\>\>

Defined in: src/contract.ts:117

Calls a mutable, non-payable method
This sends a transaction

#### Parameters

##### method

The method name (must be in the ABI)

`string` | [`FunctionFragment`](FunctionFragment.md)

##### params

[`InputABIParams`](../type-aliases/InputABIParams.md)

The parameters for the method

##### options

[`MethodTransactionOptions`](../interfaces/MethodTransactionOptions.md)

The options for sending the transaction

#### Returns

`Promise`\<[`TransactionResult`](../interfaces/TransactionResult.md)\<`void`\>\>

The transaction receipt

***

### callPayableMethod()

> **callPayableMethod**(`method`, `params`, `value`, `options`): `Promise`\<[`TransactionResult`](../interfaces/TransactionResult.md)\<`void`\>\>

Defined in: src/contract.ts:150

Calls a mutable, payable method
This sends a transaction

#### Parameters

##### method

The method name (must be in the ABI)

`string` | [`FunctionFragment`](FunctionFragment.md)

##### params

[`InputABIParams`](../type-aliases/InputABIParams.md)

The parameters for the method

##### value

[`QuantityLike`](../type-aliases/QuantityLike.md)

The value to send (wei)

##### options

[`MethodTransactionOptions`](../interfaces/MethodTransactionOptions.md)

The options for sending the transaction

#### Returns

`Promise`\<[`TransactionResult`](../interfaces/TransactionResult.md)\<`void`\>\>

The transaction receipt

***

### callViewMethod()

> **callViewMethod**(`method`, `params`, `options`): `Promise`\<[`OutputABIParams`](../type-aliases/OutputABIParams.md)\>

Defined in: src/contract.ts:96

Calls a view or pure method

#### Parameters

##### method

The method name (must be in the ABI)

`string` | [`FunctionFragment`](FunctionFragment.md)

##### params

[`InputABIParams`](../type-aliases/InputABIParams.md)

The parameters for the method

##### options

[`MethodCallingOptions`](../interfaces/MethodCallingOptions.md)

The options for calling the method

#### Returns

`Promise`\<[`OutputABIParams`](../type-aliases/OutputABIParams.md)\>

The decoded method result

***

### encodeMutableMethod()

> **encodeMutableMethod**(`method`, `params`): [`TransactionBuildDetails`](../interfaces/TransactionBuildDetails.md)

Defined in: src/contract.ts:132

Encodes a mutable, non-payable method

#### Parameters

##### method

The method name (must be in the ABI)

`string` | [`FunctionFragment`](FunctionFragment.md)

##### params

[`InputABIParams`](../type-aliases/InputABIParams.md)

The parameters for the method

#### Returns

[`TransactionBuildDetails`](../interfaces/TransactionBuildDetails.md)

The details to build the transaction

***

### encodePayableMethod()

> **encodePayableMethod**(`method`, `params`, `value`): [`TransactionBuildDetails`](../interfaces/TransactionBuildDetails.md)

Defined in: src/contract.ts:166

Encodes a mutable, payable method

#### Parameters

##### method

The method name (must be in the ABI)

`string` | [`FunctionFragment`](FunctionFragment.md)

##### params

[`InputABIParams`](../type-aliases/InputABIParams.md)

The parameters for the method

##### value

[`QuantityLike`](../type-aliases/QuantityLike.md)

The value to send (wei)

#### Returns

[`TransactionBuildDetails`](../interfaces/TransactionBuildDetails.md)

The details to build the transaction

***

### findEvent()

> **findEvent**(`receipt`, `name`): [`SmartContractEvent`](../interfaces/SmartContractEvent.md)

Defined in: src/contract.ts:197

Finds event in transaction receipt

#### Parameters

##### receipt

[`TransactionReceipt`](../interfaces/TransactionReceipt.md)

Transaction recept

##### name

`string`

Event name

#### Returns

[`SmartContractEvent`](../interfaces/SmartContractEvent.md)

The event, or null if not found

***

### findEvents()

> **findEvents**(`fromBlock`, `toBlock`): `Promise`\<[`SmartContractEvent`](../interfaces/SmartContractEvent.md)[]\>

Defined in: src/contract.ts:213

Finds smart contract events in a block range

#### Parameters

##### fromBlock

First block in the range

`string` | `number` | `bigint`

##### toBlock

Last block in the range

`string` | `number` | `bigint`

#### Returns

`Promise`\<[`SmartContractEvent`](../interfaces/SmartContractEvent.md)[]\>

The array of parsed events

***

### parseTransactionLogs()

> **parseTransactionLogs**(`logs`): [`SmartContractEvent`](../interfaces/SmartContractEvent.md)[]

Defined in: src/contract.ts:180

Parses transaction logs

#### Parameters

##### logs

[`TransactionLog`](../interfaces/TransactionLog.md)[]

Transaction logs

#### Returns

[`SmartContractEvent`](../interfaces/SmartContractEvent.md)[]

The smart contract events
