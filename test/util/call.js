var test = require("tape");
var call = require("../../util/call");

test("util/call", function (t) {
    t.test("export", function (t) {
        t.plan(2);
        t.equal(typeof call, "function", "exports function");
        t.equal(typeof call.call, "function", "exports redundant api");
    });

    t.test(function (t) {
        t.plan(1);
        var c = call("foo");
        c({
            "foo": function () {
                t.pass("function was invoked");
            }
        });
    });

    t.test(function (t) {
        t.plan(2);
        var c = call("foo", "bar", "baz");
        c({
            "foo": function (a1, a2) {
                t.equal(a1, "bar");
                t.equal(a2, "baz");
            }
        });
    });
});

