module.exports = hittest;

function hittest(b1) {
    return function (b2) {
        // Checks that the bodies do not overlap
        return ! (
            // Check x-axis is outside bounds to the left
            b1.x + b1.width <= b2.x ||

            // Check x-axis is outside bounds to the right
            b1.x >= b2.x + b2.width ||

            // Check y-axis is outside bounds above
            b1.y + b1.height <= b2.y ||

            // Check y-axis is outside bounds below
            b1.y >= b2.y + b2.height
        );
    };
}

