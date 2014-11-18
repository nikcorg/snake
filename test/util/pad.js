var test = require("tape");
var pad = require("../../util/pad");

test("util/pad", function (t) {
    t.test("exports", function (t) {
        t.plan(2);
        t.equal(typeof pad, "function", "exports function");
        t.equal(typeof pad.pad, "function", "exports redundant api");
    });

    t.test(function (t) {
        t.plan(5);
        t.equal("2", pad(2, 1, "."));
        t.equal(".2", pad(2, 2, "."));
        t.equal("...2", pad(2, 4, "."));
        t.equal("2.", pad(2, 2, ".", true));
        t.equal("2...", pad(2, 4, ".", true));
    });
});
