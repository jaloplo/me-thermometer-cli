function FarenheitToCelsiusAction({ degrees }) {
    const target = (degrees - 32) * 5/9;
    console.log(`${degrees} farenheit degrees are ${target} celsius degrees`);
}

module.exports = FarenheitToCelsiusAction;