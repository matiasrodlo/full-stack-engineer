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