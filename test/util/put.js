var test = require("tape");
var put = require("../../util/put");

test("util/put", function (t) {
    var putter = put("foo", "bar");
    var baz = {};
    putter(baz);
    t.equal("bar", baz.foo);
    t.end();
});
