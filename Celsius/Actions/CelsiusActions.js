const CelsiusActionsOrchestrator = require('./CelsiusActionsOrchestrator');
const ScaleActions = require('../../Core/Actions/ScaleActions');

function CelsiusActions({ degrees, targetScale }) {
    const actions = new ScaleActions({
        orchestrator: new CelsiusActionsOrchestrator()
    });
    return actions({ degrees, targetScale });
}

module.exports = CelsiusActions;