# workfront-cookie
[![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-url] [![Dependencies][deps-image]][deps-url] [![Dev. Dependencies][dev-deps-image]][dev-deps-url] [![MIT License][license-image]][license-url] [![Build Status][travis-image]][travis-url] [![Coverage][codecov-image]][codecov-url]

Provides methods for extracting values from workfront cookies.

## Installation

Via NPM:

`npm i workfront-cookie --save-dev`

Package provides UMD bundle, so you can also include it to your page using `<script>` tag.

In that case a global variable called `WorkfrontCookie` will be created.  


## API

Bundle exposes an object with the following items:

#### COOKIE_NAME: string

A constant string representing name of the Workfront cookie.

#### getSessionID(): undefined | string

Returns Workfront session ID currently stored in the cookie.

If for some reason it is impossible to determine session ID, this method will return `undefined`.

#### readCookie(name: string): undefined | string

Returns value for the given key stored in cookie.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)

[deps-image]: https://img.shields.io/david/Workfront/workfront-cookie.svg
[deps-url]: https://david-dm.org/Workfront/workfront-cookie

[dev-deps-image]: https://img.shields.io/david/dev/Workfront/workfront-cookie.svg
[dev-deps-url]: https://david-dm.org/Workfront/workfront-cookie#info=devDependencies

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://www.npmjs.org/package/workfront-cookie
[npm-version-image]: https://img.shields.io/npm/v/workfront-cookie.svg?style=flat
[npm-downloads-image]: https://img.shields.io/npm/dm/workfront-cookie.svg?style=flat

[travis-url]: https://travis-ci.org/Workfront/workfront-cookie
[travis-image]: https://img.shields.io/travis/Workfront/workfront-cookie.svg?style=flat

[codecov-url]: https://codecov.io/gh/Workfront/workfront-cookie
[codecov-image]: https://img.shields.io/codecov/c/github/Workfront/workfront-cookie.svg
