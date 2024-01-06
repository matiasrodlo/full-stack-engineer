function howOld(age, year) {
  let bornYear = 2024 - age;
  let futureAge = year - bornYear;

  if (year > 2024) {
    return `You will be ${futureAge} in the year ${year}`;
  } else if (year < bornYear) {
    return `The year ${year} was ${bornYear - year} years before you were born`;
  } else if (year < 2024 && year > bornYear) {
    return `You were ${year - bornYear} in the year ${year}`;
  } else {
    return "Please provide a valid year";
  }
}

console.log(howOld(29, 2050));

// Once your function is written, write function calls to test your code!
