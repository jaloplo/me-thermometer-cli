function CelsiusToFarenheitAction({ degrees }) {
    const target = (9/5 * degrees) + 32;
    console.log(`${degrees} celsius degrees are ${target} farenheit degrees`);
}

module.exports = CelsiusToFarenheitAction;