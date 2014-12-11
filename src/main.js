if (/preview/.test(process.env.NODE_ENV)) {
    require("debug").enable(process.env.DEBUG);
} else {
    require("debug").disable();
}

require("funcalicious/domready")(require("./game").bind(undefined, document));
