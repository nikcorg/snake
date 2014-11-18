module.exports = range.range = range;

function range(from, to) {
    if (undefined == to) {
        to = from;
        from = 0;
    }

    from = Math.round(from);
    to = Math.round(to);

    return Array.apply(0, Array(to - from)).map(function (_, i) {
        return from + i;
    });
}



