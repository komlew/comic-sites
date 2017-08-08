# Turn all your fonts into Comic Sans

[![npm version](https://img.shields.io/npm/v/comic-sites.svg)](https://www.npmjs.com/package/comic-sites) [![github issues](https://img.shields.io/github/issues-raw/komlew/comic-sites.svg)](https://github.com/komlew/comic-sites#warning) [![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://komlew.github.io/comic-sites/) [![Security Warning](https://img.shields.io/badge/warning-fun--only-red.svg)](https://github.com/komlew/comic-sites#warning)

Everybody loves websites with Comic Sans font.

This package makes it easier to turn all your fonts into Comic Sans.

## Install

```bash
$ npm install comic-sites
```

## Usage (ES6+)

```js
// load comic-sites as dependency
import { initComicFont } from 'comic-sites';

// call the function you imported earlier
initComicFont();

// this function accepts a string argument to replace Comic Sans to another font;
// if you know a better font than Comic Sans, try the following:
initComicFont(`"Comic Neue"`);
```

## Demo

Open [this demo](https://komlew.github.io/comic-sites/) page with a random JS library introduction and click on buttons **Get Started** or **Take the Tutorial**. All fonts on the page will be turned into Comic Sans. Enjoy!

## Whitelisted fonts
Fonts whitelisting is controlled by [font-scrubber](https://www.npmjs.com/package/font-scrubber) package. Is allows only this list of fonts:
* "Comic Sans MS"
* "Comic Neue"
* Impact
* Papyrus

Be careful: font-scrubber package is made for educational purposes only. Don't use this code on production!

## Warning!

This repository and NPM package are not for production usage! It was created in education purposes, to show an example of NPM modules vulnerability in some cases. More details about this security workshop at: [https://www.meetup.com/Bynder-JS-Guild/events/241906747/](https://www.meetup.com/Bynder-JS-Guild/events/241906747/)
