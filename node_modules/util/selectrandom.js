var randomize = require("./randomize");

module.exports = selectrandom.selectrandom = selectrandom;

function selectrandom(arr, fn) {
    if (arr.length < 1) {
        return undefined;
    } else if (arr.length < 2) {
        return fn(arr[0]);
    }
    return fn(arr[randomize(arr.length)]);
}

