var slice = Array.prototype.slice;

module.exports = toarray.toarray = toarray.toArray = toarray.toA = toarray.toa = toarray;

function toarray(arraylike, skip) {
    return slice.call(arraylike, skip || 0);
}
