import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Container/AppFunction";

ReactDOM.createRoot(
  document.querySelector("#app")
).render(<App />);

// update function component state

import React, { useState } from 'react';

export default function ColorPicker() {
  const [color, setColor] = useState();

 const divStyle = {backgroundColor: color};

  return (
    <div style={divStyle}>
      <p>The color is {color}</p>
      <button onClick={() => setColor('Aquamarine')}>
        Aquamarine
      </button>
      <button onClick={() => setColor('BlueViolet')}>
        BlueViolet
      </button>
      <button onClick={() => setColor('Chartreuse')}>
        Chartreuse
      </button>
      <button onClick={() => setColor('CornflowerBlue')}>
        CornflowerBlue
      </button>
    </div>
  );
}

// Initialize State

import React, { useState } from 'react';

const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];

export default function ColorPicker() {
  const [color = 'Tomato', setColor] = useState();

 const divStyle = {backgroundColor: color};

  return (
    <div style={divStyle}>
      <p>Selected color: {color}</p>
      {colorNames.map((colorName)=>(
        <button 
          onClick={() => setColor(colorName)} 
          key={colorName}>
       	     {colorName}
      	</button>
      ))}
    </div>
  );
}

// Use State Setter Outside of JSX

import React, { useState } from "react";

const validPhoneNumber = /^\d{1,10}$/;

export default function PhoneNumber() {
  const [phone, setPhone] = useState('');
  
   const handleChange = ({ target })=> {
     const newPhone = target.value;
     const isValid = validPhoneNumber.test(newPhone);
     if (isValid) {
       setPhone(newPhone);
     }

    };

  return (
    <div className='phone'>
      <label for='phone-input'>Phone: </label>
      <input value={phone} onChange={handleChange} id='phone-input' />
    </div>
  );
}

// Set From Previous State

import React, { useState } from 'react';

export default function QuizNavBar({ questions }) {
  const [questionIndex, setQuestionIndex] = useState(0);

  const goBack = () =>
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex - 1);
  const goToNext = () =>
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);

  const onFirstQuestion = questionIndex === 0;
  const onLastQuestion = questionIndex === questions.length - 1;

  return (
    <nav>
      <span>Question #{questionIndex + 1}</span>
      <div>
        <button onClick={goBack} disabled={onFirstQuestion}>
          Go Back
        </button>
        <button onClick={goToNext} disabled={onLastQuestion}>
          Next Question
        </button>
      </div>
    </nav>
  );
}

// Arrays in State

import React, { useState } from "react";
import ItemList from "./ItemList";
import { produce, pantryItems } from "./storeItems";

export default function GroceryCart() {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart((prev) => {
      return [item, ...prev];
    });
  };

  const removeItem = (targetIndex) => {
    setCart((prev) => {
      return prev.filter((item, index) => index !== targetIndex);
    });
  };

  return (
    <div>
      <h1>Grocery Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <h2>Produce</h2>
      <ItemList items={produce} onItemClick={addItem} />
      <h2>Pantry Items</h2>
      <ItemList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}

