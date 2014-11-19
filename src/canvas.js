module.exports = canvas.canvas = canvas;

function canvas(doc, size, scale) {
    var el = doc.createElement("canvas");

    el.width = size[0];
    el.height = size[1];

    var ctx = el.getContext("2d");
    var overlays = [];

    return Object.freeze({
        scale: scale,
        height: el.height,
        width: el.width,
        clear:
            function () {
                ctx.clearRect(0, 0, el.width, el.height);
                overlays.forEach(function (o) {
                    o.draw(ctx);
                });
            },
        fillStyle:
            function (color) {
                ctx.fillstyle = color;
            },
        overlay:
            function (o) {
                overlays.push(o);
            },
        draw:
            function (body) {
                if (body.color) {
                    ctx.save();
                    ctx.fillStyle = body.color;
                }

                ctx.fillRect(
                    body.x * scale,
                    body.y * scale,
                    body.width * scale,
                    body.height * scale
                );

                ctx.restore();
            },
        appendTo:
            function (parent) {
                parent.appendChild(el);
            }
    });
}
