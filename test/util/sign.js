var test = require("tape");
var sign = require("../../util/sign");

test("util/sign", function (t) {
    t.equal(0, sign("fubar"), "NaN is zero");
    t.equal(-1, sign(-300), "negative is -1");
    t.equal(0, sign(0), "zero is zero");
    t.equal(0, sign(-0), "negative zero is zero");
    t.equal(1, sign(10), "positive is 1");
    t.end();
});
