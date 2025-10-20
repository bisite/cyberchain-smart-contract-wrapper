[**@cyberchain/smart-contract-wrapper**](../README.md)

***

[@cyberchain/smart-contract-wrapper](../README.md) / getTxBuildDetailsForDeploy

# Function: getTxBuildDetailsForDeploy()

> **getTxBuildDetailsForDeploy**(`byteCode`, `abi`, `constructorParams`, `value`): [`TransactionBuildDetails`](../interfaces/TransactionBuildDetails.md)

Defined in: src/contract.ts:38

Gets details to build a transaction to deploy a smart contract

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

## Returns

[`TransactionBuildDetails`](../interfaces/TransactionBuildDetails.md)

The details to build the transaction
