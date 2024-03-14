const {assert} = require('chai');

describe('User visits root', () => {
  describe('without existing messages', () => {
    it('starts blank', () => {
      browser.url('/');
    });  
  });
});

///////////////////////////////////////////////////////////////////////////////
//Feature Test I: Assert///////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const { assert } = require("chai");

describe("User visits root", () => {
  describe("without existing messages", () => {
    it("starts blank", () => {
      browser.url("/");
      assert.equal(browser.getText("#messages"), "");
    });
  });
});
