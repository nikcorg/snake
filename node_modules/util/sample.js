var randomize = require("./randomize");

module.exports = sample.sample = sample;

function sample(arr, fn) {
    if (arr.length < 1) {
        return undefined;
    } else if (arr.length < 2) {
        return fn(arr[0]);
    }
    return fn(arr[randomize(arr.length)]);
}

