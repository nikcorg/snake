var randomize = require("./randomize");

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
        poison: false
    };

    function update() {
        _target.color = _target.poison ? "#f00" : "#0f0";
    }

    return _target;
}
