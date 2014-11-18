var randomize = require("./randomize");

module.exports = selectrandom.selectrandom = selectrandom;

function selectrandom(arr, fn) {
    if (arr.length < 1) {
        return undefined;
    }
    return fn(arr[randomize(arr.length)]);
}

