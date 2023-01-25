// Commenting the codes from task 1 to task 3 as task 4 is the outcome of the whole assignment. It may help the readers understand the code step by step.

//Task 1: Create a Customer Object

// let customer = {
//   "customer_name": "Johnny Manggo",
//   "points": 12300,
//   "cart": [
//     { 'item': "Shampoo", 'quantity': 2, 'price_$': 3 },
//     { 'item': "Soap", 'quantity': 2, 'price_$': 2 },
//     { 'item': "Toothpaste", 'quantity': 1, 'price_$': 3 },
//   ],
// };

// Task 2: Greet the Customer and Show Their Points

// console.log(`Hi, ${customer['customer_name']}! We are happy to see you today. \nYour current points are: ${customer['points']}.`);

// Task 3: Print the Receipt

// let total_bill = 0;
// let items = ''

// for( cart of customer['cart'] ) {
//     const totalItemPrice = cart['quantity'] * cart['price_$'];
//     total_bill += totalItemPrice;
//     items += `\n${cart['quantity']}x ${cart['item']} --- $${totalItemPrice}`;
// }

// console.log(`Purchased Items:${items}\nTotal Bill: $${total_bill}`);


// Task 4: Calculate the New Points

let customer = {
    "customer_name": "Johnny Manggo",
    "points": 12300,
    "cart": [
      { 'item': "Shampoo", 'quantity': 2, 'price_$': 3 },
      { 'item': "Soap", 'quantity': 2, 'price_$': 2 },
      { 'item': "Toothpaste", 'quantity': 1, 'price_$': 3 },
    ],
  };


const oldPoints = customer['points'];
let total_bill = 0;
let items = ''

for( cart of customer['cart'] ) {
    const totalItemPrice = cart['quantity'] * cart['price_$'];
    customer['points'] += cart['quantity'];
    total_bill += totalItemPrice;
    items += `\n${cart['quantity']}x ${cart['item']} --- $${totalItemPrice.toFixed(2)}`;
}


console.log(`Hi, ${customer['customer_name']}! We are happy to see you today. \nYour current points are: ${oldPoints}.Purchased Items:${items}\nTotal Bill: $${total_bill.toFixed(2)}\nNew Current Points: ${customer['points']}`);


