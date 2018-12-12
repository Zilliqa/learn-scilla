[![Build Status][travis-svg]][travis-url] [![codecov][codecov-svg]][codecov-url] [![dependency status][deps-svg]][deps-url] [![dev dependency status][dev-deps-svg]][dev-deps-url]
[![Gitter chat][gitter-svg]][gitter-url] [![License][license-svg]][license-url]

# learn-scilla 
[![Storybook][storybook-svg]][storybook-url]

An interactive tutorial for people to learn Scilla, Zilliqa’s smart contract language, through a gamification process. This is one of the [Zilliqa Ecosystem Grant Projects](https://blog.zilliqa.com/announcing-the-second-wave-of-zilliqa-ecosystem-grant-awardees-6e03edadcc0d). 

We are using Lighthouse to improve the quality of this web app with the [Lighthouse Report](https://lighthouse-dot-webdotdevsite.appspot.com/lh/html?url=https://learn-scilla.firebaseapp.com). 

## About Scilla

<p align="center"><img src="https://scilla.readthedocs.io/en/latest/_images/scilla-logo-color-transparent.png" align="center" width="130px" height="130px"/></p>

[Scilla](https://scilla-lang.org/) is an intermediate-level smart contract language being developed for [Zilliqa](https://zilliqa.com/). Scilla has been designed as a principled language with smart contract safety in mind. Scilla imposes a structure on smart contracts that will make applications less vulnerable to attacks by eliminating certain known vulnerabilities directly at the language-level.

## Installation and Usage

### `yarn`

Installs dependencies.

### `yarn start`

Runs the app in development mode.
Open `http://localhost:3000` to view it in the browser.

### `yarn build`

Builds the app for production to the build folder.

### `yarn test`

Runs the test watcher in an interactive mode.
We use [Jest](https://jestjs.io/) for testing.

## UI components

UI components library can be found on [Storybook](https://noelyoo.github.io/learn-scilla).

## Style guideline

We use the followings to keep our code style consistent:
* [TSLint](https://palantir.github.io/tslint/)
* [Prettier](https://prettier.io/)
* [stylelint](https://stylelint.io/)

## License

This project is open source software licensed as [GPL-3.0](https://github.com/noelyoo/learn-scilla/blob/develop/LICENSE).



[travis-svg]: https://travis-ci.com/noelyoo/learn-scilla.svg?branch=master
[travis-url]: https://travis-ci.com/noelyoo/learn-scilla
[codecov-svg]: https://codecov.io/gh/noelyoo/learn-scilla/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/noelyoo/learn-scilla
[storybook-svg]: https://github.com/storybooks/press/blob/master/badges/storybook.svg
[storybook-url]: https://noelyoo.github.io/learn-scilla/
[deps-svg]: https://david-dm.org/noelyoo/learn-scilla/status.svg
[deps-url]: https://david-dm.org/noelyoo/learn-scilla
[dev-deps-svg]: https://david-dm.org/noelyoo/learn-scilla/dev-status.svg
[dev-deps-url]: https://david-dm.org/noelyoo/learn-scilla?type=dev
[license-svg]: https://img.shields.io/cran/l/devtools.svg
[license-url]: https://github.com/noelyoo/learn-scilla/blob/master/LICENSE
[gitter-svg]: http://img.shields.io/badge/chat-on%20gitter-077a8f.svg
[gitter-url]: https://gitter.im/Zilliqa/SmartContract
