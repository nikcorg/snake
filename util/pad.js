module.exports = pad.pad = pad;

function pad(input, width, padding, right) {
    var output = String(input);

    if (output.length >= width) {
        return output;
    }

    right = !!right || false;

    while (output.length < width) {
        output = right ? output + padding : padding + output;
    }

    return output;
}
