// Import the encryptors functions here.
const { caesarCipher, symbolCipher, reverseCipher } = require('./encryptors');

const encodeMessage = (str) => {
  // Use the encryptor functions here.
  let encodedMessage = reverseCipher(str); // Step 1: Reverse the message
  encodedMessage = symbolCipher(encodedMessage); // Step 2: Apply symbol cipher
  encodedMessage = caesarCipher(encodedMessage, 5); // Step 3: Apply Caesar cipher with an amount of 5
  return encodedMessage;
}

const decodeMessage = (str) => {
  // Use the encryptor functions here.
  let decodedMessage = caesarCipher(str, -5); // Step 1: Reverse the Caesar cipher with the same amount used in encoding
  decodedMessage = symbolCipher(decodedMessage); // Step 2: Apply the reverse symbol cipher
  decodedMessage = reverseCipher(decodedMessage); // Step 3: Reverse the message again to decode it
  return decodedMessage;
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt/decrypt...\n> ');
process.stdin.on('data', handleInput);