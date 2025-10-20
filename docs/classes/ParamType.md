[**@cyberchain/smart-contract-wrapper**](../README.md)

***

[@cyberchain/smart-contract-wrapper](../README.md) / ParamType

# Class: ParamType

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:97

Each input and output of a [[Fragment]] is an Array of **ParamType**.

## Properties

### arrayChildren

> `readonly` **arrayChildren**: `ParamType`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:135

The type of each child in the array.

 For non-array types this is ``null``.

***

### arrayLength

> `readonly` **arrayLength**: `number`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:129

The array length, or ``-1`` for dynamic-lengthed arrays.

 For non-array types this is ``null``.

***

### baseType

> `readonly` **baseType**: `string`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:111

The base type (e.g. ``"address"``, ``"tuple"``, ``"array"``)

***

### components

> `readonly` **components**: readonly `ParamType`[]

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:123

The components for the tuple.

 For non-tuple types this is ``null``.

***

### indexed

> `readonly` **indexed**: `boolean`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:117

True if the parameters is indexed.

 For non-indexable types this is ``null``.

***

### name

> `readonly` **name**: `string`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:102

The local name of the parameter (or ``""`` if unbound)

***

### type

> `readonly` **type**: `string`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:107

The fully qualified type (e.g. ``"address"``, ``"tuple(address)"``,
 ``"uint256[3][]"``)

## Methods

### format()

> **format**(`format?`): `string`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:151

Return a string representation of this type.

 For example,

 ``sighash" => "(uint256,address)"``

 ``"minimal" => "tuple(uint256,address) indexed"``

 ``"full" => "tuple(uint256 foo, address bar) indexed baz"``

#### Parameters

##### format?

[`FormatType`](../type-aliases/FormatType.md)

#### Returns

`string`

***

### isArray()

> **isArray**(): `boolean`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:158

Returns true if %%this%% is an Array type.

 This provides a type gaurd ensuring that [[arrayChildren]]
 and [[arrayLength]] are non-null.

#### Returns

`boolean`

***

### isIndexable()

> **isIndexable**(): `boolean`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:172

Returns true if %%this%% is an Indexable type.

 This provides a type gaurd ensuring that [[indexed]]
 is non-null.

#### Returns

`boolean`

***

### isTuple()

> **isTuple**(): `boolean`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:165

Returns true if %%this%% is a Tuple type.

 This provides a type gaurd ensuring that [[components]]
 is non-null.

#### Returns

`boolean`

***

### walk()

> **walk**(`value`, `process`): `any`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:177

Walks the **ParamType** with %%value%%, calling %%process%%
 on each type, destructing the %%value%% recursively.

#### Parameters

##### value

`any`

##### process

[`ParamTypeWalkFunc`](../type-aliases/ParamTypeWalkFunc.md)

#### Returns

`any`

***

### walkAsync()

> **walkAsync**(`value`, `process`): `Promise`\<`any`\>

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:185

Walks the **ParamType** with %%value%%, asynchronously calling
 %%process%% on each type, destructing the %%value%% recursively.

 This can be used to resolve ENS names by walking and resolving each
 ``"address"`` type.

#### Parameters

##### value

`any`

##### process

[`ParamTypeWalkAsyncFunc`](../type-aliases/ParamTypeWalkAsyncFunc.md)

#### Returns

`Promise`\<`any`\>

***

### from()

> `static` **from**(`obj`, `allowIndexed?`): `ParamType`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:192

Creates a new **ParamType** for %%obj%%.

 If %%allowIndexed%% then the ``indexed`` keyword is permitted,
 otherwise the ``indexed`` keyword will throw an error.

#### Parameters

##### obj

`any`

##### allowIndexed?

`boolean`

#### Returns

`ParamType`

***

### isParamType()

> `static` **isParamType**(`value`): `value is ParamType`

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/fragments.d.ts:196

Returns true if %%value%% is a **ParamType**.

#### Parameters

##### value

`any`

#### Returns

`value is ParamType`
