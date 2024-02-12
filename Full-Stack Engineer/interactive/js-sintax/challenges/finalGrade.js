// Write your function here:
function finalGrade(number1, number2, number3) {
  if (
    number1 < 0 ||
    number1 > 100 ||
    number2 < 0 ||
    number2 > 100 ||
    number3 < 0 ||
    number3 > 100
  ) {
    return "You have entered an invalid grade.";
  }

  let average = (number1 + number2 + number3) / 3;
  let grade;

  switch (true) {
    case average >= 0 && average <= 59:
      grade = "F";
      break;
    case average >= 60 && average <= 69:
      grade = "D";
      break;
    case average >= 70 && average <= 79:
      grade = "C";
      break;
    case average >= 80 && average <= 89:
      grade = "B";
      break;
    case average >= 90 && average <= 100:
      grade = "A";
      break;
    default:
      grade = "Invalid grade";
  }

  return grade;
}

// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(99, 92, 95)); // Should print 'A'

// We encourage you to add more function calls of your own to test your code!
