
[![Build Status](https://travis-ci.com/noelyoo/learn-scilla.svg?branch=master)](https://travis-ci.com/noelyoo/learn-scilla) [![Storybook](https://github.com/storybooks/press/blob/master/badges/storybook.svg)](https://noelyoo.github.io/learn-scilla/) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) [![License](https://img.shields.io/cran/l/devtools.svg)](https://github.com/noelyoo/learn-scilla/blob/master/LICENSE) [![Gitter chat](http://img.shields.io/badge/chat-on%20gitter-077a8f.svg)](https://gitter.im/Zilliqa/SmartContract)

# learn-scilla 

An interactive tutorial for people to learn Scilla, Zilliqa’s smart contract language, through a gamification process. This is one of the [Zilliqa Ecosystem Grant Projects](https://blog.zilliqa.com/announcing-the-second-wave-of-zilliqa-ecosystem-grant-awardees-6e03edadcc0d). 

We are using Lighthouse to improve the quality of this web app with the [Lighthouse Report](https://lighthouse-dot-webdotdevsite.appspot.com/lh/html?url=https://learn-scilla.firebaseapp.com). 

## What is Scilla?

<p align="center"><img src="https://scilla.readthedocs.io/en/latest/_images/scilla-logo-color-transparent.png" align="center" width="130px" height="130px"/></p>

[Scilla](https://scilla-lang.org/) is an intermediate-level smart contract language being developed for [Zilliqa](https://zilliqa.com/). Scilla has been designed as a principled language with smart contract safety in mind. Scilla imposes a structure on smart contracts that will make applications less vulnerable to attacks by eliminating certain known vulnerabilities directly at the language-level.

## Installation and Usage

#### `yarn`

Installs dependencies.

#### `yarn start`

Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

#### `yarn build`

Builds the app for production to the build folder.

#### `yarn test`

Runs the test watcher in an interactive mode.
We use [Jest](https://jestjs.io/) for testing.

## UI components

UI components library can be found on [Storybook](https://noelyoo.github.io/learn-scilla).

## Style guideline

We use [TSLint](https://palantir.github.io/tslint/) with custom configs to keep our code style consistent. We also use [Prettier](https://prettier.io/) to auto-format our code. Be sure to either add a [text editor integration](https://prettier.io/docs/en/editors.html) to properly format your code changes.

## License

This project is open source software licensed as [GPL-3.0](https://github.com/noelyoo/learn-scilla/blob/develop/LICENSE).
