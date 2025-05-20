import React from 'react';

function QuoteMaker() {
    return (
      <blockquote>
        <p>
          The world is full of objects, more or less interesting; I do not wish to add any more.
        </p>
        <cite>
          <a target="_blank"
            href="https://en.wikipedia.org/wiki/Douglas_Huebler">
            Douglas Huebler
          </a>
        </cite>
      </blockquote>
    );
};

export default QuoteMaker;

// variable and components

import React from 'react';

const owl = {
  title: 'Excellent Owl',
  src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg'
};

function Owl() {
    return (
      <div>
        <h1>{owl.title}</h1>
        <img 
      		src = {owl.src}
  				alt = {owl.title} />
      </div>
    );
}

export default Owl;

// puting logic

import React from "react";

const friends = [
  {
    title: "Yummmmmmm",
    src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg",
  },
  {
    title: "Hey Guys! Wait Up!",
    src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg",
  },
  {
    title: "Yikes",
    src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg",
  },
];

// New function component starts here:
function Friend() {
  let friend = friends[0];
  return <div> <h1> {friend.title}</h1>
  <img src={friend.src} />
   </div>;
}

export default Friend;

// using conditional in a function

import React from 'react';

const fiftyFifty = Math.random() < 0.5;

function TonightsPlan() {
if (fiftyFifty == true) {
  return <h1>Tonight I'm going out WOOO</h1>
} else {
 return <h1>Tonight I'm going to bed WOOO</h1>
}
}

export default TonightsPlan;

// Event listener

import React from 'react';

function SubmitButton() {
  function handleClick() {
    alert('Submission Successful.');
  }
  return <button onClick={handleClick} >Submit</button>;
}

export default SubmitButton;
