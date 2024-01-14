const DegreeScaleCommand = require('../../Core/Commands/DegreeScaleCommand');
const DegreeScaleCommandArgumentsBuilder = require('../../Core/Commands/DegreeScaleCommandArgumentsBuilder');
const KelvinActions = require('../Actions/KelvinActions');


function KelvinScaleCommand() {
    const argumentsBuilder = new DegreeScaleCommandArgumentsBuilder();
    
    argumentsBuilder.build('kelvin');
    argumentsBuilder.setDescription('Converter from kelvin to celsius');

    argumentsBuilder.setAction(({ degrees, scale}) => {
        new KelvinActions({ degrees, targetScale: scale })
    });

    return new DegreeScaleCommand(argumentsBuilder.get());
}

module.exports = KelvinScaleCommand;