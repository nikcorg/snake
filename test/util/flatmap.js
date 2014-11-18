var test = require("tape");
var flatmap = require("../../util/flatmap");

test("util/flatmap", function (t) {
    t.test("exports", function (t) {
        t.plan(3);
        t.equal(typeof flatmap, "function", "exports function");
        t.equal(typeof flatmap.flatmap, "function", "exports redundant api");
        t.equal(typeof flatmap.flatMap, "function", "exports redundant api");
    });

    t.test(function (t) {
        t.plan(1);
        var arr = flatmap([1, 3, 5], function (n) {
            return [n, n + 1];
        });
        t.equal(arr.join(","), "1,2,3,4,5,6", "flattened array");
    });
});
