const {assert} = require('chai');
const request = require('supertest');

const app = require('../../app');

describe('root page', () => {
  describe('GET request', () => {
    it('returns a 200 status', async () => {
      const response = await request(app).
      get('/');
      
      assert.equal(response.status, 200);
    });
  });
});

////////////////////////////////////////////////////////////////////////////////
// Response Content ///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const { assert } = require("chai");
const request = require("supertest");
const { jsdom } = require("jsdom");

const app = require("../../app");

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

describe("root page", () => {
  describe("GET request", () => {
    it("returns a 200 status", async () => {
      const response = await request(app).get("/");
      assert.equal(response.status, 200);
    });

    it("contains the correct title", async () => {
      const response = await request(app).get("/");

      assert.equal(
        parseTextFromHTML(response.text, "#page-title"),
        "Messaging App"
      );
    });
  });
});

////////////////////////////////////////////////////////////////////////////
//Refactoring: Route Parameters/////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

const express = require('express');
const router = express.Router();


router.get('/:username', (req, res) => {
    res.send('<h1 id="welcome-message">Welcome ' + req.params.username + '!</h1>');
});

module.exports = router;

////////////////////////////////////////////////////////////////////////////
//Refactoring: Route Parameters/////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

const express = require('express');
const router = express.Router();


router.get('/:username', (req, res) => {
    const username = req.params.username;
    res.render('profile', {username});
});

module.exports = router;
