const ReaumurActionsOrchestrator = require('./ReaumurActionsOrchestrator');
const ScaleActions = require('../../Core/Actions/ScaleActions');

function ReaumurActions({ degrees, targetScale }) {
    const actions = new ScaleActions({
        orchestrator: new ReaumurActionsOrchestrator()
    });
    return actions({ degrees, targetScale });
}

module.exports = ReaumurActions;