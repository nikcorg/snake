var debug = require("debug")("wall");

module.exports = wall.wall = wall.make = wall;

var xSize = 1;
var ySize = xSize;

function wall(x, y) {
    var _wall = {
        x: x,
        y: y,
        z: 0,
        width: xSize,
        height: ySize
    };

    debug("constructed wall piece at %sx%s", _wall.x, _wall.y);

    return Object.freeze(_wall);
}
