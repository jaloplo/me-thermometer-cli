const ReaumurToCelsiusAction = require('./ReaumurToCelsiusAction');
const UnknownScaleAction = require('../../Core/Actions/UnknownScaleAction');

function ReaumurActions({ degrees, targetScale }) {
    switch(targetScale) {
        case 'celsius':
            new ReaumurToCelsiusAction({ degrees });
            break;
        default:
            new UnknownScaleAction({ scale: targetScale });
    }
}

module.exports = ReaumurActions;