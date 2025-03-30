export {};
const response1 = async function foo1() {
  const result = await fetch("https://catfact.ninja/fact");
  return result.json();
};

const response2 = async function foo2() {
  const result = await fetch("https://catfact.ninja/fact");
  return result.json();
};

Promise.all([response1(), response2()]).then((value) => {
  console.log("============all");
  console.log(value);
});

const result = await Promise.all([response1(), response2()]);
console.log("****", result);

Promise.allSettled([response1(), response2()]).then((value) => {
  console.log("============allSettled");
  console.log(value);
});

Promise.race([response1(), response2()]).then((value) => {
  console.log("============race");
  console.log(value);
});

Promise.any([response1(), response2()]).then((value) => {
  console.log("============any");
  console.log(value);
});

console.log("Start program");
