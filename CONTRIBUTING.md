## Contribution Guide

We welcome contributions from anyone on the internet and are grateful for even the smallest contributions. This document will help get you setup to start contributing.

### Getting started

1.  Fork `noelyoo/learn-scilla`
2.  Clone your fork
3.  Follow the [installation & build steps](https://github.com/noelyoo/learn-scilla#installation-and-usage) in the repo's top-level README.
4.  Setup the recommended [Development Tooling](#development-tooling).
5.  Open a PR against the `development` branch and describe the change you are intending to undertake in the PR description. (see [our branch naming conventions](#branch-structure))

### Branch structure

We have two main branches:

-   `master` represents the most recently released version of the codebase.
-   `development` represents the current development state of the codebase.

ALL PRs should be opened against `development`.

### Development Tooling

We strongly recommend you use the [VSCode](https://code.visualstudio.com/) text editor since most of our code is written in Typescript and it offers amazing support for the language.

#### Linter

We use [TSLint](https://palantir.github.io/tslint/) with [custom configs](https://github.com/noelyoo/learn-scilla/blob/master/tslint.json) to keep our code-style consistent.

#### Auto-formatter

We use [Prettier](https://prettier.io/) to auto-format our code. Be sure to either add a [text editor integration](https://prettier.io/docs/en/editors.html) or a [pre-commit hook](https://prettier.io/docs/en/precommit.html) to properly format your code changes.

-   VSCode: [prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

