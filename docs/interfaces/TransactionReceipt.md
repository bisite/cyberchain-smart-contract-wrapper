[**@cyberchain/smart-contract-wrapper**](../README.md)

***

[@cyberchain/smart-contract-wrapper](../README.md) / TransactionReceipt

# Interface: TransactionReceipt

Defined in: src/types.ts:207

Transaction receipt
https://ethereum.org/es/developers/docs/apis/json-rpc/#eth_gettransactionreceipt

## Properties

### blockHash

> **blockHash**: `Buffer`

Defined in: src/types.ts:210

***

### blockNumber

> **blockNumber**: `bigint`

Defined in: src/types.ts:211

***

### contractAddress

> **contractAddress**: `string`

Defined in: src/types.ts:216

***

### cumulativeGasUsed

> **cumulativeGasUsed**: `bigint`

Defined in: src/types.ts:214

***

### from

> **from**: `Buffer`

Defined in: src/types.ts:212

***

### gasUsed

> **gasUsed**: `bigint`

Defined in: src/types.ts:215

***

### logs

> **logs**: [`TransactionLog`](TransactionLog.md)[]

Defined in: src/types.ts:217

***

### logsBloom

> **logsBloom**: `Buffer`

Defined in: src/types.ts:218

***

### root

> **root**: `Buffer`

Defined in: src/types.ts:219

***

### status

> **status**: `bigint`

Defined in: src/types.ts:220

***

### to

> **to**: `Buffer`

Defined in: src/types.ts:213

***

### transactionHash

> **transactionHash**: `Buffer`

Defined in: src/types.ts:208

***

### transactionIndex

> **transactionIndex**: `bigint`

Defined in: src/types.ts:209
