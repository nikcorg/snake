var debug = require("debug")("range");
var sign = require("./sign");

module.exports = range.range = range;

function range(from, to) {
    if (undefined == to) {
        to = from;
        from = 0;
    }

    from = Math.round(from);
    to = Math.round(to);
    step = sign(to - from);

    debug("from %d to %d (%d) step %d", from, to, Math.abs(to - from), step);

    return Array.apply(Array, Array(Math.abs(to - from))).
        map(function (_, i) {
            return from + i * step;
        });
}



