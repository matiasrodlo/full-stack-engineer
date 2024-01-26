// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory function to create pAequor objects
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    // Method to simulate mutation
    mutate: function () {
      const randIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (newBase === this.dna[randIndex]) {
        newBase = returnRandBase();
      }
      this.dna[randIndex] = newBase;
      return this.dna;
    },
    // Method to compare DNA with another pAequor
    compareDNA: function (other) {
      let commonCount = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === other.dna[i]) {
          commonCount++;
        }
      }
      const commonPercentage = (commonCount / this.dna.length) * 100;
      console.log(
        `Specimen #${this.specimenNum} and Specimen #${other.specimenNum} have ${commonPercentage}% DNA in common.`
      );
    },
    // Method to check if the organism will likely survive
    willLikelySurvive: function () {
      const cgCount = this.dna.filter(
        (base) => base === "C" || base === "G"
      ).length;
      return cgCount / this.dna.length >= 0.6;
    },
  };
};

// Create an array to store 30 instances of pAequor
const pAequorInstances = [];

// Function to generate a random DNA strand
const generateRandomDNA = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Create 30 instances of pAequor and add them to the array
for (let i = 1; i <= 30; i++) {
  const organism = pAequorFactory(i, generateRandomDNA());
  // Check if the organism will likely survive before adding it to the array
  if (organism.willLikelySurvive()) {
    pAequorInstances.push(organism);
  }
}

// Display the array of pAequor instances
console.log(pAequorInstances);
