let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false;
let Age = 25;

if (Age > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (Age > 18 && registeredEarly) {
  console.log(
    `Your starting time is at 9:30 am, with the number ${raceNumber}`
  );
} else if (Age > 18 && !registeredEarly) {
  console.log(
    `Your starting time is at 9:30 am, with the number ${raceNumber}`
  );
} else if (Age < 18) {
  console.log(
    `Your starting time is at 12:30 am, with the number ${raceNumber}`
  );
} else {
  console.log("Please, go the registration desk.");
}
