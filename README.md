[![Build Status](https://travis-ci.com/noelyoo/learn-scilla.svg?branch=master)](https://travis-ci.com/noelyoo/learn-scilla)
[![License](https://img.shields.io/cran/l/devtools.svg)](https://github.com/noelyoo/learn-scilla/blob/master/LICENSE)
[![Gitter chat](http://img.shields.io/badge/chat-on%20gitter-077a8f.svg)](https://gitter.im/Zilliqa/SmartContract)

# learn-scilla

An interactive tutorial for people to learn Scilla, Zilliqa’s smart contract language, through a gamification process.

This is one of the [Zilliqa Ecosystem Grant Projects](https://blog.zilliqa.com/announcing-the-second-wave-of-zilliqa-ecosystem-grant-awardees-6e03edadcc0d).

## Install

### Install dependencies

```sh
yarn install
```

## Usage

### Start

The default port of this server is 3000.

```sh
yarn start
```

### Build the app

```sh
yarn build
```

### Lint

```sh
yarn tslint
```

### Prettier

```sh
yarn prettier
```

## Development process

- Bugs are always worked before enhancements
- Developers should work each issue according to a numbered branch corresponding to the issue `git checkout -b 123`
- To claim an issue, simply leave a comment with your request to work on it.
- If an issue is already claimed (assigned), do not attempt to claim it. Issues claimed by outside developers will have no assigned dev, but have the developers name in brackets.

**Please keep comments constructive and clean**

## Style guideline

We use [TSLint](https://palantir.github.io/tslint/) with custom configs to keep our code style consistent.

We also use [Prettier](https://prettier.io/) to auto-format our code. Be sure to either add a [text editor integration](https://prettier.io/docs/en/editors.html) to properly format your code changes.

## Branch structure & versioning

We use semantic versioning, but before a package reaches v1.0.0 all breaking changes as well as new features will be minor version bumps.

We have two main branches: master and development.

master represents the most recent released (published on npm) version.
