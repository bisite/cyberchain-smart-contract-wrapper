[**@cyberchain/smart-contract-wrapper**](../README.md)

***

[@cyberchain/smart-contract-wrapper](../README.md) / NamedFragment

# Abstract Class: NamedFragment

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:252

An abstract class to represent An individual fragment
 which has a name from a parse ABI.

## Extends

- [`Fragment`](Fragment.md)

## Extended by

- [`ErrorFragment`](ErrorFragment.md)
- [`EventFragment`](EventFragment.md)
- [`FunctionFragment`](FunctionFragment.md)
- [`StructFragment`](StructFragment.md)

## Properties

### inputs

> `readonly` **inputs**: readonly [`ParamType`](ParamType.md)[]

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:213

The inputs for the fragment.

#### Inherited from

[`Fragment`](Fragment.md).[`inputs`](Fragment.md#inputs)

***

### name

> `readonly` **name**: `string`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:256

The name of the fragment.

***

### type

> `readonly` **type**: [`FragmentType`](../type-aliases/FragmentType.md)

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:209

The type of the fragment.

#### Inherited from

[`Fragment`](Fragment.md).[`type`](Fragment.md#type)

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

#### Inherited from

[`Fragment`](Fragment.md).[`format`](Fragment.md#format)

***

### from()

> `static` **from**(`obj`): [`Fragment`](Fragment.md)

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:226

Creates a new **Fragment** for %%obj%%, wich can be any supported
 ABI frgament type.

#### Parameters

##### obj

`any`

#### Returns

[`Fragment`](Fragment.md)

#### Inherited from

[`Fragment`](Fragment.md).[`from`](Fragment.md#from)

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

#### Inherited from

[`Fragment`](Fragment.md).[`isConstructor`](Fragment.md#isconstructor)

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

#### Inherited from

[`Fragment`](Fragment.md).[`isError`](Fragment.md#iserror)

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

#### Inherited from

[`Fragment`](Fragment.md).[`isEvent`](Fragment.md#isevent)

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

#### Inherited from

[`Fragment`](Fragment.md).[`isFunction`](Fragment.md#isfunction)

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

#### Inherited from

[`Fragment`](Fragment.md).[`isStruct`](Fragment.md#isstruct)
