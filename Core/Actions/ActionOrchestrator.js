function ActionOrchestrator() {

    const actions = {};

    return {
        get: ({ scale }) => actions[scale],


        register: ({ scale, action }) => {
            actions[scale] = action;
        },

        unregister: ({ scale }) => {
            actions[scale] = undefined;
        }
    };
}

module.exports = ActionOrchestrator;