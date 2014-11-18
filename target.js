var debug = require("debug")("target");
var randomize = require("./randomize");
var pad = require("./util/pad");

module.exports = target.target = target.make = target;

var xSize = 1;
var ySize = xSize;

function target(canvas) {
    var _target = {
        color: "#f00",
        x: randomize(xSize, canvas.width / canvas.scale),
        y: randomize(ySize, canvas.height / canvas.scale),
        height: xSize,
        width: ySize,
        update: update,
        poison: false,
        super: false
    };

    function update() {
        if (_target.poison) {
            _target.color = "#a00";
        } else if (_target.super) {
            _target.color = "#" +
                pad(Math.round(Math.random() * 255).toString(16), 2, "0") +
                pad(Math.round(Math.random() * 255).toString(16), 2, "0") +
                pad(Math.round(Math.random() * 255).toString(16), 2, "0");
            debug("randomized color %s", _target.color);
        } else {
            _target.color = "#0a0";
        }
    }

    return _target;
}
