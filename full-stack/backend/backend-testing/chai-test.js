//////////////////////////////////////////////////////////////////////////////
//Testing Framework: Chai ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

const {assert} = require('chai');
describe('Array', () => {
  describe('.pop()', () => {
    it('should return a value and remove the element from the array', () => {
      // setup
      const foo = [4];
      const includedNumber = 4; 
      // check setup
      assert.include(foo, includedNumber);
      // exercise
      const fooPop = foo.pop();
  assert.equal(fooPop, includedNumber)
      // asserts
  assert.equal(foo.length(), 0)
    });
  });
});

//////////////////////////////////////////////////////////////////////////////
//Testing HTML Responses//////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

const { assert } = require("chai");
const { jsdom } = require("jsdom");

const parseTextFromHTML = (htmlAsString, selector) => {
  const selectedElement = jsdom(htmlAsString).querySelector(selector);
  if (selectedElement !== null) {
    return selectedElement.textContent;
  } else {
    throw new Error(
      `No element with selector ${selector} found in HTML string`
    );
  }
};

describe("HTML tests", () => {
  describe("#bar", () => {
    it('should include the string "Hello"', () => {
      // setup
      const foo =
        '<html><div id="bar">Hello</div><div id="buzz">Hello</div><html>';
      //asserts
      assert.include(parseTextFromHTML(foo, "#bar"), "Hello");
    });
  });
});
