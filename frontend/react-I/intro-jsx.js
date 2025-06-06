// Hello World

const h1 = <h1>Hello world</h1>;

// jsx elements

<p> Hello world</p>

// JSX Elements And Their Surroundings

const myArticle = <article></article>;

// Attributes In JSX

const p1 = <p id="large">foo</p>;
const p2 = <p id="small">bar</p>;

// Nested JSX

const myDiv = (
    <div>
      <h1>
      Hello world
      </h1>
    </div>
  );
  
// JSX Outer Elements

const blog = (
    <div>
      <img src="pics/192940u73.jpg" />
      <h1>Welcome to Dan's Blog!</h1>
      <article>
        Wow I had the tastiest sandwich today. I <strong>literally</strong> almost
        freaked out.
      </article>
    </div>
  );
  
// Rendering JSX

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<h1>Hello world</h1>);

// Render Explained

import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('container');
const root = createRoot(container);
root.render(<h1>Hello world</h1>);

// Passing a Variable to render()

import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

let myList = (
  <ul>
    <li>Learn React</li>
    <li>Become a Developer</li>
  </ul>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(myList);