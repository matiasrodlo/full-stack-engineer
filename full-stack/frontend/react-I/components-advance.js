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