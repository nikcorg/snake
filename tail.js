var debug = require("debug")("tail");

module.exports = tail.make = tail;

var xSize = 1;
var ySize = xSize;

function tail(x, y) {
    var _tail = {
        x: x,
        y: y,
        height: xSize,
        width: ySize,
        update: update,
        color: "pink"
    };

    function update(next) {
        debug("moving tail to %sx%s", next.x, next.y);

        _tail.x = next.x;
        _tail.y = next.y;
    }

    return _tail;
}


