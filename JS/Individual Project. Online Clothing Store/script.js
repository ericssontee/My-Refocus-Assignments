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
  },
];

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

    console.log(usersInformation[usersInformation.length - 1]);
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

  const indexItem = items.findIndex( (item) => item.item_name === addItemObj.item_name && item.category === addItemObj.category );

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
    const newID = items.length++
    items.push(newID, addItemObj);
    if (addItemObj.stock_qty == null || addItemObj.price == null) {
      console.log( `No Stock or Price value has been entered for ${addItemObj.item_name}. Please enter with Complete details.` );
      return;
    }
    console.log(`Item ${items[items.length - 1].item_name} has been Added`);
    // console.log(items[items.length - 1]);
  }
}

function addToCartItem(itemID, itemCartQty) {
  if (Object.keys(userLogin).length > 0) {
    let itemToAddIndex;
    try {
      itemToAddIndex = items.findIndex( item => item.itemID === itemID );
      console.log(itemToAddIndex)
    } catch (error) {
      console.log(error);
    }

    if (itemToAddIndex < 0) {
      console.log(`Item is not available.`);
      return;
    };
    const itemToAdd = items[itemToAddIndex]
    if (itemCartQty < itemToAdd.stock_qty) {
      let newID = userCart.length++
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
    const totalPrice = 0.00;
    for (const itemSold in userCart) {
      const item = itemSold.item;
      totalPrice += (item.price * itemSold.qty);
    }
    if (totalPaid < totalPrice) {
      console.log("User paid with insufficient funds. Please add more.")
      return;
    }
    const change = totalPaid - totalPrice
    showReceipt(totalPrice, totalPrice, change);
    
  } else {
    console.log("Continue Buying :)");
  };

}; 

function updateItemQtyAfterConfirm (itemID, confirmQty) {
  const itemToUpdateIndex = items.findIndex( (item) => item.itemID === itemID );
  const itemToUpdate = items[itemToUpdateIndex];
  itemToUpdate.stock_qty - confirmQty;
}

function showReceipt ( totalPrice, totalPaid, change) {
  console.log("================================================");
  console.log(`==         ${shopInformation.store}           ==\n`);
  console.log(`==         ${shopInformation.location}        ==\n`);
  console.log("================================================");
  console.log("\n");
  console.log("Items:\n");
  console.log("================================================");
  console.log("\n");
  const itemNo = 1;
  for (const itemSold in userCart) {
    const item = itemSold.item
    console.log(`${itemNo}. ${item.item_name}  ${itemSold.qty}*$${item.price} \n`);
    itemNo++
  }
  console.log("\n");
  console.log("================================================");
  console.log("\n");
  console.log(`Total Price: $${totalPrice}`);
  console.log(`Paid: $${totalPaid}`);
  console.log(`Change: $${change}`);

}


console.log("Test Login Functions")
addToCartItem()

userLoginStore("Ericsson", "Tee");

addUsers("Eric", "Tee", 27, 11, 9, 1996);

userLoginStore("Eric", "Tee");

console.log("Test Login Functions Complete \n\n")

console.log("Test Add To Cart Functions")

addToCartItem(2, 201);

addToCartItem(2, 199);

console.log("Test Add To Cart Functions Complete \n\n")

console.log("Test Add item or Add Qty Functions")

addOrUpdateItem("Red Jeans", "Trousers", null, null);

addOrUpdateItem("White Jeans", "Trousers", 60, 450);

//addOrUpdateItem("Apple Macbook", "Computer", 1250, 10)

//addOrUpdateItem("Keyboard", "Keychron", 55, 10)

console.log("Test Add item or Add Qty Functions Complete \n\n")

console.log("Test Purchase Functions")

addToCartItem(1, 1);

addToCartItem(3, 2);

confirmOrder('Yes', 100);

console.log("Test Purchase Functions Complete")

