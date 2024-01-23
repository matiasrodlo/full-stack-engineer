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

///////////////////////////////////////////////////////////

// This variable stores the "Pick a Color" button
let button = document.getElementById("color-button");

// This variable stores the "Mystery Color" button
let mysteryButton = document.getElementById("next-button");

// This random number function will create color codes for the randomColor variable
function colorValue() {
  return Math.floor(Math.random() * 256);
}

function colorChange(event) {
  let randomColor =
    "rgb(" + colorValue() + "," + colorValue() + "," + colorValue() + ")";
  event.target.style.backgroundColor = randomColor;
}

button.addEventListener("click", colorChange);
mysteryButton.addEventListener("wheel", colorChange);

///////////////////////////////////////////////////////////

// These variables store the boxes on the side
let itemOne = document.getElementById("list-item-one");
let itemTwo = document.getElementById("list-item-two");
let itemThree = document.getElementById("list-item-three");
let itemFour = document.getElementById("list-item-four");
let itemFive = document.getElementById("list-item-five");
let resetButton = document.getElementById("reset-button");

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function () {
  itemOne.style.width = "";
  itemTwo.style.backgroundColor = "";
  itemThree.innerHTML = "The mouse must leave the box to change the text";
  itemFive.style.display = "none";
};
resetButton.onclick = reset;

// Write your code here

function increaseWidth() {
  itemOne.style.width = "401px";
}

itemOne.addEventListener("mouseover", increaseWidth);

function changeBackground() {
  itemTwo.style.backgroundColor = "green";
}

itemTwo.addEventListener("mouseup", changeBackground);

function changeText() {
  itemThree.innerHTML = "The mouse has left the element";
}

itemThree.addEventListener("mouseout", changeText);

function showItem() {
  itemFive.style.display = "block";
}

itemFour.addEventListener("mousedown", showItem);
