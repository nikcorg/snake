var test = require("tape");
var flatmap = require("../../util/flatmap");

test("util/flatmap", function (t) {
    var arr = flatmap([1, 3, 5], function (n) {
        return [n, n + 1];
    });
    t.equal("1,2,3,4,5,6", arr.join(","));
    t.end();
});
