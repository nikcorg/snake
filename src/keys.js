var debug = require("debug")("keys");
var compose = require("funcalicious/compose");
var get = require("funcalicious/get");

module.exports = keys.init = keys;

var keycodes = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32
};

function listenTo(keyDown, keyUp, source) {
    source.addEventListener("keydown", keyDown, false);
    source.addEventListener("keyup", keyUp, false);
}

function keys(source) {
    var _keys = Object.create(keycodes);
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

    var pressed = function (keys, includeLast) {
        // Bulk check pressed state. If includeLast is set the lastPressed key
        // will return true even is no longer pressed and the returned array
        // is sorted in a way that the last pressed key is in position 0
        return keys.filter(function (keycode) {
            return getState(keycode) ||
                (includeLast && lastPressed === keycode);
        }).
        sort(function (a, b) {
            if (includeLast) {
                return a === lastPressed ? -1 : 1;
            }
            return 0;
        });
    };

    var keycode = get("keyCode");
    var keyUp = compose(keycode, setState.bind(undefined, true));
    var keyDown = compose(keycode, setState.bind(undefined, false));
    var localInit = listenTo.bind(undefined, keyUp, keyDown);

    if (source) {
        localInit(source);
    }

    _keys.up = keyUp;
    _keys.down = keyDown;
    _keys.isdown = _keys.isup = getState;
    _keys.pressed = pressed;
    _keys.listenTo = localInit;

    return Object.freeze(_keys);
}
