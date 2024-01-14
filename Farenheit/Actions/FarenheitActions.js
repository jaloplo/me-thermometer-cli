const FarenheitActionsOrchestrator = require('./FarenheitActionsOrchestrator');
const ScaleActions = require('../../Core/Actions/ScaleActions');

function FarenheitActions({ degrees, targetScale }) {
    const actions = new ScaleActions({
        orchestrator: new FarenheitActionsOrchestrator()
    });
    return actions({ degrees, targetScale });
}

module.exports = FarenheitActions;