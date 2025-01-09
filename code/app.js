/**
  * Classic Way to import an element from a Module
*/

const { sum } = require("./index.js");

console.log(sum(1, 3));


/**
 * NodeJS has no window element.
 * everything that is a global property is from globalThis
 * GlobalThis => it's the global object of node and other JavaScript environments
 */


// console.log("Printing Global This object below >> ");
// console.log(globalThis); // globalThis points to window


