var test = require("tape");
var rand = require("../../util/randomize");

test("util/randomize", function (t) {
    t.test(function (t) {
        var r = rand(100);
        t.ok(r >= 0 && r < 100);
        t.end();
    });

    t.test(function (t) {
        var r = rand(100, 20);
        t.ok(r % 20 === 0);
        t.ok(r >= 0 && r < 100);
        t.end();
    });
});
