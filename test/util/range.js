var test = require("tape");
var range = require("../../util/range");

test("util/range", function (t) {
    t.test("from zero", function (t) {
        var r = range(10);

        t.equal(10, r.length);
        t.equal(0, Math.min.apply(Math, r));
        t.equal(9, Math.max.apply(Math, r));

        t.end();
    });

    t.test("from non-zero", function (t) {
        var r = range(10, 20);

        t.equal(10, r.length);
        t.equal(10, Math.min.apply(Math, r));
        t.equal(19, Math.max.apply(Math, r));

        t.end();
    });

    t.test("non-positive", function (t) {
        var r = range(10, 0);

        t.equal(10, r.length, "length check");
        t.equal(r[0], 10, "head check");
        t.equal(r[9], 1, "tail check");

        t.end();
    });
});
