var test = require("tape");
var put = require("util/put");

test("util/put", function (t) {
    t.test("exports", function (t) {
        t.plan(2);
        t.equal(typeof put, "function", "exports function");
        t.equal(typeof put.put, "function", "exports redundant api");
    });
    t.test(function (t) {
        t.plan(1);
        var putter = put("foo", "bar");
        var baz = {};
        putter(baz);
        t.equal(baz.foo, "bar");
    });
});
