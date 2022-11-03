const bmiCalculator = (kg, m) => {
    const bmi = kg/(m ** 2)

    return +bmi.toFixed(2); // This is updated after multiple testing with JEST as toFixed returns the number value as string.
                            // To fix this, added + before bmi.toFixed(2). It may not be the best practice as it will conflict with other syntax affects performance but for now it gets the job done.
}

module.exports = bmiCalculator;

