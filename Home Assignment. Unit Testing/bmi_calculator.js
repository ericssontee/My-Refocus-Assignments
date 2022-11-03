const bmiCalculator = (kg, m) => {
    const bmi = kg/(m ** 2)

    return bmi.toFixed(2);
}

console.log(bmiCalculator(95,1.75));

