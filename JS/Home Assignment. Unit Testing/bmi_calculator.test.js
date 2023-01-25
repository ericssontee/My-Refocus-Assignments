const bmiCalc = require('./bmi_calculator');

test("Check if bmiCalculator correctly calculates", () => {
    expect(bmiCalc(95,1.70)).toBe(32.87);
});