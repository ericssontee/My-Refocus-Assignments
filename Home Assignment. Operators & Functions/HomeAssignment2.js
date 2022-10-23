// Task 1. Temperature converter

// You are asked to implement a feature for a weather app. 
// This feature takes the temperature in Manila from the servers of PAGASA and converts it from one scale to another. 

// Implement 2 functions: 
// convertToKelvin(tempCelsius) that converts Celsius to Kelvin 
// convertToKelvin(tempFahrenheit) that converts Fahrenheit to Kelvin

function convertCelciusToKelvin (c) {
    const tempCelcius = c;

    const convertToKelvin = tempCelcius + 273.15;

    console.log(convertToKelvin + 'K')
}

function convertFarenheitToKelvin (f) {
    const tempFahrenheit = f;

    const convertToKelvin = (tempFahrenheit - 32) * (5 / 9) + 273.15;

    console.log(convertToKelvin + 'K')
}



convertCelciusToKelvin(50);

convertFarenheitToKelvin(32);


// Task 2. Tip calculator

// You are asked to design an app that enables you to leave a tip. 
// The tip should be 10% of a meal cost. 
// Write a code that shows the total tip to be paid based on the food price.

const computeTip = (totalBill) => {
    const totalTip = totalBill * .10;

    console.log(`The tip will be ₱${totalTip}.`)
}

computeTip(900)
