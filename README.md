# Hypergraph CLI

[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Code Style Prettier Standard](https://img.shields.io/badge/format-prettier_standard-ff69b4.svg)](https://github.com/sheerun/prettier-standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/hypergraph-xyz/cli.svg)](https://greenkeeper.io/)
![ci](https://github.com/hypergraph-xyz/cli/workflows/ci/badge.svg)

Hypergraph is a tool for creating and publishing research projects as-you-go, built upon the [p2pcommons](https://p2pcommons.com).

With Hypergraph, we aim to reinvent the publication process in a way that empowers researchers to do better science. Science that is transparent, accessible to everyone and free from publication bias, time-consuming bureaucracy and centralized control.

The Hypergraph command-line interface (CLI) is a power-user alternative to [Hypergraph Desktop](https://github.com/hypergraph-xyz/desktop), that we use (among other things) for trying out new [p2pcommons SDK](https://github.com/p2pcommons/sdk-js) features.

Right now, Hypergraph is in active development. The current version supports an offline as-you-go workflow and demonstrates some of Hypergraph's core concepts.

![Hypergraph CLI menu, create content & read content screenshot](/docs/screenshots/screenshot-menu-create-read.png)

This environment was developed initially for use in scholarly
communication but can be applied outside as well. Anything that can
benefit from a step-by-step approach with provenance pretty much
(@chartgerink also hopes to use it for music :musical_keyboard:).

## Installation

```bash
npm install -g @hypergraph-xyz/cli
```

If you do not have [NodeJS](https://nodejs.org/) installed, please
install this first. Some additional instructions follow.

### Windows

Directly download the NodeJS installer, or install it through the [Chocolatey](https://chocolatey.org/) package manager.

### Mac OS

[Install Homebrew](https://brew.sh/) and install NodeJS and the Hypergraph dependencies from the Terminal

```zsh
brew install node libtool autoconf automake
```

### Linux

Using your package manager, install NodeJS.

```bash
apt install nodejs
```

## Usage

```bash
$ hypergraph --help

  Usage
    $ hypergraph <action> <input>

  Actions
    create    [type]                   Create a module
    read      [hash]                   Read a module's metadata
    update    [hash]                   Update a module's metadata
    delete    [hash]                   Delete a contnet module
    open      [hash]                   Open a module's folder
    main      [hash]                   Open a module's main file
    path      [hash]                   Print module path
    list      [type]                   List writable modules
    edit      [hash]                   Edit main file
    publish   [profile] [content]      Publish content to a profile
    unpublish [profile] [content]      Unpublish content from a profile
    follow    [profile]                Follow a profile
    unfollow  [profile]                Unfollow a profile
    config    <key> [value]            Change hypergraph configuration
    logout                             Log out of Vault account

  Global options
    --env, -e                          Dotfiles path (default ~/.p2pcommons)
    --help, -h                         Display [action] help text
    --version, -v                      Display version

  Examples
    $ hypergraph                       Interactive mode
    $ hypergraph edit --help           Display help text for edit action

```

This tool _directly_ allows you to start using public collaborative
infrastructure.

After installation, the `hypergraph` command is exported to your command
line.

We follow a simple format for the commands. However, we realize this
isn't easy to remember at first so you can also invoke interactive
mode by simply giving `hypergraph`. You will be guided through all the
options one-by-one. :angel-tone4:

All commands are structured as

```bash
hypergraph <action> <input> <arguments>
```

You will always be provided with an interactive set of options if you
omit an action, input, or argument(s) (if relevant).

Help is provided under `hypergraph --help` and the maintainers will do
their best to answer your questions in the issues.

## Contributing

Please note we adhere to a [Code of Conduct](./CODE_OF_CONDUCT.md) and
any contributions not in line with it (_tl;dr_ be an empathetic,
considerate person) will not be accepted. Please notify
[@chartgerink](mailto:chris@libscie.org) if anything happens.

If you want to develop your own applications using this public
collaborative infrastructure, we recommend you look at our
[Application Programmatic Interface
(API)](https://github.com/libscie/api). All data is portable between
applications if it adheres to the specifications outlined in that
repository.

## How to release

1. `npm run release` will guide you through the node module process and create a GitHub release
1. Write release notes and publish the GitHub release
1. Tell your Hypergraph friends about it

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://twitter.com/juliangruber/"><img src="https://avatars2.githubusercontent.com/u/10247?v=4" width="100px;" alt=""/><br /><sub><b>Julian Gruber</b></sub></a><br /><a href="#maintenance-juliangruber" title="Maintenance">🚧</a> <a href="https://github.com/hypergraph-xyz/cli/commits?author=juliangruber" title="Code">💻</a> <a href="https://github.com/hypergraph-xyz/cli/commits?author=juliangruber" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/nehamoopen"><img src="https://avatars3.githubusercontent.com/u/37183829?v=4" width="100px;" alt=""/><br /><sub><b>nehamoopen</b></sub></a><br /><a href="#ideas-nehamoopen" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://chjh.nl"><img src="https://avatars0.githubusercontent.com/u/2946344?v=4" width="100px;" alt=""/><br /><sub><b>Chris Hartgerink</b></sub></a><br /><a href="#ideas-chartgerink" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/hypergraph-xyz/cli/commits?author=chartgerink" title="Tests">⚠️</a> <a href="https://github.com/hypergraph-xyz/cli/commits?author=chartgerink" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/jameslibscie"><img src="https://avatars2.githubusercontent.com/u/59870484?v=4" width="100px;" alt=""/><br /><sub><b>James Lomas</b></sub></a><br /><a href="#projectManagement-jameslibscie" title="Project Management">📆</a> <a href="https://github.com/hypergraph-xyz/cli/issues?q=author%3Ajameslibscie" title="Bug reports">🐛</a> <a href="#ideas-jameslibscie" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
