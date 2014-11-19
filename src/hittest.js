module.exports = hittest;

function hittest(b1) {
    return function (b2) {
        // Checks that the bodies do not overlap
        return ! (
            // Check x-axis is outside bounds to the left
            b2.x > b1.x + b1.width - 1 ||

            // Check x-axis is outside bounds to the right
            b1.x > b2.x + b2.width - 1 ||

            // Check y-axis is outside bounds above
            b2.y > b1.y + b1.height - 1 ||

            // Check y-axis is outside bounds below
            b1.y > b2.y + b2.height - 1
        );
    };
}

