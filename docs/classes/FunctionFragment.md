[**@cyberchain/smart-contract-wrapper**](../README.md)

***

[@cyberchain/smart-contract-wrapper](../README.md) / FunctionFragment

# Class: FunctionFragment

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:378

A Fragment which represents a method.

## Extends

- [`NamedFragment`](NamedFragment.md)

## Properties

### constant

> `readonly` **constant**: `boolean`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:382

If the function is constant (e.g. ``pure`` or ``view`` functions).

***

### gas

> `readonly` **gas**: `bigint`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:399

The recommended gas limit to send when calling this function.

***

### inputs

> `readonly` **inputs**: readonly [`ParamType`](ParamType.md)[]

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:213

The inputs for the fragment.

#### Inherited from

[`NamedFragment`](NamedFragment.md).[`inputs`](NamedFragment.md#inputs)

***

### name

> `readonly` **name**: `string`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:256

The name of the fragment.

#### Inherited from

[`NamedFragment`](NamedFragment.md).[`name`](NamedFragment.md#name)

***

### outputs

> `readonly` **outputs**: readonly [`ParamType`](ParamType.md)[]

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:386

The returned types for the result of calling this function.

***

### payable

> `readonly` **payable**: `boolean`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:395

If the function can be sent value during invocation.

***

### stateMutability

> `readonly` **stateMutability**: `"view"` \| `"payable"` \| `"nonpayable"` \| `"pure"`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:391

The state mutability (e.g. ``payable``, ``nonpayable``, ``view``
 or ``pure``)

***

### type

> `readonly` **type**: [`FragmentType`](../type-aliases/FragmentType.md)

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:209

The type of the fragment.

#### Inherited from

[`NamedFragment`](NamedFragment.md).[`type`](NamedFragment.md#type)

## Accessors

### selector

#### Get Signature

> **get** **selector**(): `string`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:407

The Function selector.

##### Returns

`string`

## Methods

### format()

> **format**(`format?`): `string`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:411

Returns a string representation of this function as %%format%%.

#### Parameters

##### format?

[`FormatType`](../type-aliases/FormatType.md)

#### Returns

`string`

#### Overrides

[`NamedFragment`](NamedFragment.md).[`format`](NamedFragment.md#format)

***

### from()

> `static` **from**(`obj`): `FunctionFragment`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:419

Returns a new **FunctionFragment** for %%obj%%.

#### Parameters

##### obj

`any`

#### Returns

`FunctionFragment`

#### Overrides

[`NamedFragment`](NamedFragment.md).[`from`](NamedFragment.md#from)

***

### getSelector()

> `static` **getSelector**(`name`, `params?`): `string`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:415

Return the selector for a function with %%name%% and %%params%%.

#### Parameters

##### name

`string`

##### params?

`any`[]

#### Returns

`string`

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

[`NamedFragment`](NamedFragment.md).[`isConstructor`](NamedFragment.md#isconstructor)

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

[`NamedFragment`](NamedFragment.md).[`isError`](NamedFragment.md#iserror)

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

[`NamedFragment`](NamedFragment.md).[`isEvent`](NamedFragment.md#isevent)

***

### isFragment()

> `static` **isFragment**(`value`): `value is FunctionFragment`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:424

Returns ``true`` and provides a type guard if %%value%% is a
 **FunctionFragment**.

#### Parameters

##### value

`any`

#### Returns

`value is FunctionFragment`

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

[`NamedFragment`](NamedFragment.md).[`isFunction`](NamedFragment.md#isfunction)

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

[`NamedFragment`](NamedFragment.md).[`isStruct`](NamedFragment.md#isstruct)
