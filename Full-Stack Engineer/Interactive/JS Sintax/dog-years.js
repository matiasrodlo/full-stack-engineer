// constant myAge represent my currect age as human
const myAge = 29;

// earlyYears represent the age of the dog in aerlylife
let earlyYears = 2;
/* console.log(earlyYears); */

earlyYears = earlyYears * 10.5;
/* console.log(earlyYears); */

// is defined the variable laterYears as a myAge minus 2
let laterYears = myAge - 2;
/* console.log(laterYears); */

// multiplication of laterYears variable by 4
laterYears = laterYears * 4;
/* console.log(laterYears); */

// early and later years together
const myAgeInDogYears = earlyYears + laterYears;
/* console.log(myAgeInDogYears); */

// here is defined my name
let myName = "Matias".toLowerCase();
/* console.log(myName); */

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
