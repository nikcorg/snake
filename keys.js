var debug = require("debug")("keys");

module.exports = keys.init = keys;

var keycodes = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32
};

function keycode(dest) {
    return function (evt) {
        return dest(evt.keyCode);
    };
}

function init(keyDown, keyUp, source) {
    source.addEventListener("keydown", keyDown, false);
    source.addEventListener("keyup", keyUp, false);
}

function keys(source) {
    var _keys = Object.create(keycodes);
    var echo = false;
    var keymap = {};
    var lastPressed = null;

    var setState = function (state, keycode) {
        debug("%s=%s", keycode, state);
        if (state) {
            lastPressed = keycode;
        }
        keymap[keycode] = state;
    };

    var getState = function (key) {
        return !!keymap[key];
    };

    var check = function (keys, includeLast) {
        return keys.filter(function (keycode) {
            return getstate(keycode) ||
                (includeLast && lastPressed === keycode);
        }).
        pop() || false;
    };

    var keyUp = keycode(setState.bind(undefined, true));
    var keyDown = keycode(setState.bind(undefined, false));
    var localInit = init.bind(undefined, keyUp, keyDown);

    if (source) {
        localInit(source);
    }

    _keys.up = keyUp;
    _keys.down = keyDown;
    _keys.isdown = _keys.isup = getState;
    _keys.init = localInit;
    _keys.check = check;

    return Object.freeze(_keys);
}
