var test = require("tape");
var call = require("../../util/call");

test("util/call", function (t) {
    t.test(function (t) {
        var c = call("foo");
        c({
            "foo": function () {
                t.end();
            }
        });
    });

    t.test(function (t) {
        var c = call("foo", "bar", "baz");
        c({
            "foo": function (a1, a2) {
                t.equal(a1, "bar");
                t.equal(a2, "baz");
            }
        });

        t.end();
    });
});

