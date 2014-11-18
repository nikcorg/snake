var test = require("tape");
var not = require("../../util/not");

test("util/not", function (t) {
    function rtrue() {
        return true;
    }

    t.notOk(not(rtrue)());
    t.ok(not(not(rtrue))());
    t.end();
});
