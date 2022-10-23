const bmiCalculator = (kg, m) => {
    const bmi = kg/(m ** 2)

    console.log(`With weight of ${kg} kg and a height of ${m}, the BMI is ${bmi.toFixed(2)}.`)
}


bmiCalculator(95,1.70);