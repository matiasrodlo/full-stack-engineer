const reverseArray = (arr) => {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
};
/*
// Alternate solutions:

// Using the .unshift() method
const reverseArray = arr => {
    let reversed = [];
    for (let i = 0; i < arr.length; i++) {
        reversed.unshift(arr[i]);
    }
    return reversed
}

// As a function declaration:
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed
}
*/

const sentence = ["sense.", "make", "all", "will", "This"];

console.log(reverseArray(sentence));

//////////////////////////////////////////////////////////////

// Write your code here:

function greetAliens(alien) {
  for (let i = 0; aliens.length > i; i++)
    console.log(
      `Oh powerful ${alien}, we humans offer our unconditional surrender!`
    );
}

// When you're ready to test your code, uncomment the below and run:

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);

//////////////////////////////////////////////////////////////

const convertToBaby = function (animals) {
  const newArray = [];

  for (let i = 0; i < animals.length; i++) {
    newArray.push(`baby ${animals[i]}`);
  }

  return newArray;
};

//////////////////////////////////////////////////////////////

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = (arr) => {
  let results = [];
  // The 'outer' for loop - loops through each element in the array
  for (let i = 0; i < arr.length; i++) {
    number = arr[i];

    // The 'inner' while loop - searches for smallest power of 2 greater than the given number
    a = 1;
    while (a < number) {
      a = a * 2;
    }
    results.push(a);
  }
  return results;
};

console.log(smallestPowerOfTwo(numbers));
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]

////////////////////////////////////////////////////////////

const veggies = ["broccoli", "spinach", "cauliflower", "broccoflower"];

const politelyDecline = (veg) => {
  console.log("No " + veg + " please. I will have pizza with extra cheese.");
};

const declineEverything = (array) => {
  array.forEach(politelyDecline);
};

function acceptEverything(veggies) {
  for (let i = 0; i < veggies.length; i++) {
    console.log(`Ok, I guess I will eat some ${veggies[i]}.`);
  }
}

acceptEverything(veggies);

////////////////////////////////////////////////////////////

const numbers = [2, 7, 9, 171, 52, 33, 14];

const toSquare = (num) => num * num;

const squareNums = (arr) => arr.map(toSquare);

/*
// Using an anonymous function:
const squareNums = arr => arr.map(e => e * e)

// As a function declaration plus using our named function:
function squareNums(arr) {
    return arr.map(toSquare)
}
*/
