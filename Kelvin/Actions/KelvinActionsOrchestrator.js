const ActionOrchestrator = require('../../Core/Actions/ActionOrchestrator');
const KelvinToCelsiusAction = require('./KelvinToCelsiusAction');

function KelvinActionsOrchestrator() {
    const orchestrator = new ActionOrchestrator();

    orchestrator.register({
        scale: 'celsius',
        action: KelvinToCelsiusAction
    });

    return orchestrator;
};

module.exports = KelvinActionsOrchestrator;