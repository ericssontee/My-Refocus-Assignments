// Task 1: Convert Seconds to Hours

function toHours(seconds) {
  const hours = Math.floor(seconds / 3600);
  const remainder = seconds % 3600;
  return { hours, remainder };
}

// console.log(toHours(120)); // { hours: 0, remainder: 120 }

// Task 2: Convert Seconds to Minutes

function toMinutes(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return { minutes, remainder };
}

// console.log(toMinutes(120)); // { minutes: 2, remainder: 0 }

// Task 3: Print the Converted Duration

function humanDuration(duration) {
  const hoursObject = toHours(duration);
  const minutesObject = toMinutes(duration);
  const minuteDiffMultiplier = Math.floor(toMinutes(duration).minutes / 60); // This will determine on how many times the minutesObject will be subtracted by 60 to correctly display the minute value of Hour Minute Second duration format.
  const seconds = minutesObject.remainder;

  return `The formatted duration of ${duration} seconds is ${
    hoursObject.hours
  } ${hoursObject.hours > 1 ? "Hours" : "Hour"}, ${
    minutesObject.minutes >= 60 // Added condition here to correct the value of minutes for hour-minute-second duration format.
      ? minutesObject.minutes - 60 * minuteDiffMultiplier
      : minutesObject.minutes
  } ${minutesObject.minutes > 1 ? "Minutes" : "Minute"} and ${seconds} ${
    seconds > 1 ? "Seconds" : "Second"
  }.`;
}

// Task 4: Print the Output

for (sample of [4800, 5212, 1000000]) {
  console.log(humanDuration(sample));
}


// Logs
// #1 By only just following the instructions, humanDuration(5212) returns as The formatted duration of 5212 seconds is 1 Hour, 86 Minutes and 52 Seconds.
// #2 This has been fixed by adding a condition for minutesObject.minutes where it will be subtracted by 60 when it's over or equals to 60.
// #3 It still not fixed the issue as testing with higher test samples like 1 million seconds resulted as 277 Hours, 16606 Minutes and 40 Seconds instead of 277 Hours, 46 Minutes and 40 Seconds. Meaning it just fixed when minute value is under 120 mins.
// #4 This has been fixed by adding a variable called minuteDiffMultiplier to determine on how many times the minutesObject will be subtracted by 60.