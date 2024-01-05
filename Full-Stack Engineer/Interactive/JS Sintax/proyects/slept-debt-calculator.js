function getSleephours(day) {
  let hoursSleep;
  switch (day) {
    case "monday":
      hoursSleep = 1;
      break;
    case "tuesday":
      hoursSleep = 2;
      break;
    case "wednesday":
      hoursSleep = 3;
      break;
    case "thursday":
      hoursSleep = 4;
      break;
    case "friday":
      hoursSleep = 5;
      break;
    case "saturday":
      hoursSleep = 6;
      break;
    case "sunday":
      hoursSleep = 7;
      break;
    default:
      hoursSleep = "How knows?";
  }
  return hoursSleep;
}

// console.log(getSleephours("tuesday"));

function getActualSleepHours() {
  let totalHours = 0;
  totalHours += getSleephours("monday");
  totalHours += getSleephours("tuesday");
  totalHours += getSleephours("wednesday");
  totalHours += getSleephours("thursday");
  totalHours += getSleephours("friday");
  totalHours += getSleephours("saturday");
  totalHours += getSleephours("sunday");
  return totalHours;
}

console.log(getActualSleepHours());
