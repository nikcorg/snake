var test = require("tape");
var compose = require("../../util/compose");

test("util/compose", function (t) {
    function cB(s) {
        return s + "b";
    }
    function cC(s) {
        return s + "c";
    }
    var co = compose(cB, cC);

    t.equal("abc", co("a"));
    t.end();
});
