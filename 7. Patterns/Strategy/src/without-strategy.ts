enum FlagEnum {
  NUMBER = "number",
  STRING = "string",
}

const catFacts = async (flag: FlagEnum) => {
  const response = await fetch("https://catfact.ninja/fact");
  const jsonResult = await response.json();

  let result;

  switch (flag) {
    case FlagEnum.NUMBER:
      result = jsonResult.length;
      break;
    case FlagEnum.STRING:
      result = jsonResult.fact;
      break;
  }

  return result;
};

const catLength = await catFacts(FlagEnum.NUMBER);
const carFact = await catFacts(FlagEnum.STRING);

console.log("catLength - ", catLength);
console.log("carFact - ", carFact);
export {};
