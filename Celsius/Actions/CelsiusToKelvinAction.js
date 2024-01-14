function KelvinToCelsiusAction({ degrees }) {
    const target = parseFloat(degrees) + 273.15;
    console.log(`${degrees} celsius degrees are ${target} kelvin degrees`);
}

module.exports = KelvinToCelsiusAction;