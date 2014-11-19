module.exports = sign.sign = sign;

function sign(n) {
    return isNaN(n) || n === 0 ? 0 : Math.abs(n) / n;
}
