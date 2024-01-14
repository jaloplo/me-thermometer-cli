const { program } = require('commander');
const CelsiusScaleCommand = require('./Celsius/Commands/CelsiusScaleCommand');
const FarenheitScaleCommand = require('./Farenheit/Commands/FarenheitScaleCommand');
const KelvinScaleCommand = require('./Kelvin/Commands/KelvinScaleCommand');
const ReaumurScaleCommand = require('./Reaumur/Commands/ReaumurScaleCommand');


program
    .name('thermometer')
    .version('0.0.1');


program.addCommand(new CelsiusScaleCommand());
program.addCommand(new FarenheitScaleCommand());
program.addCommand(new KelvinScaleCommand());
program.addCommand(new ReaumurScaleCommand());

program.parse();