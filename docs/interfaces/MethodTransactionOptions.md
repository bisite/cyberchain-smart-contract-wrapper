[**@cyberchain/smart-contract-wrapper**](../README.md)

***

[@cyberchain/smart-contract-wrapper](../README.md) / MethodTransactionOptions

# Interface: MethodTransactionOptions

Defined in: src/types.ts:318

Options for sending a method transaction

## Properties

### chainId?

> `optional` **chainId**: [`QuantityLike`](../type-aliases/QuantityLike.md)

Defined in: src/types.ts:334

Chain ID

***

### complementaryAddress

> **complementaryAddress**: `string`

Defined in: src/types.ts:329

Complementary address
If signing with ECDSA, the ML-DSA address
If signing with ML-DSA, the ECDSA address

***

### gasLimit?

> `optional` **gasLimit**: [`QuantityLike`](../type-aliases/QuantityLike.md)

Defined in: src/types.ts:360

Gas limit, by default it used the estimated gas

***

### gasPrice?

> `optional` **gasPrice**: [`QuantityLike`](../type-aliases/QuantityLike.md)

Defined in: src/types.ts:345

Gas price, by default it used the recommended gas price

***

### isFeeMarket?

> `optional` **isFeeMarket**: `boolean`

Defined in: src/types.ts:340

Fee market transaction? (to use fee instead of gas price)
True by default

***

### logFunction()?

> `optional` **logFunction**: (`msg`) => `void`

Defined in: src/types.ts:378

Log Function to receive progress messages

#### Parameters

##### msg

`string`

#### Returns

`void`

***

### maxFeePerGas?

> `optional` **maxFeePerGas**: [`QuantityLike`](../type-aliases/QuantityLike.md)

Defined in: src/types.ts:355

The maximum total fee

***

### maxPriorityFeePerGas?

> `optional` **maxPriorityFeePerGas**: [`QuantityLike`](../type-aliases/QuantityLike.md)

Defined in: src/types.ts:350

The maximum inclusion fee per gas (this fee is given to the miner)

***

### nonce?

> `optional` **nonce**: [`QuantityLike`](../type-aliases/QuantityLike.md)

Defined in: src/types.ts:373

Transaction nonce. 
If not provided:
 - The transactions count is used.
 - In case of collision, the transaction will be retried with a new nonce.

***

### receiptWaitTimeout?

> `optional` **receiptWaitTimeout**: `number`

Defined in: src/types.ts:365

Timeout in milliseconds to wait for the transaction receipt. Set to 0 for no timeout. By default no timeout.

***

### signKey

> **signKey**: [`SignKey`](../type-aliases/SignKey.md)

Defined in: src/types.ts:322

Key to sign the transaction
