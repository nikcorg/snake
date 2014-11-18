var debug = require("debug")("head");
var randomize = require("./randomize");
var sign = require("./util/sign");

module.exports = head.make = head;

var xSize = 1;
var ySize = xSize;

function head(canvas, keys) {
    var xMotion = 2 / canvas.scale;
    var yMotion = xMotion;
    var acc = 1;
    var xv = xMotion;
    var yv = 0;

    var _head = {
        color: "brown",
        x: randomize(xSize, canvas.width / canvas.scale),
        y: randomize(ySize, canvas.height / canvas.scale),
        height: xSize,
        width: ySize,
        update: update
    };

    debug("starting from %sx%s", _head.x, _head.y);

    var provisionalX = 0,
        provisionalY = provisionalX;

    function update(beforeupdate) {
        switch (keys.pressed([keys.LEFT, keys.RIGHT, keys.UP, keys.DOWN], true)) {
        case keys.LEFT:
            if (Math.abs(provisionalY) > 0) {
                provisionalX = Math.abs(provisionalY) * -1;
            }

            xv = -xMotion * acc;
            yv = provisionalY = 0;
            break;

        case keys.RIGHT:
            if (Math.abs(provisionalY) > 0) {
                provisionalX = Math.abs(provisionalY);
            }

            xv = xMotion * acc;
            yv = provisionalY = 0;
            break;

        case keys.DOWN:
            if (Math.abs(provisionalX) > 0) {
                provisionalY = Math.abs(provisionalX);
            }

            xv = provisionalX = 0;
            yv = yMotion * acc;
            break;

        case keys.UP:
            if (Math.abs(provisionalX) > 0) {
                provisionalY = Math.abs(provisionalX) * -1;
            }

            xv = provisionalX = 0;
            yv = -yMotion * acc;
            break;
        }

        provisionalX += xv;
        provisionalY += yv;

        if (Math.abs(provisionalX) >= xSize ||
            Math.abs(provisionalY) >= ySize
        ) {
            beforeupdate();

            _head.x += Math.floor(provisionalX);
            _head.y += Math.floor(provisionalY);

            provisionalX = provisionalY = 0;

            debug("moved head to %sx%s", _head.x, _head.y);
        }
    }

    return _head;
}

