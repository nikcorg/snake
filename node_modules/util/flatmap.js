module.exports = flatmap.flatmap = flatmap.flatMap = flatmap;

function flatten(arr) {
    return arr.reduce(function (flat, v) {
        return flat.concat(v);
    }, []);
}
function flatmap(arr, fn) {
    return flatten(arr.map(fn));
}
