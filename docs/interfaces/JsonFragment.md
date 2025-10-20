[**@cyberchain/smart-contract-wrapper**](../README.md)

***

[@cyberchain/smart-contract-wrapper](../README.md) / JsonFragment

# Interface: JsonFragment

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:29

A fragment for a method, event or error in a [JSON ABI format](link-solc-jsonabi).

## Properties

### anonymous?

> `readonly` `optional` **anonymous**: `boolean`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:41

If the event is anonymous.

***

### constant?

> `readonly` `optional` **constant**: `boolean`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:49

If the function is constant.

***

### gas?

> `readonly` `optional` **gas**: `string`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:65

The gas limit to use when sending a transaction for this function.

***

### inputs?

> `readonly` `optional` **inputs**: readonly [`JsonFragmentType`](JsonFragmentType.md)[]

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:57

The input parameters.

***

### name?

> `readonly` `optional` **name**: `string`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:33

The name of the error, event, function, etc.

***

### outputs?

> `readonly` `optional` **outputs**: readonly [`JsonFragmentType`](JsonFragmentType.md)[]

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:61

The output parameters.

***

### payable?

> `readonly` `optional` **payable**: `boolean`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:45

If the function is payable.

***

### stateMutability?

> `readonly` `optional` **stateMutability**: `string`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:53

The mutability state of the function.

***

### type?

> `readonly` `optional` **type**: `string`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:37

The type of the fragment (e.g. ``event``, ``"function"``, etc.)
