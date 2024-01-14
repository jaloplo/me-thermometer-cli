const CelsiusToFarenheitAction = require('./CelsiusToFarenheitAction');
const CelsiusToKelvinAction = require('./CelsiusToKelvinAction');
const UnknownScaleAction = require('../../Core/Actions/UnknownScaleAction');

function CelsiusActions({ degrees, targetScale }) {
    switch(targetScale) {
        case 'farenheit':
            new CelsiusToFarenheitAction({ degrees });
            break;
        case 'kelvin':
            new CelsiusToKelvinAction({ degrees });
            break;
        default:
            new UnknownScaleAction({ scale: targetScale });
    }
}

module.exports = CelsiusActions;