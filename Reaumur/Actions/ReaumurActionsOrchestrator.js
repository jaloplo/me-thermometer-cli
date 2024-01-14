const ActionOrchestrator = require('../../Core/Actions/ActionOrchestrator');
const ReaumurToCelsiusAction = require('./ReaumurToCelsiusAction');

function ReaumurActionsOrchestrator() {
    const orchestrator = new ActionOrchestrator();

    orchestrator.register({
        scale: 'celsius',
        action: ReaumurToCelsiusAction
    });

    return orchestrator;
};

module.exports = ReaumurActionsOrchestrator;