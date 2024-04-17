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