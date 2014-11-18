var debug = require("debug")("death");

module.exports = death.death = death;

function death(game, doc) {
    var shadow = doc.createElement("canvas");

    shadow.width = game.canvas.width;
    shadow.height = game.canvas.height;

    var ctx = shadow.getContext("2d");
    var radius = 0;
    var maxRadius = Math.min(50 + game.tail.length,
            Math.min(game.canvas.width, game.canvas.height) / 2);
    var speed = 30;

    debug("start at %sx%s upto radius of %s", game.head.x, game.head.y, maxRadius);

    function update() {
        ctx.beginPath();
        ctx.arc(
                game.head.x * game.canvas.scale,
                game.head.y * game.canvas.scale,
                Math.min(radius, maxRadius),
                0,
                Math.PI * 2,
                false
        );
        ctx.fillStyle = "#f00";
        ctx.fill();

        radius += (maxRadius - radius) / speed;

        return maxRadius - radius < 0.5;
    }

    function draw(_ctx) {
        _ctx.drawImage(shadow, 0, 0);
    }

    return {
        update: update,
        draw: draw
    };
}
