var test = require("tape");
var not = require("util/not");

test("util/not", function (t) {
    t.test("exports", function (t) {
        t.plan(2);
        t.equal(typeof not, "function", "exports function");
        t.equal(typeof not.not, "function", "exports redundant api");
    });

    t.test(function (t) {
        t.plan(2);

        function rtrue() {
            return true;
        }

        t.notOk(not(rtrue)());
        t.ok(not(not(rtrue))());
    });
});
