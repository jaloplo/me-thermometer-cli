const KelvinActionsOrchestrator = require('./KelvinActionsOrchestrator');
const ScaleActions = require('../../Core/Actions/ScaleActions');

function KelvinActions({ degrees, targetScale }) {
    const actions = new ScaleActions({
        orchestrator: new KelvinActionsOrchestrator()
    });
    return actions({ degrees, targetScale });
}

module.exports = KelvinActions;