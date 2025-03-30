const x = 3;
const y = 5 * 3;

console.log('Start program');

const simplePromise = new Promise(() => console.log('Result simple promise'));

const paramsPromise = new Promise((resolve, reject) => {
    if (x === y) resolve(x * 10);
    else reject('Некорректное значение');
})

console.log(paramsPromise);
console.log('End program');

