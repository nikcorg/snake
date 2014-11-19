module.exports = domready;

function domready(callback) {
    if (/interactive|complete/.test(document.readyState)) {
        callback();
    } else {
        document.addEventListener("DOMContentLoaded", callback);
    }
}

