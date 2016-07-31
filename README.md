# generator-mdl-es6-browserify [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Creates a webapp with mdl, babel and browserify

## Intro

I quite often create simple web apps with ES6, bundle with browserify, use SASS and Material Design Lite. This generator quickly sets up my defaults.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-mdl-es6-browserify using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-mdl-es6-browserify
```

Then generate your new project:

```bash
yo mdl-es6-browserify
```

## Usage

Build the JS/SASS

```bash
npm run build
```

Or watch files for changes to build

```bash
npm run build:watch
```

Preview project on localhost:8000

```bash
npm run serve
```

## License

MIT © [Joe Strong](http://www.joestrong.co.uk)


[npm-image]: https://badge.fury.io/js/generator-mdl-browserify.svg
[npm-url]: https://npmjs.org/package/generator-mdl-browserify
[travis-image]: https://travis-ci.org/joestrong/generator-mdl-browserify.svg?branch=master
[travis-url]: https://travis-ci.org/joestrong/generator-mdl-browserify
[daviddm-image]: https://david-dm.org/joestrong/generator-mdl-browserify.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/joestrong/generator-mdl-browserify
