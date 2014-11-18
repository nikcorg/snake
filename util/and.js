module.exports = and.and = and;

function and(left, right) {
    return function (o) {
        return left(o) && right(o);
    };
}
