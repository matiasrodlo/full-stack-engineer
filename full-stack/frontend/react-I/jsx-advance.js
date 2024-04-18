import React from 'react';
import { createRoot } from 'react-dom/client'

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here:

const myDiv = <div className="big">
I AM A BIG DIV
</div>

root.render(myDiv)

// Self-Closing Tags

const profile = (
    <div>
      <h1>John Smith</h1>
      <img src="images/john.png"/>
      <article>
        My name is John Smith.
        <br/>
        I am a software developer.
        <br/>
        I specialize in creating React applications.
      </article>
    </div>
  );

// JavaScript In Your JSX In Your JavaScript

import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here:
root.render(<h1>2 + 3</h1>);

// curly braces in jsx

import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here:
root.render(<h1>{2 + 3}</h1>
);

// 20 digits of PI

import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
// Write code here:
const math = (<h1> 2 + 3 = {2 + 3} </h1>);
root.render(math)

// variable in jsx 

import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const theBestString = 'This text was accessed through a javascript variable';

root.render(<h1>{theBestString}</h1>);

//Variable Attributes in JSX

import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';

// Declare new variable here:
const gooseImg = <img src={goose}/>
root.render(gooseImg)

// Event Listeners in JSX

import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img 
		src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg" 
		alt="kitty" onClick={makeDoggy} />
);

root.render(kitty);

// if statements

import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:
if (coinToss() === "heads") {
  img = (
  <img src={pics.kitty} />
);
} else {
img = (
  <img src={pics.doggy} />
)}

root.render(img)

// ternary operator

import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};

const img = <img src={pics[ coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

root.render(img);