[**@cyberchain/smart-contract-wrapper**](../README.md)

***

[@cyberchain/smart-contract-wrapper](../README.md) / checkResultErrors

# Function: checkResultErrors()

> **checkResultErrors**(`result`): `object`[]

Defined in: node\_modules/@asanrom/ethers-abi/dist/abi/coders/abstract-coder.d.ts:77

Returns all errors found in a [[Result]].

 Since certain errors encountered when creating a [[Result]] do
 not impact the ability to continue parsing data, they are
 deferred until they are actually accessed. Hence a faulty string
 in an Event that is never used does not impact the program flow.

 However, sometimes it may be useful to access, identify or
 validate correctness of a [[Result]].

 @_docloc api/abi

## Parameters

### result

[`Result`](../classes/Result.md)

## Returns

`object`[]
