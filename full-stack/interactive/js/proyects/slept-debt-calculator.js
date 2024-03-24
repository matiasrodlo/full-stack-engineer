function getSleepHours(day) {
  let hoursSleep;
  switch (day) {
    case "monday":
      hoursSleep = 5;
      break;
    case "tuesday":
      hoursSleep = 6;
      break;
    case "wednesday":
      hoursSleep = 9;
      break;
    case "thursday":
      hoursSleep = 4;
      break;
    case "friday":
      hoursSleep = 4;
      break;
    case "saturday":
      hoursSleep = 6;
      break;
    case "sunday":
      hoursSleep = 7;
      break;
    default:
      hoursSleep = "Who knows?";
  }
  return hoursSleep;
}

function getActualSleepHours() {
  let totalHours = 0;
  totalHours += getSleepHours("monday");
  totalHours += getSleepHours("tuesday");
  totalHours += getSleepHours("wednesday");
  totalHours += getSleepHours("thursday");
  totalHours += getSleepHours("friday");
  totalHours += getSleepHours("saturday");
  totalHours += getSleepHours("sunday");
  return totalHours;
}

function getIdealSleepHours() {
  let idealHours = 4;
  return idealHours * 7;
}

function calculateSleepDebt() {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("You have gotten enough sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `Let's be productive! You are ${
        actualSleepHours - idealSleepHours
      } hours above the ideal sleep.`
    );
  } else {
    console.log(
      `Time to sleep! You are ${
        idealSleepHours - actualSleepHours
      } hours under the ideal sleep.`
    );
  }
}

calculateSleepDebt();
