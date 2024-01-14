const { Command } = require('commander');


function DegreeScaleCommand({ name, description, action }) {

    const command = new Command(name);

    command
        .description(description)
        .requiredOption('-d, --degrees <degrees>', 'degrees')
        .requiredOption('-s, --scale <scale>', 'target degree scale')
        .action(action);
    
    return command;
}

module.exports = DegreeScaleCommand;