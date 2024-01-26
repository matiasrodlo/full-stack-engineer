// Write your function here:

function tipCalculator(quality, total) {
  let tips;

  switch (quality) {
    case "bad":
      tips = total * 0.05;
      break;
    case "ok":
      tips = total * 0.15;
      break;
    case "good":
      tips = total * 0.2;
      break;
    case "excellent":
      tips = total * 0.3;
      break;
    default:
      tips = total * 0.18;
      break;
  }
  return tips;
}

// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator("good", 100)); //should return 20

// We encourage you to add more function calls of your own to test your code!
