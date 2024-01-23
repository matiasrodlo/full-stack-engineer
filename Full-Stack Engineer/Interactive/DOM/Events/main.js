let readMore = document.getElementById("read-more");
let moreInfo = document.getElementById("more-info");

// Write your code here:
function showInfo() {
  moreInfo.style.display = "block";
}
readMore.addEventListener("click", showInfo);

///////////////////////////////////////////////////////////

let view = document.getElementById("view-button");
let close = document.getElementById("close-button");
let codey = document.getElementById("codey");

let open = function () {
  codey.style.display = "block";
  close.style.display = "block";
};

let hide = function () {
  codey.style.display = "none";
  close.style.display = "none";
};

view.addEventListener("click", open);
close.addEventListener("click", hide);

// Write your code here

function textChange() {
  view.innerHTML = "Hello, World!";
}

function textReturn() {
  view.innerHTML = "View";
}

// Write your code here

view.addEventListener("click", textChange);
close.addEventListener("click", textReturn);

///////////////////////////////////////////////////////////

let fortunes = [
  "A beautiful, smart, and loving person will be coming into your life.",
  "A fresh start will put you on your way.",
  "A golden egg of opportunity falls into your lap this month.",
  "A smile is your personal welcome mat.",
  "All your hard work will soon pay off.",
];

let button = document.getElementById("fortuneButton");
let fortune = document.getElementById("fortune");

function fortuneSelector() {
  let randomFortune = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomFortune];
}

function showFortune() {
  fortune.innerHTML = fortuneSelector();
  button.innerHTML = "Come back tomorrow!";
  button.style.cursor = "default";

  button.removeEventListener("click", showFortune);
}

button.addEventListener("click", showFortune);

///////////////////////////////////////////////////////////

let social = document.getElementById("social-media");
let share = document.getElementById("share-button");
let text = document.getElementById("text");

// Write your code below
let sharePhoto = function (event) {
  event.target.style.display = "none";
  text.innerHTML = "You shared the puppy photo in " + event.timeStamp + " ms.";
};

share.addEventListener("click", sharePhoto);
