module.exports = not;

function not(fn) {
    return function () {
        return ! fn.apply(undefined, arguments);
    };
}
