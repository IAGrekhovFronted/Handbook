const greeting = require("./exports");
const dotenv = require('dotenv');
dotenv.config();

const dbToken = process.env.TOKEN;

(async () => {
    const { esmMessage } = await import('./esm.mjs');
    console.log('esmMessage', esmMessage);
})();

console.log('dbToken', dbToken);
console.log('greeting', greeting);