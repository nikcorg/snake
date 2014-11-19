var test = require("tape");
var toa = require("util/toarray");

test("util/toarray", function (t) {
    t.test("exports", function (t) {
        t.plan(5);
        t.equal(typeof toa, "function", "exports function");
        t.equal(typeof toa.toa, "function", "exports redundant api");
        t.equal(typeof toa.toA, "function", "exports redundant api");
        t.equal(typeof toa.toArray, "function", "exports redundant api");
        t.equal(typeof toa.toarray, "function", "exports redundant api");
    });
    t.test("arraylike", function (t) {
        t.plan(3);
        var arraylike = { length: 10 };
        t.ok(Array.isArray(toa(arraylike)));
        t.equal(10, toa(arraylike).length);
        t.equal(8, toa(arraylike, 2).length);
    });
    t.test("arguments", function (t) {
        t.plan(3);
        !function () {
            t.ok(Array.isArray(toa(arguments)));
            t.equal(3, toa(arguments).length);
            t.equal("123", toa(arguments).join(""));
        }(1, 2, 3);
    });
});
