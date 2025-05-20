Based on the following error stack trace, fill in the answers to the questions below:

------------------------------------------------------------------

/home/ccuser/workspace/learn-javascript-debugging-code/script.js:5
if (numberSum > total;) {
                     ^
            
SyntaxError: Unexpected token ;

------------------------------------------------------------------

From what file was this error thrown?
1 - Answer: script.js
On what line of that file was this error thrown?
2 - Answer: 5
What type of error was thrown in this stack trace?
3 - Answer: SyntaxError: Unexpected token
What is the description of the error in this stack trace?
4 - Answer: Unexpected token

///////////////////////////////////////////////////////////

myVariable++;
// 1 - What type of error will be thrown on the line above: 
ReferenceError
const myString = 42;
myString.substring(0);
// 2 - What type of error will be thrown on the line above: 
TypeError
const myRandomNumber; = Math.random();
// 3 - What type of error will be thrown on the line above: 

///////////////////////////////////////////////////////////

function isSumBigger(number1, number2, total) {
  const sum = number1 + number2;
  
  if (sum > total) {
    return true;
  } else {
    return false;
  }
}

// Should return true
console.log('isSumBigger(1, 3, 2) returns: ' + isSumBigger(1, 3, 2));

// Should return false
console.log('isSumBigger(1, 3, 5) returns: ' + isSumBigger(1, 3, 5));


///////////////////////////////////////////////////////////

function capitalizeASingleWord(word) {
  //console.log(word)
  if (word.match(' ')) {
    console.log(word)
    return null;
  }
  
  let firstLetter = word.charAt(0);
  const restOfWord = word.slice(1);
  
  firstLetter = firstLetter.toUpperCase();
  
  return firstLetter + restOfWord;
}

// Should return "Hey"
console.log("capitalizeASingleWord('hey') returns: " + capitalizeASingleWord('hey')); 

// Should return null
    console.log("capitalizeASingleWord('hey ho') returns: " + capitalizeASingleWord('hey ho'));

///////////////////////////////////////////////////////////

// Returns the string whose first letter is later in the alphabet. If both first letters are equal, returns null.
function getLaterFirstLetter(string1, string2) {
  const firstLetter1 = string1.charAt(0);
  const firstLetter2 = string2.charAt(0);
  
  console.log(firstLetter1);
  console.log(firstLetter2);
  
  if (firstLetter1 === firstLetter2) {
    return null;
  } else if (firstLetter1 < firstLetter2) {
    return string2;
  } else {
    return string1;
  }
}

// Should return "blueberry"
console.log("getLaterFirstLetter('avocado', 'blueberry') returns: " + getLaterFirstLetter('avocado', 'blueberry'));

// Should return "zebra"
console.log("getLaterFirstLetter('zebra', 'aardvark') returns : " + getLaterFirstLetter('zebra', 'aardvark'));

// Should return null
    console.log("getLaterFirstLetter('astro', 'afar') returns: " + getLaterFirstLetter('astro', 'afar'));

///////////////////////////////////////////////////////////
    
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
// Link to String.repeat() documentation: 

function doubleString(string) {
  return string.repeat(2);
}

// Should return 'echoecho'
    console.log("doubleString('echo') returns: " + doubleString('echo'));

///////////////////////////////////////////////////////////

// Returns whether or not the provided string contains a substring of "cake" in it.
function containsCake(string) {
  return(string.includes("cake"))
}

// Should return true
console.log("containsCake('I think cake is my soul mate.') returns: " + containsCake('I think cake is my soul mate.'));

// Should return false
    console.log("containsCake('Pie is certainly the coolest dessert.') returns: " + containsCake('Pie is certainly the coolest dessert.'));

///////////////////////////////////////////////////////////

function isStringPerfectLength(string, minLength, maxLength) {
  const stringLength = string.length;
  
  if (stringLength < minLength) {
    return false;
  } else if (stringLength > maxLength) {
    return false;
  } else {
    return true;
  }
}

// Should return true
console.log("isStringPerfectLength('Dog', 2, 4) returns: " + isStringPerfectLength('Dog', 2, 4));

// Should return false
console.log("isStringPerfectLength('Mouse', 2, 4) returns: " + isStringPerfectLength('Mouse', 2, 4));

// Should return false
console.log("isStringPerfectLength('Cat', 4, 9) returns: " + isStringPerfectLength('Cat', 4, 9));