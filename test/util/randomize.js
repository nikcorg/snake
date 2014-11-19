var test = require("tape");
var rand = require("util/randomize");

test("util/randomize", function (t) {
    t.test("exports", function (t) {
        t.plan(2);
        t.equal(typeof rand, "function", "exports function");
        t.equal(typeof rand.randomize, "function", "exports redundant api");
    });

    t.test("simple random", function (t) {
        t.plan(2);
        var r = rand(100);
        t.notOk(isNaN(r));
        t.ok(r >= 0 && r < 100);
    });

    t.test("stepped random", function (t) {
        t.plan(3);
        var r = rand(100, 20);
        t.notOk(isNaN(r));
        t.ok(r % 20 === 0);
        t.ok(r >= 0 && r < 100);
    });
});
