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
        iteam_name: 'Blue Jeans',
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
