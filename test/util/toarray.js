var test = require("tape");
var toa = require("../../util/toarray");

test("util/toarray", function (t) {
    var arraylike = { length: 10 };
    t.ok(Array.isArray(toa(arraylike)));
    t.equal(10, toa(arraylike).length);
    t.equal(8, toa(arraylike, 2).length);
    !function () {
        t.ok(Array.isArray(toa(arguments)));
        t.equal(3, toa(arguments).length);
        t.equal("123", toa(arguments).join(""));
    }(1, 2, 3);
    t.end();
});
