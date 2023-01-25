// Task 1. Design a bank application

// Create a feature for a bank app that allows users to do 3 things: check their balance and withdraw or deposit money.
// It is forbidden to manually modify the balance. Users can only do it using the 3 rules mentioned above.

// Develop a closure to enable this feature.
console.log('Task 1\n')

function bankApp() {
  let balance = 0;
  let user = "";
  function createBankAccount(name) {
    user = name;
    console.log(`Hi ${user}, welcome to your new bank account.\nYour total balance as of now is ₱${balance.toFixed(2)}.`);
  }

  function depositAmount(amount) {
    balance += amount;
    console.log(`Hi ${user}, you have deposited an amount of ₱${amount}.\nYour total balance as of now is ₱${balance.toFixed(2)}.`);
  }

  function withdrawAmount(withdrawAmount) {
    if (withdrawAmount > balance) {
        console.log("Unable to process due to insuficient funds.")
    } else {
        balance -= withdrawAmount
        console.log(`Hi ${user}, you have withdrawn an amount of ₱${withdrawAmount}.\nYour total balance as of now is ₱${balance.toFixed(2)}.`);
    }
  }

  return { createBankAccount, depositAmount, withdrawAmount };
}

let bank = bankApp();
bank.createBankAccount('Eric');
bank.depositAmount(5000);
bank.withdrawAmount(10000);
bank.withdrawAmount(550);
console.log('\n\n')

// Task 2. Try another way 
// Now, try to solve the same task using callbacks.
console.log('Task 2\n')


let balance = 0

function bankingApp(name, depositAmount, withdrawAmount, callDeposit, callWithdraw){
    console.log(`Hi ${name}, welcome to your new bank account.\nYour total balance as of now is ₱${balance.toFixed(2)}.`);
    callDeposit(name, depositAmount);
    callWithdraw(name, withdrawAmount)
}

function depositBank(name, depositAmount){
    balance += depositAmount
    console.log(`Hi ${name}, you have deposited an amount of ₱${depositAmount}.\nYour total balance as of now is ₱${balance.toFixed(2)}.`);
}


function withdrawAmount(name, withdrawAmount) {
    if (withdrawAmount > balance) {
        console.log("Unable to process due to insuficient funds.")
    } else {
        balance -= withdrawAmount
        console.log(`Hi ${name}, you have withdrawn an amount of ₱${withdrawAmount}.\nYour total balance as of now is ₱${balance.toFixed(2)}.`);
    }
}

bankingApp("Eric", 4000, 600, depositBank, withdrawAmount)

