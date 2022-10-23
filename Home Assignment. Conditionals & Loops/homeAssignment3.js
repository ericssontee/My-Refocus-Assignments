// Task 1. Pulse oximeter reading (part 1)

// You are asked to develop a JavaScript app compatible with smartwatches. 
// You use the sensor data of its pulse oximeter to tell a user that their oxygen level is normal or alarming. 
// Write a function that alerts a user of their oxygen saturation.

// Oxygen Saturation, (SpO2)% Observation
// ≥ 96%               Normal reading.
// 95%                 Acceptable to continue home monitoring.
// 93-94%              Seek advice from health professionals.
// ≤ 92%               Seek urgent medical advice.


function pulseOximeterReadingBySp02(oxygenSaturation) {
    let sp = oxygenSaturation
    
    if(sp >= 96){
        console.log('Normal reading.')
    } else if (sp == 95) {
        console.log('Acceptable to continue home monitoring.')
    } else if (sp == 94 || sp == 93) {
        console.log('Seek advice from health professionals.')
    } else if ( sp <= 92) {
        console.log('Seek urgent medical advice.')
    } else {
        console.error('You have entered a non integer. Please try again to enter with a number.')
    }
}

pulseOximeterReadingBySp02(97);
pulseOximeterReadingBySp02(95);
pulseOximeterReadingBySp02(94);
pulseOximeterReadingBySp02(80);
pulseOximeterReadingBySp02('Hello');



// Task 2. Pulse oximeter reading (part 2)

// Continue with the last task, and provide more observations based on the pulse rate.

// Pulse Rate, beats per minute    Observation
// 40–100                          Normal reading.
// 101–109                         Acceptable to continue home monitoring.
// 110–130                         Seek advice from health professionals.
// ≥ 131                           Seek urgent medical advice.


function pulseOximeterReadingByPR(pulseRate) {
    let pr = pulseRate
    
    if(pr < 40){
        console.error('You have entered an invalid number. Please enter more than or equal to 40bpm.')
    } else if(pr >= 40 && pr <= 100){
        console.log('Normal reading.')
    } else if (pr >= 101 && pr <= 109) {
        console.log('Acceptable to continue home monitoring.')
    } else if (pr >= 110 && pr <= 130) {
        console.log('Seek advice from health professionals.')
    } else if ( pr >= 131) {
        console.log('Seek urgent medical advice.')
    } else {
        console.error('You have entered a non integer. Please try again to enter with a number.')
    }
}

pulseOximeterReadingByPR(40);
pulseOximeterReadingByPR(102);
pulseOximeterReadingByPR(121);
pulseOximeterReadingByPR(139);
pulseOximeterReadingByPR(39);
pulseOximeterReadingByPR("Forty-Five");