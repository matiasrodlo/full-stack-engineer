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
