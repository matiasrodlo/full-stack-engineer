let noun1 = 'silly';
let adjective = 'silly';
let noun2 = 'silly';
let verb = 'silly';
let noun3 = 'silly';


console.log(`The world's first ${noun1} was a very ${adjective} ${noun2} who loved to ${verb} while eating ${noun3} for every meal.`);

///////////////////////////////////////////////////////
//The Console Module///////////////////////////////////
///////////////////////////////////////////////////////

const petsArray = ['dog', 'cat', 'bird', 'monkey'];

// Add console methods below!
console.log(petsArray)
console.table(petsArray)
console.assert(petsArray.length > 5)

///////////////////////////////////////////////////////
//The Console Module///////////////////////////////////
///////////////////////////////////////////////////////

let initialMemory = process.memoryUsage().heapUsed;
let word = process.argv[2];

console.log(`Your word is ${word}`)

// Create a new array
let wordArray = [];

// Loop 1000 times, pushing into the array each time 
for (let i = 0; i < 1000; i++){
  wordArray.push(`${word} count: ${i}`)
}

console.log(`Starting memory usage: ${initialMemory}. \nCurrent memory usage: ${process.memoryUsage().heapUsed}. \nAfter using the loop to add elements to the array, the process is using ${process.memoryUsage().heapUsed - initialMemory} more bytes of memory.`)

