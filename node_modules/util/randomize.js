var debug = require("debug")("randomize");

module.exports = randomize.randomize = randomize;

function randomize(max, step) {
    if (undefined == step) {
        step = 1;
    }

    var randmax = max / step - 1;
    debug("randmax=%d (%d, %d)", randmax, step, max);
    return Math.round(randmax * Math.random()) * step;
}

