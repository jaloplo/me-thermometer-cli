const UnknownScaleAction = require('./UnknownScaleAction');

function ScaleActions({ orchestrator }) {

    return ({ degrees, targetScale }) => {
        
        const action = orchestrator.get({ scale: targetScale });

        if(undefined === action) {
            new UnknownScaleAction({ scale: targetScale });
        }
        else {
            action({ degrees });
        }
    };
};

module.exports = ScaleActions;