// Task 1. Find the most used item on the array

// You have an array with some repeated elements.
// For example, the element “Web Developer” is repeated 3 times below.

const arr = [
  "Web Developer",
  "Refocus",
  "Web Developer",
  "Web Developer",
  "Refocus",
  "Awesome",
];

// Create an algorithm that counts the number of times each element is repeated and shows the result using the console.

const uniqueArr = arr.reduce(function (prev, current) {
  prev[current] = (prev[current] || 0) + 1;
  return prev;
}, {});

// console.log(uniqueArr);

// Task 2. Reverse the array of invoices

// You work as a Web Developer at a big company.
// The invoicing department is having a hard time sorting their documents using the “first in, first out” method.
// The “first in, first out” method means that the invoices that came the earliest must be also paid earlier than the others.
// Use array methods to create two recursive functions:

// * insertToBottom, which adds invoices at the bottom of the list
// * reverseStack, which reverses the order of the invoices

let invoiceList = [
    "Invoice 008", 
    "Invoice 007", 
    "Invoice 006", 
    "Invoice 005"
];

function insertToBottom(invoice ,x) {
    if (x != invoiceList.length) {
        invoiceList.push(invoice);
    } else {
        insertToBottom(invoice, x++);
    }
}

function reverseStack(){
    let currentStack = []
    let x = invoiceList.length
    function reverse(i) {
        if( i > 0 ) {
            currentStack.push(invoiceList[i-1]);
            reverse(i-1);
        } 
    }
    reverse(x);
    invoiceList = currentStack;
}

insertToBottom("Invoice 009"); // Even there's no defined x, it will not result as an error function since it still met the condition. undefined != invoiceList.length is true
insertToBottom("Invoice 003");
insertToBottom("Invoice 001");
insertToBottom("Invoice 004");

console.log(invoiceList.join(" "))

reverseStack();

console.log(invoiceList.join(" "))


// Hi Mentor, if this assignment is approved, can you show me your way on how you would answer this. Thanks and appreciated in checking this.