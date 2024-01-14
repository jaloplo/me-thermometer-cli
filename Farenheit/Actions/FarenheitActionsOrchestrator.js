const ActionOrchestrator = require('../../Core/Actions/ActionOrchestrator');
const FarenheitToCelsiusAction = require('./FarenheitToCelsiusAction');

function FarenheitActionsOrchestrator() {
    const orchestrator = new ActionOrchestrator();

    orchestrator.register({
        scale: 'celsius',
        action: FarenheitToCelsiusAction
    });

    return orchestrator;
};

module.exports = FarenheitActionsOrchestrator;