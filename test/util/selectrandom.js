var test = require("tape");
var sel = require("util/selectrandom");

test("util/selectrandom", function (t) {
    t.test("exports", function (t) {
        t.plan(2);
        t.equal(typeof sel, "function", "exports function");
        t.equal(typeof sel.selectrandom, "function", "exports redundant api");
    });

    t.test("callback invoked", function (t) {
        t.plan(1);
        sel([1, 2, 3], t.pass);
    });

    t.test("single item", function (t) {
        t.plan(1);
        sel([1], function (n) {
            t.equal(n, 1, "single item selected");
        });
    });

    t.test("callback not invoked", function (t) {
        t.plan(1);
        sel([], t.fail.bind(t, "should not be invoked"));
        t.pass("callback was never invoked");
    });
});
