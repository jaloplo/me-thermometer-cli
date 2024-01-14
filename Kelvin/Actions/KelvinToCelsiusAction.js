function KelvinToCelsiusAction({ degrees }) {
    const target = degrees - 273.15;
    console.log(`${degrees} kelvin degrees are ${target} celsius degrees`);
}

module.exports = KelvinToCelsiusAction;