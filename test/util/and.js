var test = require("tape");
var and = require("../../util/and");

test("util/and", function (t) {
    t.test("input is passed", function (t) {
        var inp = true;

        and(function (i) {
            t.equal(inp, i);
        }, function (i) {
            t.equal(inp, i);
        })(inp);

        t.end();
    });

    t.test("lazy", function (t) {
        var inp = false;

        and(function (i) {
            t.equal(inp, i);
        }, function (i) {
            console.log("right");
            t.equal(inp, i);
        })(inp);

        t.end();
    });

    t.test("returns", function (t) {
        function identity(_) { return _; }

        t.test("truthy", function (t) {
            var inp = "truthy";
            t.equal(inp, and(identity, identity)(inp));
            t.end();
        });
        t.test("falsy", function (t) {
            var inp = 0;
            t.equal(inp, and(identity, identity)(inp));
            t.end();
        });

        t.end();
    });
});
