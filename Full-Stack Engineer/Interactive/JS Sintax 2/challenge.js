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

////////////////////////////////////////////////////////////

// Write your code here:

function shoutGreetings(greetings) {
  let newArray = [];
  for (let i = 0; i < greetings.length; i++) {
    newArray.push(greetings[i].toUpperCase() + "!");
  }
  return newArray;
}

// Test the function
const greetings = ["hello", "hi", "heya", "oi", "hey", "yo"];
console.log(shoutGreetings(greetings));
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

////////////////////////////////////////////////////////////

function sortYears(years) {
  return years.sort((a, b) => b - a);
}

// Test the function
const yearsArray = [1990, 2005, 1980, 2015, 1975];
console.log(sortYears(yearsArray));
// Example output: [2015, 2005, 1990, 1980, 1975]

////////////////////////////////////////////////////////////

const justCoolStuff = (firstArray, secondArray) =>
  firstArray.filter((item) => secondArray.includes(item));

/*
// As a function declaration AND using named function w/ a loop:
function justCoolStuff(firstArray, secondArray) {
      function isInSecondArray(item){
            for(let i = 0; i<secondArray.length; i++){
                  if (secondArray[i] === item){
                        return true
                  }
            }
            return false 
      }
      return firstArray.filter(isInSecondArray)
}
*/

const coolStuff = [
  "gameboys",
  "skateboards",
  "backwards hats",
  "fruit-by-the-foot",
  "pogs",
  "my room",
  "temporary tattoos",
];

const myStuff = [
  "rules",
  "fruit-by-the-foot",
  "wedgies",
  "sweaters",
  "skateboards",
  "family-night",
  "my room",
  "braces",
  "the information superhighway",
];

console.log(justCoolStuff(myStuff, coolStuff));

////////////////////////////////////////////////////////////

const isTheDinnerVegan = (arr) => arr.every((food) => food.source === "plant");

/*
// Alternate solution:
// Using a function declaration, loop, and helper function:
function isTheDinnerVegan(arr) {
      const isVegan = (food) => {
            if (food.source === 'plant') {
                  return true;
            }
            return false;
      }
      for(let i = 0; i<arr.length; i++){
            if (!isVegan(arr[i])){
                  return false 
            }
      }
      return true
}
*/

const dinner = [
  { name: "hamburger", source: "meat" },
  { name: "cheese", source: "dairy" },
  { name: "ketchup", source: "plant" },
  { name: "bun", source: "plant" },
  { name: "dessert twinkies", source: "unknown" },
];

console.log(isTheDinnerVegan(dinner));

////////////////////////////////////////////////////////////

const speciesArray = [
  { speciesName: "shark", numTeeth: 50 },
  { speciesName: "dog", numTeeth: 42 },
  { speciesName: "alligator", numTeeth: 80 },
  { speciesName: "human", numTeeth: 32 },
];

// Write your code here:

function sortSpeciesByTeeth(speciesArray) {
  // Define a comparison function to use with sort
  function compareTeeth(speciesObj1, speciesObj2) {
    return speciesObj1.numTeeth - speciesObj2.numTeeth;
  }

  // Sort the array using the comparison function
  const sortedSpeciesArray = speciesArray.slice().sort(compareTeeth);

  return sortedSpeciesArray;
}

// Feel free to comment out the code below when you're ready to test your function!

console.log(sortSpeciesByTeeth(speciesArray));

// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]

////////////////////////////////////////////////////////////

// Write your code here:

function findMyKeys(randomStuff) {
  return randomStuff.findIndex((item) => item === "keys");
}

// Feel free to comment out the code below to test your function

const randomStuff = [
  "credit card",
  "screwdriver",
  "receipt",
  "gum",
  "keys",
  "used gum",
  "plastic spoon",
];

console.log(findMyKeys(randomStuff));
// Should print 4

////////////////////////////////////////////////////////////

function dogFactory(name, breed, weight) {
  return {
    _name: name,
    get name() {
      return this._name;
    },
    set name(newName) {
      this._name = newName;
    },

    _breed: breed,
    get breed() {
      return this._breed;
    },
    set breed(newBreed) {
      this._breed = newBreed;
    },

    _weight: weight,
    get weight() {
      return this._weight;
    },
    set weight(newWeight) {
      this._weight = newWeight;
    },
    bark() {
      return "ruff! ruff!";
    },
    eatTooManyTreats() {
      this._weight += 1;
      return this._weight;
    },
  };
}

////////////////////////////////////////////////////////////

function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
