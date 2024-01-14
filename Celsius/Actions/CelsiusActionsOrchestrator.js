const ActionOrchestrator = require('../../Core/Actions/ActionOrchestrator');
const CelsiusToFarenheitAction = require('./CelsiusToFarenheitAction');
const CelsiusToKelvinAction = require('./CelsiusToKelvinAction');

function CelsiusActionsOrchestrator() {
    const orchestrator = new ActionOrchestrator();

    orchestrator.register({
        scale: 'farenheit',
        action: CelsiusToFarenheitAction
    });

    orchestrator.register({
        scale: 'kelvin',
        action: CelsiusToKelvinAction
    });

    return orchestrator;
};

module.exports = CelsiusActionsOrchestrator;