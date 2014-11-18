module.exports = get.get = get;

function get(prop) {
    return function (ob) {
        return ob[prop];
    };
}
