var toarray = require("./toarray");

module.exports = compose.compose = compose;

function compose() {
    var funcs = toarray(arguments);
    return function (inp) {
        var ret = inp;
        funcs.forEach(function (func) {
            ret = func(ret);
        });
        return ret;
    };
}
