[**@cyberchain/smart-contract-wrapper**](../README.md)

***

[@cyberchain/smart-contract-wrapper](../README.md) / ConstructorFragment

# Class: ConstructorFragment

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:325

A Fragment which represents a constructor.

## Extends

- [`Fragment`](Fragment.md)

## Properties

### gas

> `readonly` **gas**: `bigint`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:333

The recommended gas limit for deployment or ``null``.

***

### inputs

> `readonly` **inputs**: readonly [`ParamType`](ParamType.md)[]

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:213

The inputs for the fragment.

#### Inherited from

[`Fragment`](Fragment.md).[`inputs`](Fragment.md#inputs)

***

### payable

> `readonly` **payable**: `boolean`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:329

Whether the constructor can receive an endowment.

***

### type

> `readonly` **type**: [`FragmentType`](../type-aliases/FragmentType.md)

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:209

The type of the fragment.

#### Inherited from

[`Fragment`](Fragment.md).[`type`](Fragment.md#type)

## Methods

### format()

> **format**(`format?`): `string`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:341

Returns a string representation of this constructor as %%format%%.

#### Parameters

##### format?

[`FormatType`](../type-aliases/FormatType.md)

#### Returns

`string`

#### Overrides

[`Fragment`](Fragment.md).[`format`](Fragment.md#format)

***

### from()

> `static` **from**(`obj`): `ConstructorFragment`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:345

Returns a new **ConstructorFragment** for %%obj%%.

#### Parameters

##### obj

`any`

#### Returns

`ConstructorFragment`

#### Overrides

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

### isFragment()

> `static` **isFragment**(`value`): `value is ConstructorFragment`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:350

Returns ``true`` and provides a type guard if %%value%% is a
 **ConstructorFragment**.

#### Parameters

##### value

`any`

#### Returns

`value is ConstructorFragment`

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
