// Home Assignment. Calculation Functions

// Task 1: Create an Object Variable
let obj = {
  num1: 100,
  num2: 50,
  sum: 150,
  difference: 50,
  product: 500,
  quotient: 20,
};

// Task 2: Print the Object Data

const showData = (obj) => {
    let print = `===========================`
    for (const key in obj) {
        if (key == 'num1') {
            print += `\nFirst Number: ${obj[key]}`;
        } else if (key == 'num2') {
            print += `\nSecond Number: ${obj[key]}`;
        } else {
            print += `\nThe ${key} is: ${obj[key]}`;
        };
    };
    console.log(print);
};

// showData(obj);

// Task 3: Create Functions for Calculations

function add(num1, num2) {
    obj.sum = num1 + num2;
};

function subtract(num1, num2) {
    obj.difference = num1 - num2;
};

function multiply(num1, num2) {
    obj.product = num1 * num2;
};

function divide(num1, num2) {
    obj.quotient = num1 / num2;
};

// Task 4: Update the Object Data

function newSetOfNumbers (num1, num2) {
    obj.num1 = num1;
    obj.num2 = num2;

    add(obj.num1, obj.num2);
    subtract(obj.num1, obj.num2);
    multiply(obj.num1, obj.num2);
    divide(obj.num1, obj.num2);
};


// Task 5: Call the Functions

showData(obj);
newSetOfNumbers(200, 10);
showData(obj);
newSetOfNumbers(500, 20);
showData(obj);

