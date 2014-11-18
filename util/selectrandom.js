var randomize = require("./randomize");

module.exports = selectrandom.selectrandom = selectrandom;

function selectrandom(arr, fn) {
    return fn(arr[randomize(arr.length)]);
}

