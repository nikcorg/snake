var debug = require("debug")("randomize");

module.exports = randomize;

// Should work in theory, but doesn't FIXME
function randomize(step, max) {
    var randmax = max / step - 1;
    debug("randmax=%d (%d, %d)", randmax, step, max);
    return Math.round(randmax * Math.random()) * step;
}

