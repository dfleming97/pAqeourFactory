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
  
  // p Aeqour Factory
  const pAeqourFactory = (specimenNum, dna) => {
    return {
      specimenNum,
      dna,
      mutate() {
        if (returnRandBase() === this.dna[0]) {
          return returnRandBase();
        } else {
          return "Run again";
        }
      },
      compareDNA(pAequor) {
        const similarities = this.dna.reduce((acc, curr, idx, arr) => {
          if (arr[idx] === pAequor[idx]) {
            return acc + 1;
          } else {
            return acc;
          }
        }, 0);
        const percentOfDNAshared = (similarities / this.dna.length) * 100;
        const percentageTo2Deci = percentOfDNAshared.toFixed(2);
        const pAeqourSpecNum = Math.floor(Math.random() * 4);
        console.log(
          `${this.specimenNum} and ${pAeqourSpecNum} have ${percentageTo2Deci}% DNA in common.`
        );
      },
      willLikelySurvive() {
        const cOrG = this.dna.filter((item) => item === "C" || item === "G");
        return cOrG.length / this.dna.length >= 0.6;
      },
    };
  };
  
  // Array of 30 Surviving Specimen
  const survivingSpecimen = [];
  let idCounter = 1;
  
  while (survivingSpecimen.length < 30) {
    let newOrg = pAeqourFactory(idCounter, mockUpStrand());
    if (newOrg.willLikelySurvive()) {
      survivingSpecimen.push(newOrg);
    }
    idCounter++;
  }
  
  console.log(survivingSpecimen);