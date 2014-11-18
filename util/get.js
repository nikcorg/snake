module.exports = get;

function get(prop) {
    return function (ob) {
        return ob[prop];
    };
}
