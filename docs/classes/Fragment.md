[**@cyberchain/smart-contract-wrapper**](../README.md)

***

[@cyberchain/smart-contract-wrapper](../README.md) / Fragment

# Abstract Class: Fragment

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:205

An abstract class to represent An individual fragment from a parse ABI.

## Extended by

- [`NamedFragment`](NamedFragment.md)
- [`ConstructorFragment`](ConstructorFragment.md)
- [`FallbackFragment`](FallbackFragment.md)

## Properties

### inputs

> `readonly` **inputs**: readonly [`ParamType`](ParamType.md)[]

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:213

The inputs for the fragment.

***

### type

> `readonly` **type**: [`FragmentType`](../type-aliases/FragmentType.md)

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:209

The type of the fragment.

## Methods

### format()

> `abstract` **format**(`format?`): `string`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:221

Returns a string representation of this fragment as %%format%%.

#### Parameters

##### format?

[`FormatType`](../type-aliases/FormatType.md)

#### Returns

`string`

***

### from()

> `static` **from**(`obj`): `Fragment`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:226

Creates a new **Fragment** for %%obj%%, wich can be any supported
 ABI frgament type.

#### Parameters

##### obj

`any`

#### Returns

`Fragment`

***

### isConstructor()

> `static` **isConstructor**(`value`): `value is ConstructorFragment`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:230

Returns true if %%value%% is a [[ConstructorFragment]].

#### Parameters

##### value

`any`

#### Returns

`value is ConstructorFragment`

***

### isError()

> `static` **isError**(`value`): `value is ErrorFragment`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:234

Returns true if %%value%% is an [[ErrorFragment]].

#### Parameters

##### value

`any`

#### Returns

`value is ErrorFragment`

***

### isEvent()

> `static` **isEvent**(`value`): `value is EventFragment`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:238

Returns true if %%value%% is an [[EventFragment]].

#### Parameters

##### value

`any`

#### Returns

`value is EventFragment`

***

### isFunction()

> `static` **isFunction**(`value`): `value is FunctionFragment`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:242

Returns true if %%value%% is a [[FunctionFragment]].

#### Parameters

##### value

`any`

#### Returns

`value is FunctionFragment`

***

### isStruct()

> `static` **isStruct**(`value`): `value is StructFragment`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:246

Returns true if %%value%% is a [[StructFragment]].

#### Parameters

##### value

`any`

#### Returns

`value is StructFragment`
