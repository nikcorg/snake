var debug = require("debug")("game");

var and = require("funcalicious/and");
var not = require("funcalicious/not");
var get = require("funcalicious/get");
var call = require("funcalicious/call");
var range = require("funcalicious/range");
var sample = require("funcalicious/sample");
var flatMap = require("funcalicious/flatmap");

var gameover = require("./gameover");
var hittest = require("./hittest");
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
    status: null,
    keys: null
};

module.exports = start.start = start;

function start(doc) {
    game.doc = doc;
    game.status = require("./status")(doc);
    game.keys = require("util/keys")(doc);
    game.start = Date.now();
    game.speedup = game.start + 30000;
    game.canvas = canvas(game.doc, game.size, game.scale);
    game.head = head.make(game.canvas, game.keys);
    game.tail = range(3).map(tail.bind(undefined, -1, -1));

    //var grid = require("./grid")(game.canvas, doc);
    //grid.update(game.canvas.scale);
    //game.canvas.overlay(grid);

    game.canvas.appendTo(game.doc.querySelector("body"));

    tick();
}

function poisonify(chance) {
    var random = Math.random() * 100;
    var poisoned, poisonifiable;

    if (chance <= random) {
        poisoned = game.targets.filter(get("poison"));
        poisonifiable = game.targets.filter(not(get("poison")));

        if (poisoned.length < 15 && poisonifiable.length > 1) {
            sample(poisonifiable, function (target) {
                target.poison = true;
                target.super = false;
            });
        }
    }
}

function superify(chance) {
    var random = Math.random() * 100;
    var supers, superifiable;

    if (chance <= random) {
        supers = game.targets.filter(get("super"));
        superifiable = game.targets.filter(
                and(not(get("super")), not(get("poison"))));

        if (supers.length < 1 && superifiable.length > 0) {
            sample(superifiable, function (target) {
                // 60 fps, 15-45 secs
                target.super = Math.round((Math.random() * 30 + 15) * 60);
            });
        }
    }
}

function redrawAll() {
    game.canvas.clear();
    game.canvas.fillStyle("#000");
    game.targets.
        concat(game.walls).
        concat(game.tail).
        concat(game.head).
        sort(function (b1, b2) {
            var b1z = b1.z || 0;
            var b2z = b2.z || 0;

            return b1z - b2z;
        }).
        forEach(game.canvas.draw);
}

function death() {
    var animation = require("./death")(game, game.doc);

    game.canvas.overlay(animation);

    function animate() {
        redrawAll();

        if (animation.update()) {
            requestAnimationFrame(animate);
        }
    }

    animate();
}

function tick() {
    // Move head
    game.head.update(function () {
        if (game.tail.length < 1) return;

        var tailtail = game.tail.pop();
        tailtail.update(game.head);
        game.tail.unshift(tailtail);
    });

    // Possible create poisonous or super target
    poisonify(99.95);
    superify(99.98);

    // Update targets
    game.targets.forEach(call("update"));

    // Redraw all bodies
    redrawAll();

    // Update UI
    game.status.update(game);

    if (gameover(game)) {
        return death();
    }

    // Count hit targets and update score
    var hit = game.targets.filter(hittest(game.head));

    // Tail becomes wall when eating poison
    if (hit.filter(get("poison")).length > 0) {
        if (game.tail.length < 1) {
            return death();
        }

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

    // Create new targets if there aren't (non-poisonous) any left
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

    // Speed up over time
    if (Date.now() > game.speedup) {
        game.head.acc += 0.02;
        game.speedup = Date.now() + 5000;
    }

    requestAnimationFrame(tick);
}
