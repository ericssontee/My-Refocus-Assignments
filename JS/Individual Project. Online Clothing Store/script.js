// Variables
let userLogin = {};
let userCart = [];

const shopInformation =
  {
    store: "Zara",
    location: "Manhattan Avenue, New York",
    code: "NY656",
  };

const usersInformation = [
  {
    userID: 1,
    firstName: "Angelina",
    lastName: "Jolie",
    age: 47,
    birthday: "4.06.1975",
    cart: userCart,
  },
];

const items = [
  {
    itemID: 1,
    item_name: "Blue Jeans",
    category: "Trousers",
    price: 50,
    stock_qty: 456,
  },
  {
    itemID: 2,
    item_name: "Red Jeans",
    category: "Trousers",
    price: 50,
    stock_qty: 200,
  }
];
// End of Variables


// Functions

function addUsers(newFirstName, newLastName, newAge, dayBirth, monthBirth, yearBirth) {

  let uid = usersInformation[usersInformation.length - 1].userID;
  uid++;

  try {
    usersInformation.push({
      userId: uid,
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
      birthday: `${monthBirth}.${dayBirth}.${yearBirth}`,
    });
  } catch (error) {
    `Error on inserting a user: ${error}`;
  }
}

function userLoginStore(firstName, lastName) {
  const indexUser = usersInformation.findIndex((user) => user.firstName === firstName && user.lastName === lastName );

  if (indexUser < 0) {
    console.log(
      `User ${firstName} ${lastName} is not found. Please register the user.`
    );
  } else {
    userLogin = usersInformation[indexUser];
    console.log(
      `Logged in successfully as ${userLogin.firstName} ${userLogin.lastName}!`
    );
  }
}

function addOrUpdateItem(itemName, itemCategory, itemPrice, itemQty) {
  const addItemObj = {
    item_name: itemName,
    category: itemCategory,
    price: itemPrice,
    stock_qty: itemQty,
  };
  let indexItem = 0;
  // Find the item by item id 
  try {
    indexItem = items.findIndex( (item) => item.item_name === addItemObj.item_name && item.category === addItemObj.category );
  } catch (error) {
    console.log(error);
    return;
  }

  if (indexItem > 0) {
    if (addItemObj.stock_qty == null || addItemObj.price == null) {
      console.log( `No new Stock or Price value has been entered for ${items[indexItem].item_name}` );
      return;
    }

    items[indexItem].stock_qty = !addItemObj.stock_qty ? items[indexItem].stock_qty : items[indexItem].stock_qty + addItemObj.stock_qty;
    items[indexItem].price = !addItemObj.price ? items[indexItem].price : addItemObj.price;
    console.log( `Stock or Price of ${items[indexItem].item_name} has been updated`);
    console.log(items[indexItem]);
  } else {

    let newID = items.length;
    newID++
    addItemObj['itemID'] = newID;
    
    if (addItemObj.stock_qty == null || addItemObj.price == null) {
      console.log( `No Stock or Price value has been entered for ${addItemObj.item_name}. Please enter with Complete details.` );
      return;
    }
    console.log(addItemObj);
    items.push(addItemObj);
    console.log(`Item ${items[items.length - 1].item_name} has been Added`);
  }
}

function addToCartItem(itemID, itemCartQty) {
  if (Object.keys(userLogin).length > 0) {
    let itemToAddIndex;
    try {
      itemToAddIndex = items.findIndex( item => item.itemID === itemID );
    } catch (error) {
      console.log(error);
    }

    if (itemToAddIndex < 0) {
      console.log(`Item is not available.`);
      return;
    };
    const itemToAdd = items[itemToAddIndex]
    if (itemCartQty < itemToAdd.stock_qty) {

      // Check if there's a the same item already added to card.
      try {
        itemCartindex = userCart.findIndex( itemCart => itemCart.item.itemID === itemID );
      } catch (error) {
        console.log(error);
      }

      if ( itemCartindex >= 0) {
        userCart[itemCartindex].qty += itemCartQty;
        console.log(`Qty of Item ${userCart[itemCartindex].item.item_name} has been updated as ${userCart[itemCartindex].qty}`);
        return;
      }
      
      // When item is not still added on cart.
      let newID = userCart.length;
      newID++;
      userCart.push(
        {
          cartItemID: newID,
          item: itemToAdd,
          qty: itemCartQty
        }
      );
      console.log(`Item ${itemToAdd.item_name} has been added to cart`);
    } else {
      console.log(`Item ${itemToAdd.item_name} can't accomodate the qty input by the user.`);
    };
  } else {
    console.log('No user is login. Please login.');
    return;
  };
};

function confirmOrder ( isConfirmed, totalPaid ) {

  if (isConfirmed === 'Yes' || isConfirmed === 'yes') {
    let totalPrice = 0.00;
    console.log(userCart)
    userCart.forEach(function (itemSold){
      const item = itemSold.item;
      totalPrice += (item.price * itemSold.qty);
      updateItemQtyAfterConfirm(item.itemID, itemSold.qty)
    })
    console.log(`Total Price is: $${totalPrice}`);
    if (totalPaid < totalPrice) {
      console.log("User paid with insufficient funds. Please add more.")
      return;
    }
    const change = totalPaid - totalPrice
    showReceipt(totalPrice, totalPaid, change);
    
  } else {
    console.log("Continue Buying :)");
  };

}; 

function updateItemQtyAfterConfirm (itemID, confirmQty) {
  const itemToUpdateIndex = items.findIndex( (item) => item.itemID === itemID );
  const itemToUpdate = items[itemToUpdateIndex];
  itemToUpdate.stock_qty -= confirmQty;
}

function showReceipt ( totalPrice, totalPaid, change) {
  console.log("================================================");
  console.log(`==                    ${shopInformation.store}                    ==\n`);
  console.log(`==         ${shopInformation.location}         ==\n`);
  console.log("================================================");
  console.log("\n");
  console.log("Items:\n");
  console.log("================================================");
  console.log("\n");
  let itemNo = 1;
  userCart.forEach(function (itemSold){
    const item = itemSold.item;
    console.log(`${itemNo}. ${item.item_name}  ${itemSold.qty}*$${item.price} \n`);
    itemNo++
  })

  console.log("\n");
  console.log("================================================");
  console.log("\n");
  console.log(`Total Price: $${totalPrice}`);
  console.log(`Paid: $${totalPaid}`);
  console.log(`Change: $${change}`);
  console.log("\n");
  console.log("\n");
  console.log("Thank you for shopping. :)");


  userCart = {}

}


console.log("\n\nTest Login Functions")
addToCartItem()

userLoginStore("Ericsson", "Tee");

addUsers("Eric", "Tee", 27, 11, 9, 1996);

userLoginStore("Eric", "Tee");

console.log("Test Login Functions Complete \n\n")

console.log("Test Add To Cart Functions")

addToCartItem(2, 201);
addToCartItem(1, 2019);

console.log(userCart);

addToCartItem(2, 199);
console.log(userCart);

console.log("Test Add To Cart Functions Complete \n\n")

console.log("Test Add item or Add Qty Functions")

addOrUpdateItem("Red Jeans", "Trousers", null, null);

addOrUpdateItem("White Jeans", "Trousers", 60, 450);

addOrUpdateItem("Apple Computer", "Computer", 1000.50, 10);

console.log(items);

addOrUpdateItem("Keyboard", "Keychron", 55, 10)

console.log("Test Add item or Add Qty Functions Complete \n\n")

console.log("Test Purchase Functions\n")

addToCartItem(2, 1);

addToCartItem(1, 2);

addToCartItem(4, 3);

addToCartItem(5, 1);

confirmOrder('Yes', 14000);

console.log("Test Purchase Functions Complete\n\n")

console.log("Test Item values and Cart Object after Purchase\n")

console.log(items);
console.log(userCart);

console.log("Test Items and Cart after Purchase Complete")

