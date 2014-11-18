var test = require("tape");
var sel = require("../../util/selectrandom");

test("util/selectrandom", function (t) {
    t.test("callback invoked", function (t) {
        t.plan(1);
        sel([1, 2, 3], t.pass);
    });
    t.test("callback not invoked", function (t) {
        sel([], t.fail.bind(t, "should not be invoked"));
        t.end();
    });
});
