const city = "New York City";

function logCitySkyline() {
  let skyscraper = "Empire State Building";
  return "The stars over the " + skyscraper + " in " + city;
}

console.log(logCitySkyline());

///////////////////////////////////////////////////////////

const satellite = "The Moon";
const galaxy = "The Milky Way";
const stars = "North Star";

function callMyNightSky() {
  return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;
}

console.log(callMyNightSky());

///////////////////////////////////////////////////////////

function logVisibleLightWaves() {
  const lightWaves = "Moonlight";
  console.log(lightWaves);
}

logVisibleLightWaves(); // Moonlight

console.log(lightWaves); // Error variable not defined

///////////////////////////////////////////////////////////

const satellite = "The Moon";
const galaxy = "The Milky Way";
let stars = "North Star";

const callMyNightSky = () => {
  stars = "Sirius";
  return "Night Sky: " + satellite + ", " + stars + ", " + galaxy;
};

console.log(callMyNightSky());
console.log(stars);

///////////////////////////////////////////////////////////

const logVisibleLightWaves = () => {
  let lightWaves = "Moonlight";
  let region = "The Arctic";

  if (region === "The Arctic") {
    let lightWaves = "Northern Lights";
    console.log(region);
    console.log(lightWaves);
  }

  console.log(lightWaves);
};

logVisibleLightWaves();
