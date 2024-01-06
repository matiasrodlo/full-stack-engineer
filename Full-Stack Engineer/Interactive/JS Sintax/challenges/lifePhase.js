// Write your function here:

function lifePhase(age) {
  let phase;

  switch (true) {
    case age >= 1 && age <= 3:
      phase = "baby";
      break;
    case age >= 4 && age <= 12:
      phase = "child";
      break;
    case age >= 13 && age <= 19:
      phase = "teen";
      break;
    case age >= 20 && age <= 64:
      phase = "adult";
      break;
    case age >= 65 && age <= 140:
      phase = "senior citizen";
      break;
    default:
      phase = "This is not a valid age";
      break;
  }

  return phase;
}

// Uncomment the line below when you're ready to try out your function
console.log(lifePhase(2)); //should print 'child'

// We encourage you to add more function calls of your own to test your code!
