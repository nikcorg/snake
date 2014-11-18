module.exports = put;

function put(prop, val) {
    return function (o) {
        o[prop] = val;
    };
}

