const DegreeScaleCommand = require('../../Core/Commands/DegreeScaleCommand');
const DegreeScaleCommandArgumentsBuilder = require('../../Core/Commands/DegreeScaleCommandArgumentsBuilder');
const FarenheitActions = require('../Actions/FarenheitActions');


function FarenheitScaleCommand() {
    const argumentsBuilder = new DegreeScaleCommandArgumentsBuilder();
    
    argumentsBuilder.build('farenheit');
    argumentsBuilder.setDescription('Converter from farenheit to celsius');

    argumentsBuilder.setAction(({ degrees, scale}) => {
        new FarenheitActions({ degrees, targetScale: scale })
    });

    return new DegreeScaleCommand(argumentsBuilder.get());
}

module.exports = FarenheitScaleCommand;