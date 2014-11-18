var debug = require("debug")("game");
var doc = document, global = window;
var keys = global.keys = require("./keys").init(doc);

var not = require("./util/not");
var put = require("./util/put");
var get = require("./util/get");
var call = require("./util/call");
var range = require("./util/range");
var flatMap = require("./util/flatmap");
var hittest = require("./hittest");
var gameover = require("./gameover");

var scale = 10;
var canvas = require("./canvas");
var target = require("./target");
var head = require("./head");
var wall = require("./wall");
var tail = require("./tail");

var game = window.game = {
    size: [640, 480],
    scale: 10,
    walls: [],
    targets: [],
    canvas: null,
    head: null,
    tail: null,
    status: require("./status")(doc)
};

module.exports = start.start = start;

function start() {
    game.canvas = canvas(doc, game.size, game.scale);
    game.head = head.make(game.canvas, keys);
    game.tail = range(3).map(tail.bind(undefined, -1, -1));

    //var grid = require("./grid")(game.canvas, doc);
    //grid.update(game.canvas.scale);
    //game.canvas.overlay(grid);

    game.canvas.appendTo(doc.querySelector("body"));

    tick();
}

function poisonTarget(chance) {
    var poisoned = game.targets.filter(get("poison"));
    var unpoisoned = game.targets.filter(not(get("poison")));

    if (poisoned.length < 15 && chance > 99.98 && unpoisoned.length > 0) {
        unpoisoned[0].poison = true;
    }
}

function update() {
    var random = Math.random() * 100;

    poisonTarget(random);

    game.canvas.clear();
    game.canvas.fillStyle("#000");
    game.targets.
        concat(game.walls).
        concat(game.tail).
        concat(game.head).
        forEach(game.canvas.draw);
}

function death() {
    var animation = require("./death")(game, doc);

    game.canvas.overlay(animation);

    function animate() {
        update();

        if (! animation.update()) {
            requestAnimationFrame(animate);
        } else {
            debug("all done");
        }
    }

    animate();
}

function tick() {
    // Move head
    game.head.update(function () {
        if (game.tail.length < 1) return;

        var tailtail = game.tail.shift();
        tailtail.update(game.head);
        game.tail.push(tailtail);
    });

    // Update targets
    game.targets.forEach(call("update"));

    // Update all bodies
    update();

    // Update UI
    game.status.update(game);

    if (gameover(game)) {
        return death();
    }

    // Count hit targets and update score
    var hit = game.targets.filter(hittest(game.head));

    // Tail becomes wall when eating poison
    if (hit.filter(get("poison")).length > 0) {
        game.walls = game.walls.concat(game.tail.map(function (t) {
            return wall.make(t.x, t.y);
        }));
        game.tail = [];
    }

    game.tail = game.tail.concat(flatMap(
            hit.filter(not(get("poison"))),
            function (tp) {
                if (tp.super) {
                    return range(50 + Math.random() * 250).map(
                        tail.bind(undefined, -1, -1));
                }
                return tail(-1, -1);
            }));

    // Update targets array
    game.targets = game.targets.filter(not(hittest(game.head)));

    if (game.targets.filter(not(get("poison"))).length < 1) {
        range(30).forEach(function () {
            var nt = target.make(game.canvas);
            var hit = hittest(nt);
            var wallsHit = game.walls.filter(hit);
            var targetsHit = game.targets.filter(hit);
            var tailsHit = game.tail.concat(game.head).filter(hit);

            if (wallsHit.concat(targetsHit).concat(tailsHit).length < 1) {
                game.targets.push(nt);
            }
        });
    }

    requestAnimationFrame(tick);
}


