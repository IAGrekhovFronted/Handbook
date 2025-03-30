const catFacts = async (strategy) => {
  const response = await fetch("https://catfact.ninja/fact");
  const jsonResult = await response.json();
  return strategy(jsonResult);
};

const catLength = await catFacts((data) => data.length);
const carFact = await catFacts((data) => data.fact);

console.log(catLength);
console.log(carFact);

export {};
