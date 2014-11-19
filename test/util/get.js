var test = require("tape");
var get = require("util/get");

test("util/get", function (t) {
    t.test("exports", function (t) {
        t.plan(2);
        t.equal(typeof get, "function", "exports function");
        t.equal(typeof get.get, "function", "exports redundant api");
    });

    t.test(function (t) {
        t.plan(1);
        var getter = get("foo");

        t.equal(getter({"foo": "bar"}), "bar", "returns prop val");
    });
});
