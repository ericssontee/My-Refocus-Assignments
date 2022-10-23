// Task 1. Calorie tracking app

// You are designing a calorie tracking app.
// It helps users to:

// * Keep a record of their activities.
// * Monitor the number of calories they lose after performing the activity.

// Sam decides to do cycling 30 minutes everyday for 15 days. Cycling for 30 minutes
// burns 225 calories on average. Use console.log to tell Sam how much calories
// he would lose:
// “Great work, Sam! After 0.5 hours of running every day for a week, you may lose a total of 3375 calories.”

const user = 'Sam'

function getBurnCalories (t, d) {
    const timeMins = t
    const timeHours = timeMins/60;
    const days = d;
    const avgCaloriesBurned = 225/30
    const burnCaloriesAWeek = Math.floor(days*(timeMins*avgCaloriesBurned))
    console.log(`Great work, ${user}! If you run for ${timeHours.toFixed(1)} hours everyday for a week, you may lose a total of ${burnCaloriesAWeek} calories.`)
}

getBurnCalories(30,15);

// Task 2. Saving app

// You are now working on a finance app that helps users save money. 
// To encourage users to continue saving, you are adding a feature to show how much money they have already saved. 
// Suppose that Sam wants to save ₱10,000 and has already saved ₱7,500. 
// Use console.log and variables to output the following in JavaScript: 
// “Thank you for your discipline and hardwork, Sam! You are now 25% away from your goal of saving ₱10,000.”


let currentMoney = 7500;
let neededMoney = 10000;
const user2 = 'Sam'

const percentMoneySaveLast = 100 - (100 * (currentMoney / neededMoney))

console.log(`Thank you for your discipline and hardwork, ${user2}! You are now ${percentMoneySaveLast}% away from your goal of saving ₱10,000.`)