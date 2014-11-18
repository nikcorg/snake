var test = require("tape");
var sign = require("../../util/sign");

test("util/sign", function (t) {
    t.test("exports", function (t) {
        t.plan(2);
        t.equal(typeof sign, "function", "exports function");
        t.equal(typeof sign.sign, "function", "exports redundant api");
    });

    t.test(function (t) {
        t.plan(5);
        t.equal(0, sign("fubar"), "NaN returns zero");
        t.equal(-1, sign(-300), "negative return -1");
        t.equal(0, sign(0), "zero returns zero");
        t.equal(0, sign(-0), "negative zero returns zero");
        t.equal(1, sign(10), "positive returns 1");
    });
});
