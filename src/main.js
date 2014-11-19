var debug = require("debug");

debug.disable();

require("util/domready")(require("./game").bind(undefined, document));
