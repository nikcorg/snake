var debug = require("debug")("head");
var sign = require("./util/sign");
var randomize = require("./util/randomize");

module.exports = head.make = head;

var xSize = 1;
var ySize = xSize;

function head(canvas, keys) {
    var speed = 2 / canvas.scale;
    var acc = 1;
    var v = speed;
    var axis = "x";
    var motion = 0;

    var _head = {
        acc: acc,
        color: "brown",
        x: randomize(canvas.width / canvas.scale, xSize),
        y: randomize(canvas.height / canvas.scale, ySize),
        height: xSize,
        width: ySize,
        update: update
    };

    debug("starting from %sx%s", _head.x, _head.y);

    function update(beforeupdate) {
        switch (keys.pressed([keys.LEFT, keys.RIGHT, keys.UP, keys.DOWN], true).shift()) {
        case keys.UP:
            axis = "y", v = -1;
            break;

        case keys.RIGHT:
            axis = "x", v = 1;
            break;

        case keys.DOWN:
            axis = "y", v = 1;
            break;

        case keys.LEFT:
            axis = "x", v = -1;
            break;
        }

        motion += speed * _head.acc;

        if (motion >= xSize) {
            beforeupdate();

            _head[axis] += Math.floor(xSize * sign(v));
            motion -= xSize;

            debug("moved head to %sx%s", _head.x, _head.y);
        }
    }

    return _head;
}

