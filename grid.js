var range = require("./util/range");

module.exports = overlay.overlay = overlay;

function overlay(canvas, doc) {
    var shadow = doc.createElement("canvas");
    var ctx = shadow.getContext("2d");

    shadow.height = canvas.height;
    shadow.width = canvas.width;

    shadow.lineWidth = 1;
    shadow.strokeStyle = "#fa6";

    function update(step) {
        ctx.clearRect(0, 0, shadow.width, shadow.height);

        // Horiz grid
        range(Math.floor(shadow.width / step)).
            forEach(function (s) {
                var x = s * step;
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, shadow.height);
                ctx.stroke();
                ctx.closePath();
            });

        // Vertical grid
        range(Math.floor(shadow.height / step)).
            forEach(function (s) {
                var y = s * step;
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(shadow.width, y);
                ctx.stroke();
                ctx.closePath();
            });
    }

    function draw(_ctx) {
        var prevAlpha = _ctx.globalAlpha;
        _ctx.globalAlpha = 0.1;
        _ctx.drawImage(shadow, 0, 0);
        _ctx.globalAlpha = prevAlpha;
    }

    return {
        update: update,
        draw: draw
    };
}
