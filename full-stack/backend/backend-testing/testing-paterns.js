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
//Refactoring: Handlers/////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

const express = require('express');
const router = express.Router();


router.get('/:username', (req, res) => {
    const username = req.params.username;
    res.render('profile', {username});
});

module.exports = router;

////////////////////////////////////////////////////////////////////////////
//API Error ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

const {assert} = require('chai');
const request = require('supertest');
const {jsdom} = require('jsdom');

const app = require('../../app');

const parseTextFromHTML = (htmlAsString, selector) => {
  const selectedElement = jsdom(htmlAsString).querySelector(selector);
  if (selectedElement !== null) {
    return selectedElement.textContent;
  } else {
    throw new Error(`No element with selector ${selector} found in HTML string`);
  }
};

describe('/messages', () => {
  
  describe('POST', () => {
    describe('when the Message is valid', () => {
      it('redirects to the index', async () => {
        const author = 'Inquisitive User';
        const message = 'Why Test?';

        const response = await request(app)
          .post('/messages')
          .type('form')
          .send({author, message});
        assert.equal(response.status, 302);
        assert.equal(response.headers.location, '/');
      });
    });

    describe('when the author is blank', () => {
      it('renders an error message', async () => {
        const message = 'Server Testing';

        const response = await request(app)
          .post('/messages')
          .send({message});
        assert.equal(response.status, 400);
        assert.equal(JSON.parse(response.text).message,  'Every message requires an author');
        });
    });

  });
});
