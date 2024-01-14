const KelvinToCelsiusAction = require('./KelvinToCelsiusAction');
const UnknownScaleAction = require('../../Core/Actions/UnknownScaleAction');

function KelvinActions({ degrees, targetScale }) {
    switch(targetScale) {
        case 'celsius':
            new KelvinToCelsiusAction({ degrees });
            break;
        default:
            new UnknownScaleAction({ scale: targetScale });
    }
}

module.exports = KelvinActions;