// Write your function here:

function toEmoticon(text) {
  let emoticon;
  switch (text) {
    case "shrug":
      emoticon = '|_{"}_|';
      break;
    case "smiley face":
      emoticon = ":)";
      break;
    case "frowny face":
      emoticon = ":(";
      break;
    case "winky face":
      emoticon = ";)";
      break;
    case "heart":
      emoticon = "<3";
      break;
    default:
      emoticon = "|_(* ~ *)_|";
      break;
  }
  return emoticon;
}

// Uncomment the line below when you're ready to try out your function
console.log(toEmoticon("whatever"));
// Should print  '|_(* ~ *)_|'

// We encourage you to add more function calls of your own to test your code!
