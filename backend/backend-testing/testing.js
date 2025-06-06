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

///////////////////////////////////////////////////////////////////////////////
//Feature Test II: Assert//////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const { assert } = require("chai");

describe("User visits root", () => {
  describe("without existing messages", () => {
    it("starts blank", () => {
      browser.url("/");

      assert.equal(browser.getText("#messages"), "");
    });
  });

  describe("posting a message", () => {
    it("saves the message with the author information", () => {
      const message =
        "feature tests often hit every level of the TDD Testing Pyramid";
      const author = "username";
    });
  });
});

///////////////////////////////////////////////////////////////////////////////
//Feature Test: Exercise//////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const {assert} = require('chai');

describe('User visits root', () => {

  describe('without existing messages', () => {
    it('starts blank', () => {
      browser.url('/');

      assert.equal(browser.getText('#messages'),'');
    });
  });

  describe('posting a message', () => {
    it('saves the message with the author information', () => {
      
      const message ='feature tests often hit every level of the TDD Testing Pyramid';
      const author = 'username';
      
      browser.url("/")
      browser.setValue('input[id=author]', author);
      browser.setValue('textarea[id=message]', message);
      browser.click('input[type=submit]');
      
    });
  });
});

///////////////////////////////////////////////////////////////////////////////
//Feature Test: Verify //////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const {assert} = require('chai');

describe('User visits root', () => {

  describe('without existing messages', () => {
    it('starts blank', () => {
      browser.url('/');

      assert.equal(browser.getText('#messages'),'');
    });
  });

  describe('posting a message', () => {
    it('saves the message with the author information', () => {
      
      const message ='feature tests often hit every level of the TDD Testing Pyramid';
      const author = 'username';

      browser.url('/');
      browser.setValue('input[id=author]', author);
      browser.setValue('textarea[id=message]', message);
      browser.click('input[type=submit]');
      
      assert.include( browser.getText('#messages'), message);
      assert.include( browser.getText('#messages'), author);
 
    });
  });
});

///////////////////////////////////////////////////////////////////////////////
//Feature Test: Verify //////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

<section id="messages">
  <input id="author" />
  <textarea id="message"></textarea>
  <input type="submit">
</section>
