function newStyle() {
  let newColor = "";
  let newFont = "";
  let x = Math.floor(Math.random() * 7);
  switch (x) {
    case 0:
      newColor = "red";
      newFont = "Times New Roman";
      break;
    case 1:
      newColor = "blue";
      newFont = "Florence, cursive";
      break;
    case 2:
      newColor = "yellow";
      newFont = "Verdana";
      break;
    case 3:
      newColor = "purple";
      newFont = "Courier New";
      break;
    case 4:
      newColor = "cyan";
      newFont = "Georgia";
      break;
    case 5:
      newColor = "maroon";
      newFont = "Palatino";
      break;
    case 6:
      newColor = "lime";
      newFont = "Impact";
      break;
  }
  var elem = document.getElementById("logo");
  elem.style.color = newColor;
  elem.style.fontFamily = newFont;
}

///////////////////////////////////////////////////////////

document.body.innerHTML = '<h1>This is now the heading of the body element</h1>

///////////////////////////////////////////////////////////

document.querySelector('h1').innerHTML = 'Most popular Harry Potter characters';

document.getElementById('fourth').innerHTML = 'Professor Snape'

document.getElementsByClassName('slytherin')[0].innerHTML = 'Salazar Slytherin';

document.getElementsByTagName('li')[0].innerHTML = 'Dobby';

///////////////////////////////////////////////////////////

document.querySelector('body').style.backgroundColor = '#201F2E';

document.querySelector('.heading').style.fontFamily = 'Roboto';

///////////////////////////////////////////////////////////

const first = document.body.children[0];
first.innerHTML = 'BROWN BEARS ARE AWESOME!';

first.parentNode.style.backgroundColor = 'beige';

///////////////////////////////////////////////////////////

let newAttraction = document.createElement('li')
newAttraction.id = 'vespa';
newAttraction.innerHTML = 'Rent a Vespa';
parentList.appendChild(newAttraction);
