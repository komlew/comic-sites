const jsdom = require(`jsdom`);
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><html><head></head><body>Text</body></html>`);

global.window = dom.window;
global.document = dom.window.document;

const { createStyleNode, initComicFont } = require('../index.js');


describe(`initial document`, () => {
  it(`is defined`, () => {
    expect(document).toBeDefined();
  });
  it(`has empty head`, () => {
    expect(document.head.children.length).toBe(0);
  });
  it(`doesn't have styleSheets`, () => {
    expect(document.styleSheets).toBeDefined();
    expect(document.styleSheets.length).toBe(0);
  });
});


describe(`createStyleNode function with custom argument`, () => {

  let styleSheet;

  beforeEach(() => {
    styleSheet = createStyleNode(`body {z-index: 5}`);
  });

  afterEach(() => {
    const styleNodes = document.querySelectorAll('style');
    Array.prototype.forEach.call(styleNodes, (styleNode) => {
      styleNode.parentNode.removeChild(styleNode);
    });
  });

  it(`creates 1 element in head`, () => {
    expect(document.head.children.length).toBe(1);
  });
  it(`creates style node in head`, () => {
    expect(document.head.children[0].nodeName).toBe(`STYLE`);
  });
  it(`returns css rule applied to body element`, () => {
    expect(document.styleSheets[0].cssRules[0].selectorText).toBe(`body`);
  });
  it(`returns css rule with only one style`, () => {
    expect(document.styleSheets[0].cssRules[0].style.length).toBe(1);
  });
  it(`creates css rule without font-family style`, () => {
    expect(document.styleSheets[0].cssRules[0].style['font-family']).toBeUndefined();
  });
  it(`returns css rule with z-index instead of font-family`, () => {
    expect(document.styleSheets[0].cssRules[0].style[0]).toBe(`z-index`);
  });
  it(`creates css rule with z-index equal to 5`, () => {
    expect(document.styleSheets[0].cssRules[0].style['z-index']).toBe(`5`);
  });
});


describe(`initComicFont function without parameters`, () => {

  let styleSheet;

  beforeEach(() => {
    styleSheet = initComicFont();
  });

  afterEach(() => {
    const styleNodes = document.querySelectorAll('style');
    Array.prototype.forEach.call(styleNodes, (styleNode) => {
      styleNode.parentNode.removeChild(styleNode);
    });
  });

  it(`adds one styleSheet to document`, () => {
    expect(document.styleSheets.length).toBe(1);
  });
  it(`returns reference to CSSStyleSheet`, () => {
    expect(styleSheet).toBeDefined();
    expect(styleSheet.cssRules).toBeDefined();
  });
  it(`returns CSSStyleSheet with 1 rule`, () => {
    expect(styleSheet.cssRules.length).toBe(1);
  });
  it(`returns CSSStyleSheet applied to all elements`, () => {
    expect(styleSheet.cssRules[0].selectorText).toBe(`*`);
  });
  it(`returns CSSStyleSheet with only font-family specified`, () => {
    expect(styleSheet.cssRules[0].style[0]).toBe(`font-family`);
  });
  it(`returns CSSStyleSheet with Comic Sans as font-family`, () => {
    expect(styleSheet.cssRules[0].style[`font-family`]).toBe(`"Comic Sans MS", cursive, sans-serif`);
  });
});


describe(`initComicFont function with parameter`, () => {

  let styleSheet;

  beforeEach(() => {
    styleSheet = initComicFont(`"Comic Neue", sans-serif`);
  });

  afterEach(() => {
    const styleNodes = document.querySelectorAll('style');
    Array.prototype.forEach.call(styleNodes, (styleNode) => {
      styleNode.parentNode.removeChild(styleNode);
    });
  });

  it(`returns CSSStyleSheet with 1 rule`, () => {
    expect(styleSheet.cssRules.length).toBe(1);
  });
  it(`returns CSSStyleSheet with only font-family specified`, () => {
    expect(styleSheet.cssRules[0].style[0]).toBe(`font-family`);
  });
  it(`returns CSSStyleSheet with Comic Neue as font-family`, () => {
    expect(styleSheet.cssRules[0].style[`font-family`]).toBe(`"Comic Neue", sans-serif`);
  });
});
