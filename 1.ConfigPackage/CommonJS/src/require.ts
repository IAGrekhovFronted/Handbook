const greeting = require("./exports");

(async () => {
    const { esmMessage } = await import('./esm.mjs');
    console.log('esmMessage', esmMessage);
})();
console.log('greeting', greeting);