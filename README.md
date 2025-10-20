# Smart Contract Wrapper (CyberChain)

[![Test CI](https://github.com/bisite/cyberchain-smart-contract-wrapper/actions/workflows/test.yml/badge.svg)](https://github.com/bisite/cyberchain-smart-contract-wrapper/actions/workflows/test.yml) 
[![npm version](https://badge.fury.io/js/%40cyberchain%2Fsmart-contract-wrapper.svg)](https://badge.fury.io/js/%40cyberchain%2Fsmart-contract-wrapper)

Typescript wrapper for smart contract interaction (Adapted for post-quantum version of HyperLedger Besu, for the [CyberChain](https://cyberchain.bisite.es/) project).

This is a library to interact with Ethereum EVM using the JSON-RPC API. It allows both calling pure and view methods and also sending transactions.

## Installation

If you are using a npm managed project use:

```
npm install --save @cyberchain/smart-contract-wrapper
```

## Usage

This library exports various utilities, along with the class `SmartContractInterface`, that allows the interaction with smart contracts using the ABI definition.

Using this class you can create a class for a smart contract, implementing the methods you want to use, here is an example: [ERC20 Contract Wrapper](https://github.com/AgustinSRG/smart-contract-wrapper/blob/master/tests/utils/erc20.ts)

## Documentation

 - [Library documentation (Auto-generated)](./docs/README.md)

## Contract wrapper generator

For automatic generation of a smart contract wrappers, use the following utility:

 - [Smart contract wrapper generator](https://agustinsrg.github.io/smart-contract-wrapper/codegen)

Remember to replace `@asanrom/smart-contract-wrapper` with `@cyberchain/smart-contract-wrapper` when generating the wrappers.
