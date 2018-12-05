<img src="https://scilla.readthedocs.io/en/latest/_images/scilla-logo-color-transparent.png" align="right" width="130px" height="130px"/>

# learn-scilla 

[![Build Status](https://travis-ci.com/noelyoo/learn-scilla.svg?branch=master)](https://travis-ci.com/noelyoo/learn-scilla) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/noelyoo/learn-scilla/pulls) [![License](https://img.shields.io/cran/l/devtools.svg)](https://github.com/noelyoo/learn-scilla/blob/master/LICENSE) [![Gitter chat](http://img.shields.io/badge/chat-on%20gitter-077a8f.svg)](https://gitter.im/Zilliqa/SmartContract) 

<hr>
<p align="center">
<a href="#what-is-this">What is this?</a> • <a href="#what-is-scilla">What is Scilla?</a> • <a href="#installation-and-usage">Installation and usage</a> • <a href="#style-guideline">Style guideline</a>
</p>
<hr>

## What is this?
An interactive tutorial for people to learn Scilla, Zilliqa’s smart contract language, through a gamification process. This is one of the [Zilliqa Ecosystem Grant Projects](https://blog.zilliqa.com/announcing-the-second-wave-of-zilliqa-ecosystem-grant-awardees-6e03edadcc0d). 

We are using Lighthouse to improve the quality of this web app with the [Lighthouse Report](https://lighthouse-dot-webdotdevsite.appspot.com/lh/html?url=https://learn-scilla.firebaseapp.com). 

## What is Scilla?
[Scilla](https://scilla-lang.org/) is an intermediate-level smart contract language being developed for [Zilliqa](https://zilliqa.com/). Scilla has been designed as a principled language with smart contract safety in mind. Scilla imposes a structure on smart contracts that will make applications less vulnerable to attacks by eliminating certain known vulnerabilities directly at the language-level.

## Installation and Usage

### Install

```sh
yarn install
```

### Start

The default port of this server is 3000.

```sh
yarn start
```

### Build

```sh
yarn build
```

## Style guideline

We use [TSLint](https://palantir.github.io/tslint/) with custom configs to keep our code style consistent. We also use [Prettier](https://prettier.io/) to auto-format our code. Be sure to either add a [text editor integration](https://prettier.io/docs/en/editors.html) to properly format your code changes.

