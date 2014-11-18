var test = require("tape");
var compose = require("../../util/compose");

test("util/compose", function (t) {
    t.test("exports", function (t) {
        t.plan(2);
        t.equal(typeof compose, "function", "exports function");
        t.equal(typeof compose.compose, "function", "exports redundant api");
    });

    t.test("composition", function (t) {
        t.plan(1);

        function cB(s) {
            return s + "b";
        }
        function cC(s) {
            return s + "c";
        }
        var co = compose(cB, cC);

        t.equal(co("a"), "abc");
    });
});
