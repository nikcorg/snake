var toarray = require("./toarray");

module.exports = call.call = call;

function call(method) {
    var args = toarray(arguments).slice(1);

    if (args.length > 0) {
        return function (o) {
            switch (args.length) {
                case 4:
                    return o[method](args[0], args[1], args[2], args[3]);
                case 3:
                    return o[method](args[0], args[1], args[2]);
                case 2:
                    return o[method](args[0], args[1]);
                case 1:
                    return o[method](args[0]);
            }
            return o[method].apply(undefined, args);
        };
    }

    return function (o) {
        return o[method]();
    };
}

