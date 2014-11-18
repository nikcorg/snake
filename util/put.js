module.exports = put.put = put;

function put(prop, val) {
    return function (o) {
        o[prop] = val;
    };
}

