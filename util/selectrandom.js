module.exports = selectrandom.selectrandom = selectrandom;

function selectrandom(arr, fn) {
    var idx = Math.round(Math.random() * (arr.length - 1));

    return fn(arr[idx]);
}

