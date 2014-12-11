var debug = require("debug")("target");
var randomize = require("funcalicious/randomize");
var pad = require("funcalicious/pad");

module.exports = target.target = target.make = target;

var xSize = 1;
var ySize = xSize;

function target(canvas) {
    var _target = {
        color: "#f00",
        x: randomize(canvas.width / canvas.scale, xSize),
        y: randomize(canvas.height / canvas.scale, ySize),
        z: 10,
        height: xSize,
        width: ySize,
        update: update,
        poison: false,
        super: 0
    };

    function update() {
        if (_target.poison) {
            _target.color = "darkgreen";
        } else if (_target.super > 0) {
            --_target.super;
            _target.color = "#" +
                pad(Math.round(Math.random() * 255).toString(16), 2, "0") +
                pad(Math.round(Math.random() * 255).toString(16), 2, "0") +
                pad(Math.round(Math.random() * 255).toString(16), 2, "0");
            debug("randomized color %s", _target.color);
        } else {
            _target.color = "darkorange";
        }
    }

    return _target;
}
