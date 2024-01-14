const FarenheitToCelsiusAction = require('./FarenheitToCelsiusAction');
const UnknownScaleAction = require('../../Core/Actions/UnknownScaleAction');

function FarenheitActions({ degrees, targetScale }) {
    switch(targetScale) {
        case 'celsius':
            new FarenheitToCelsiusAction({ degrees });
            break;
        default:
            new UnknownScaleAction({ scale: targetScale });
    }
}

module.exports = FarenheitActions;