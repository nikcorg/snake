if (/preview/.test(process.env.NODE_ENV)) {
    require("debug").enable(process.env.DEBUG);
} else {
    require("debug").disable();
}

require("util/domready")(require("./game").bind(undefined, document));
