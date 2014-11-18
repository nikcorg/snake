var debug = require("debug")("status");
var pad = require("./util/pad");

module.exports = init.init = init;

function init(doc) {
    var gameStart = Date.now();
    var score = doc.querySelector(".score span");
    var minutes = doc.querySelector(".time .m");
    var seconds = doc.querySelector(".time .s");

    function update(game) {
        var elapsedTime = (Date.now() - gameStart) / 1000;
        var elapsedMinutes = Math.floor(elapsedTime / 60);
        var elapsedSeconds = Math.floor(elapsedTime - elapsedMinutes * 60);

        score.innerText = game.tail.length;
        minutes.innerText = elapsedMinutes;
        seconds.innerText = pad(elapsedSeconds, 2, "0");
    }

    return {
        update: update
    };
}

