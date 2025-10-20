[**@cyberchain/smart-contract-wrapper**](../README.md)

***

[@cyberchain/smart-contract-wrapper](../README.md) / TransactionLogFilterOptions

# Interface: TransactionLogFilterOptions

Defined in: src/types.ts:404

Options to filter transaction logs

## Properties

### address?

> `optional` **address**: `string`

Defined in: src/types.ts:418

Contract address

***

### fromBlock?

> `optional` **fromBlock**: `string` \| `number` \| `bigint`

Defined in: src/types.ts:408

First block of the range

***

### toBlock?

> `optional` **toBlock**: `string` \| `number` \| `bigint`

Defined in: src/types.ts:413

Last block of the range

***

### topics?

> `optional` **topics**: ([`BytesLike`](../type-aliases/BytesLike.md) \| [`BytesLike`](../type-aliases/BytesLike.md)[])[]

Defined in: src/types.ts:423

Array of topics to filter by
