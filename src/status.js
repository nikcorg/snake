var debug = require("debug")("status");
var pad = require("funcalicious/pad");

module.exports = init.init = init;

function init(doc) {
    var score = doc.querySelector(".score span");
    var minutes = doc.querySelector(".time .m");
    var seconds = doc.querySelector(".time .s");

    function update(game) {
        var elapsedTime = (Date.now() - game.start) / 1000;
        var elapsedMinutes = Math.floor(elapsedTime / 60);
        var elapsedSeconds = Math.floor(elapsedTime - elapsedMinutes * 60);

        score.innerText = Math.round(game.tail.length * game.head.acc);
        minutes.innerText = elapsedMinutes;
        seconds.innerText = pad(elapsedSeconds, 2, "0");
    }

    return {
        update: update
    };
}

