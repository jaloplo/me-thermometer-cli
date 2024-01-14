const DegreeScaleCommand = require('../../Core/Commands/DegreeScaleCommand');
const DegreeScaleCommandArgumentsBuilder = require('../../Core/Commands/DegreeScaleCommandArgumentsBuilder');
const ReaumurActions = require('../Actions/ReaumurActions');


function ReaumurScaleCommand() {
    const argumentsBuilder = new DegreeScaleCommandArgumentsBuilder();
    
    argumentsBuilder.build('reaumur');
    argumentsBuilder.setDescription('Converter from reamur to celsius');

    argumentsBuilder.setAction(({ degrees, scale}) => {
        new ReaumurActions({ degrees, targetScale: scale })
    });

    return new DegreeScaleCommand(argumentsBuilder.get());
}

module.exports = ReaumurScaleCommand;