// Destructuring Arrays

let colors = ['blue','red','purple'];

let [color1, color2, color3] = colors

console.log(color1, color2, color3);

//Destructuring Objects

let planets = { x: 'Saturn', y: 'Mars', z: 'Neptune' };

let {x, y, z} = planets

console.log(x, y, z);

// Destructuring Function Parameters

let prairieRose = {
    name: 'Prairie Rose',
    scientificName: 'Rosa arkansana',
    kingdom:	'Plantae',
    genus:	'Rosa',
    use: 'ornamental'
  };
  
  const printPlantInfo = ({name, scientificName, kingdom}) => {
    console.log(`The ${name}, or ${scientificName}, is in the kingdom ${kingdom}.`)
  };
  
  printPlantInfo(prairieRose);