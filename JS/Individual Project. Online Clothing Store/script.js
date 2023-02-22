const shopInformation = [
  {
    store: "Zara",
    location: "Manhattan Avenue, New York",
    code: "NY656",
  },
];

const userInformation = [
    { 
        firstName: 'Angelina',
        lastName: 'Jolie',
        age: 47,
        birthday: '4.06.1975' 
    }
];

const items = [
    {
        item_name: 'Blue Jeans',
        category: 'Trousers',
        price: 50,
        stock_qty: 456
    },
    {
        item_name: 'Red Jeans',
        category: 'Trousers',
        price: 50,
        stock_qty: 456
    }
]


function addUsers (newFirstName, newLastName, newAge, dayBirth, monthBirth, yearBirth) {
    userInformation.push({
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
        birthday: `${monthBirth}.${dayBirth}.${yearBirth}`
    }); 
}

// addUsers('Eric', 'Tee', 27, 11, 9, 1996);

// console.log(userInformation);


function addUpdateItem (itemName, itemCategory, itemPrice, itemQty) {
    const addItemObj = {
        item_name: itemName,
        category: itemCategory,
        price: itemPrice,
        stock_qty: itemQty
    }

    const indexItem = items.findIndex(item => item.item_name === addItemObj.item_name && item.category === addItemObj.category)

    if (indexItem > 0) {
        // items[indexItem].price = addItemObj.price
        items[indexItem].stock_qty = addItemObj.stock_qty
        console.log(`Stocks of ${items[indexItem].item_name} has been updated`);
        console.log(items[indexItem]);
    } else {
        items.push(addItemObj)
        console.log(`Item ${items[items.length - 1].item_name} has been Added`);
        console.log(items[items.length - 1])
    }

}

addUpdateItem('Red JeansS', 'Trousers', 60, 400);

addUpdateItem('Red JeansS', 'Trousers', 60, 450);
