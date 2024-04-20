import React from 'react';
import NavBar from './NavBar';



function ProfilePage() {
  return (
    <div>
      <NavBar />
      <h1>All About Me!</h1>
      <p>I like movies and blah blah blah blah blah</p>
      <img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
    </div>
  );
}

export default ProfilePage;

// Review

import React from 'react';

function HelloWorld() {
  return (
    <div>
      <h1>All About Me!</h1>
    </div>
  );
}

export default HelloWorld;

// Access a Component's props

import React from 'react';

function PropsDisplayer(props) {
  const stringProps = JSON.stringify(props);
  return (
    <div>
      <h1>CHECK OUT MY PROPS OBJECT</h1>
      <h2>{stringProps}</h2>
    </div>
  );
}

export default PropsDisplayer;

// app.js

import React from 'react';
import ReactDOM from 'react-dom';

import PropsDisplayer from './PropsDisplayer';

function App() {
  return <PropsDisplayer />;
}

export default App;

// Pass `props` to a Component

import React from 'react';
import ReactDOM from 'react-dom';

import PropsDisplayer from './PropsDisplayer';

function App() {
  return <PropsDisplayer myProp="Hello"/>;
}

export default App;