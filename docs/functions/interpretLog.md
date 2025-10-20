[**@cyberchain/smart-contract-wrapper**](../README.md)

***

[@cyberchain/smart-contract-wrapper](../README.md) / interpretLog

# Function: interpretLog()

> **interpretLog**(`log`, `abi`, `contractInterface`): [`SmartContractEvent`](../interfaces/SmartContractEvent.md)

Defined in: src/events.ts:16

Interprets transaction log

## Parameters

### log

[`TransactionLog`](../interfaces/TransactionLog.md)

Transaction log

### abi

[`ABILike`](../type-aliases/ABILike.md)

Smart contract ABI

### contractInterface

[`Interface`](../classes/Interface.md)

## Returns

[`SmartContractEvent`](../interfaces/SmartContractEvent.md)

The smart contract event, or null if it cannot be decoded
