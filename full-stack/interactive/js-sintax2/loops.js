// Write your code below

var vacationSpots = ["New York", "Paris", "London"];

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

///////////////////////////////////////////////////

for (let i = 5; i < 11; i++) {
  console.log(i);
}

///////////////////////////////////////////////////

for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
}

///////////////////////////////////////////////////

const vacationSpots = ["Bali", "Paris", "Tulum"];

for (let i = 0; i < vacationSpots.length; i++) {
  console.log("I would love to visit " + vacationSpots[i]);
}

///////////////////////////////////////////////////

var bobsFollowers = ["Matias", "Mario", "Lucia", "Jaime"];
var tinasFollowers = ["Matias", "Mario", "Carlos"];
var mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let t = 0; t < tinasFollowers.length; t++) {
    if (bobsFollowers[i] === tinasFollowers[t]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

console.log(mutualFollowers);

///////////////////////////////////////////////////

const cards = ["diamond", "spade", "heart", "club"];

// Write your code below

let currentCard = "";
while (currentCard !== "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

///////////////////////////////////////////////////

var cupsOfSugarNeeded = 10;
var cupsAdded = 0;

do {
  cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded);
{
  cupsAdded++;
  console.log(cupsAdded);
}

///////////////////////////////////////////////////

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below

for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  console.log("And if you don't know, now you know.");
  if (rapperArray[i] === "Notorious B.I.G.") {
    break;
  }
}

//////////////////////////////////////////////////////

var input = "you are the best del mundo";
var resultArray = [];
var resultString = "";

for (let i = 0; i < input.length; i++) {
  if (input[i] === "e" || input[i] === "u") {
    resultArray.push(input[i]);
  }
  if (input[i] === "u") {
    resultArray.push(input[i]);
  }
}

resultString = resultArray.join("").toUpperCase();
console.log(resultString);

//////////////////////////////////////////////////////

const hobbies = ["singing", "eating", "quidditch", "writing"];

for (let i = 0; i < hobbies.length; i++) {
  console.log(`I enjoy ${hobbies[i]}.`);
}
// both are the same

const hobbies = ["singing", "eating", "quidditch", "writing"];

for (const hobby of hobbies) {
  console.log(`I enjoy ${hobby}.`);
}

//I enjoy singing.
//I enjoy eating.
//I enjoy quidditch.
//I enjoy writing.

//////////////////////////////////////////////////////

const spellingWord = "hippopotamus";

// Write your code below
for (words of spellingWord) {
  console.log(words);
}

const pokemonList = ["Pikachu", "Charizard", "Squirtle", "Yoshi", "Snorlax"];

// Write your code below
for (pokemon of pokemonList) {
  if (pokemon === "Yoshi") {
    continue;
  }
  console.log(`You caught a ${pokemon}!`);
}
