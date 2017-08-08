'use strict';

/**
 * Creates style node and writes css styles in it
 * @param {String} css rule(s)
 * @return {HTMLElement} style node that contains desired rule
 */
function createStyleNode(styles) {
    // creating style node
    let styleNode = document.createElement(`style`);
    styleNode.type = `text/css`;
    styleNode.id = `comicSitesStyleNode`;

    // adding string with styles to the style node
    if (styleNode.styleSheet) {
        styleNode.styleSheet.cssText = styles;
    } else {
        styleNode.appendChild(document.createTextNode(styles));
    }

    // attaching the node to the DOM and returning its reference
    document.getElementsByTagName(`head`)[0].appendChild(styleNode);
    return styleNode.sheet;
}

/**
 * Checks if the style node exists and creates a string with desired font
 * @param {String} font name that can be used as css value
 * @return {HTMLElement} style node that contains desired rule
 */
function initComicFont(fontName) {
    // checking if the style node already exists
    const styleNode = document.getElementById(`comicSitesStyleNode`);
    if (styleNode) {
        // TODO: overwrite existing rule with new value
        return styleNode.sheet;
    }

    // creating font-family string and applying it to all elements
    // TODO: clean fontName argument removing special characters and semicolon
    const font = fontName || `"Comic Sans MS", cursive, sans-serif`;
    const styles = `* {font-family: ${font} !important}`;

    // returning the style node as result of applying this css rule
    return createStyleNode(styles);
}

module.exports = {
    createStyleNode,
    initComicFont
};
