const DegreeScaleCommand = require('../../Core/Commands/DegreeScaleCommand');
const DegreeScaleCommandArgumentsBuilder = require('../../Core/Commands/DegreeScaleCommandArgumentsBuilder');
const CelsiusActions = require('../Actions/CelsiusActions');


function CelsiusScaleCommand() {
    const argumentsBuilder = new DegreeScaleCommandArgumentsBuilder();
    
    argumentsBuilder.build('celsius');
    argumentsBuilder.setDescription('Converter from celsius to farenheit or kelvin');

    argumentsBuilder.setAction(({ degrees, scale}) => {
        new CelsiusActions({ degrees, targetScale: scale })
    });

    return new DegreeScaleCommand(argumentsBuilder.get());
}

module.exports = CelsiusScaleCommand;