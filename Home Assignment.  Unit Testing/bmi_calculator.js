const bmiCalculator = (kg, m) => {
    const bmi = kg/(m ** 2)
    return bmi.toFixed(2)
}


console.log(bmiCalculator(89,1.75)); //BMI should be 29.06