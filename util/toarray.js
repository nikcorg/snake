module.exports = toarray.toarray = toarray.toArray = toarray.toA = toarray.toa = toarray;

function toarray(arraylike, skip) {
    skip = skip || 0;
    return Array.prototype.slice.call(arraylike, skip);
}
