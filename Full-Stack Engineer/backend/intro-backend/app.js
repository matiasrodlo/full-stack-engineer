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

///////////////////////////////////////////////////////
//The OS Module///////////////////////////////////////
//////////////////////////////////////////////////////

const os = require('os');
const server = {
  type: os.type(),
  architecture: os.arch(),
  uptime: os.uptime()
}

console.log(server)


///////////////////////////////////////////////////////
//The Util Module///////////////////////////////////////
//////////////////////////////////////////////////////

// Require in trails module from trails.js
const trails = require('./trails.js');
// Require util module here!
const util = require('util');

// Simulate database call to search trails module for specified trail
const getTrailDistance = (trail, callback) => {
  return setTimeout(() => {
    if (trails.hasOwnProperty(trail)) {    
      const foundTrail = trails[trail];    
      callback(null, foundTrail)
    } else {
      callback(new Error('Trail not found!'))
    }
  }, 1000);
}

// Callback function to send an error in the case of an error, or to handle trail data if a trail was found successfully.
function callback (error, trailData) {
  if (error) {
    console.error(error.message)
    process.exit(1)
  } else {
    const mi = trailData.miles;   
    const nickname = trailData.nickname;
    console.log(`The ${nickname} is ${mi} miles long!`)
  }
}

getTrailDistance('North Country', callback)

// Promisfy below!
const getTrailDistancePromise = util.promisify(getTrailDistance);

getTrailDistancePromise('North Country')
  .then((foundTrail) => {      
    const nickname = foundTrail.nickname;
    const mi = foundTrail.miles; 
    console.log(`The ${nickname} is ${mi} miles long!`);
  })
  .catch((error) => {
    console.log('Trail not found!', error);
  })

///////////////////////////////////////////////////////
//NODE.JS ESSENTIALS///////////////////////////////////
//////////////////////////////////////////////////////

const events = require('events');
const fs = require('fs');

// EventEmitter object is used to assign listener functions triggered on specific events
let myEmitter = new events.EventEmitter();

let newWelcomeMessage = (data) => {
  console.log(`Welcome to Nodejs, what's your name? ${data}.`);
};

myEmitter.on('welcome', newWelcomeMessage);
myEmitter.emit('welcome', 'Codey');

// Buffer objects are used to handle binary data
const buffer = Buffer.from('Hello World');
console.log(buffer);
console.log(buffer.toString());

let readDataCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    console.log(`Provided file contained: ${data}`);
  }
};

// file.txt file is loaded using the readFile method of the fs module
fs.readFile('./file.txt', 'utf-8', readDataCallback);

// setImmediate function runs immediately after the current poll phase is completed
setImmediate(() => {
  console.log('Welcome to Node.js');
});

///////////////////////////////////////////////////////
//The Events Module///////////////////////////////////
//////////////////////////////////////////////////////

// Here we require in the 'events' module and save a reference to it in an events variable
let events = require('events');

let listenerCallback = (data) => {
    console.log(`Celebrate ${data}`);
}

// Here we create an instance of the EventEmitter class
let myEmitter = new events.EventEmitter();

// Here we subscribe to 'celebration' events and provide a callback function which will be passed the event's data
myEmitter.on('celebration', listenerCallback);

// Here we emit an event, we pass the event type, 'celebration', as the first argument, and the event data as the second
myEmitter.emit('celebration', 'good times, come on!');

///////////////////////////////////////////////////////
//User Input/Output////////////////////////////////////
//////////////////////////////////////////////////////

let {testNumber} = require('./game.js');

process.stdout.write("I'm thinking of a number from 1 through 10. What do you think it is? \n(Write \"quit\" to give up.)\n\nIs the number ... ");

let playGame = (userInput) => {
  let input = userInput.toString().trim();
	testNumber(input);
};

process.stdin.on('data', playGame);

///////////////////////////////////////////////////////
//The Error Module////////////////////////////////////
//////////////////////////////////////////////////////

const api = require('./api.js');

// Not an error-first callback
let callbackFunc = (data) => {
   console.log(`Something went right. Data: ${data}\n`);
};
  
try {
  api.naiveErrorProneAsyncFunction('problematic input', callbackFunc);
} catch(err) {
  console.log(`Something went wrong. ${err}\n`);
}

///////////////////////////////////////////////////////
//Buffer Module////////////////////////////////////////
//////////////////////////////////////////////////////

// Allocate buffer of size 15 filled with 'b'
const bufferAlloc = Buffer.alloc(15, 'b');

// Create buffer1 with 'hello' and buffer2 with 'world'
const buffer1 = Buffer.from('hello');
const buffer2 = Buffer.from('world');
  
// Combine buffer1 and buffer2
const bufferArray = [buffer1, buffer2];
const bufferConcat = Buffer.concat(bufferArray);


// Translate buffer to string
const bufferString = bufferConcat.toString()

// Uncomment the appropriate `console.log()` to ouput to console
console.log(bufferAlloc);
console.log('Buffer 1:', buffer1, 'Buffer 2:', buffer2)
console.log(bufferConcat);
console.log(bufferString);

///////////////////////////////////////////////////////
//The FS Module////////////////////////////////////////
//////////////////////////////////////////////////////

const fs = require('fs');

let secretWord = null;

let readDataCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    console.log(`Provided file contained: ${data}`);
  }
};

//fs.readFile('./fileOne.txt', 'utf-8', readDataCallback);
//fs.readFile('./anotherFile.txt', 'utf-8', readDataCallback);
fs.readFile('./finalFile.txt', 'utf-8', readDataCallback);

secretWord = "cheeseburgerpizzabagels"

///////////////////////////////////////////////////////
//Readable Streams/////////////////////////////////////
//////////////////////////////////////////////////////

const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
});

const printData = (data) => {
  console.log(`Item: ${data}`);
};

myInterface.on('line', printData);

///////////////////////////////////////////////////////
//Writeable Streams///////////////////////////////////
//////////////////////////////////////////////////////

const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
});


const fileStream = fs.createWriteStream('shoppingResults.txt');

let transformData = (line) => {
 fileStream.write(`They were out of: ${line}\n`); 
};

myInterface.on('line', transformData);

///////////////////////////////////////////////////////
//The Timers Module////////////////////////////////////
//////////////////////////////////////////////////////

setImmediate(() => {
  console.log('I got called right away!')
});