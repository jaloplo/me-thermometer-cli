function ReaumurToCelsiusAction({ degrees }) {
    const target = 5/4 * parseFloat(degrees);
    console.log(`${degrees} reaumur degrees are ${target} celsius degrees`);
}

module.exports = ReaumurToCelsiusAction;