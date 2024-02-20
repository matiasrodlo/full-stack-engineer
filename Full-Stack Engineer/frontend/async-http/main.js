/* main.js */
import { changeText, changeToFunkyColor } from './module.js';

// import the functions here, then uncomment the code below

const header = document.getElementById("header");

changeText(header, "I did it!")
// call changeText here

setInterval(()=> {
  
  // call changeToFunkyColor() here
changeToFunkyColor(header)
}, 200);