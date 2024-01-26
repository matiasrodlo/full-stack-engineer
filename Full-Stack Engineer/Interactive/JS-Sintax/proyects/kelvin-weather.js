// constant kelvin is define as 293

const kelvin = 0;

// constant celsius is defined as a kelvin minus 273.
const celsius = kelvin - 273;

// constant fahrenheit is defined operating celsius variable.
let fahrenheit = celsius * (9 / 5) + 32;

// whe use math.floor to get an non-decimal number
fahrenheit = Math.floor(fahrenheit);

/* console.log(kelvin);
console.log(celsius);
console.log(fahrenheit); */

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
