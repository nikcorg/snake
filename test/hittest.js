var test = require("tape");
var hittest = require("../src/hittest");

test("hittest", function (t) {
    var hit = hittest({ x: 10, y: 10, width: 1, height: 1 });

    t.test("left miss", function (t) {
        t.plan(3);
        t.notOk(hit({ x: 1, y: 10, width: 1, height: 1 }));
        t.notOk(hit({ x: 9, y: 10, width: 1, height: 1 }));
        t.notOk(hit({ x: 5, y: 10, width: 5, height: 1 }));
    });

    t.test("right miss", function (t) {
        t.plan(3);
        t.notOk(hit({ x: 11, y: 10, width: 1, height: 1 }));
        t.notOk(hit({ x: 15, y: 10, width: 1, height: 1 }));
        t.notOk(hit({ x: 11, y: 10, width: 5, height: 1 }));
    });

    t.test("above miss", function (t) {
        t.plan(3);
        t.notOk(hit({ x: 10, y: 9, width: 1, height: 1 }));
        t.notOk(hit({ x: 10, y: 5, width: 1, height: 5 }));
        t.notOk(hit({ x: 10, y: 1, width: 5, height: 1 }));
    });

    t.test("below miss", function (t) {
        t.plan(3);
        t.notOk(hit({ x: 10, y: 11, width: 1, height: 1 }));
        t.notOk(hit({ x: 10, y: 11, width: 1, height: 5 }));
        t.notOk(hit({ x: 10, y: 21, width: 5, height: 1 }));
    });

    t.test("hit", function (t) {
        t.plan(3);
        t.ok(hit({ x: 10, y: 10, width: 1, height: 1 }));
        t.ok(hit({ x: 9, y: 10, width: 3, height: 1 }));
        t.ok(hit({ x: 10, y: 5, width: 3, height: 6 }));
    });
});
