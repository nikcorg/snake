var test = require("tape");
var get = require("../../util/get");

test("util/get", function (t) {
    var getter = get("foo");

    t.equal("bar", getter({"foo": "bar"}));
    t.end();
});
