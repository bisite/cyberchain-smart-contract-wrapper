[**@cyberchain/smart-contract-wrapper**](../README.md)

***

[@cyberchain/smart-contract-wrapper](../README.md) / Indexed

# Class: Indexed

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/interface.d.ts:120

An **Indexed** is used as a value when a value that does not
 fit within a topic (i.e. not a fixed-length, 32-byte type). It
 is the ``keccak256`` of the value, and used for types such as
 arrays, tuples, bytes and strings.

## Constructors

### Constructor

> **new Indexed**(`hash`): `Indexed`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/interface.d.ts:138

@_ignore:

#### Parameters

##### hash

`string`

#### Returns

`Indexed`

## Properties

### \_isIndexed

> `readonly` **\_isIndexed**: `boolean`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/interface.d.ts:128

@_ignore:

***

### hash

> `readonly` **hash**: `string`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/interface.d.ts:124

The ``keccak256`` of the value logged.

## Methods

### isIndexed()

> `static` **isIndexed**(`value`): `value is Indexed`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/interface.d.ts:134

Returns ``true`` if %%value%% is an **Indexed**.

 This provides a Type Guard for property access.

#### Parameters

##### value

`any`

#### Returns

`value is Indexed`
