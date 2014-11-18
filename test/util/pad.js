var test = require("tape");
var pad = require("../../util/pad");

test("util/pad", function (t) {
    t.equal("2", pad(2, 1, "."));
    t.equal(".2", pad(2, 2, "."));
    t.equal("...2", pad(2, 4, "."));
    t.equal("2.", pad(2, 2, ".", true));
    t.equal("2...", pad(2, 4, ".", true));
    t.end();
});
