var debug = require("debug")("gameover");
var hittest = require("./hittest");

module.exports = gameover.gameover = gameover;

function withinbounds(canvas, o) {
    return o.x >= 0 &&
        o.y >= 0 &&
        o.x + o.width <= canvas.width / canvas.scale &&
        o.y + o.height <= canvas.height / canvas.scale;
}

function gameover(game) {
    var hit = hittest(game.head);
    var outofbounds = ! withinbounds(game.canvas, game.head);
    var wallhit = game.walls.filter(hit).length > 0;
    var tailhit = game.tail.filter(hit).length > 0;

    debug("out of bounds %s, hit wall %s, hit tail %s",
        outofbounds,
        wallhit,
        tailhit
    );

    return outofbounds || wallhit || tailhit;
}

