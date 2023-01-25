// Task 1. Dish in a menu

// Create an array named “dishes” with 3 objects. 
// Each object should represent a dish and have the following fields: 
// * “dishID”, which is a unique identifier of the dish 
// * “dishName” 
// * “dishPrice” 
// * “ingredients”, which is an array with ingredients to create that dish

const dishes = [
    {"dishID": 1, "dishName":"Sinigang", "dishPrice": 250, "ingredients":["Tamarind","Pork","Kangkong","Onion","Garlic"]},
    {"dishID": 2, "dishName":"Adobo", "dishPrice": 200, "ingredients":["Soy Sauce","Pork","Vinegar","Onion","Garlic"]},
    {"dishID": 3, "dishName":"Fried Chicken", "dishPrice": 100, "ingredients":["Flour","Chicken","Pepper","Bread Crumbs"]},
    {"dishID": 4, "dishName":"Luck Me Pancit Canton", "dishPrice": 50, "ingredients":["Noodles","Calamansi","Pepper","Salt", "Soy Sauce"]},
    {"dishID": 5, "dishName":"Hambuger", "dishPrice": 150, "ingredients":["Beef Patty","Pickles","Bread","Tomato", "Cheese", "Ketchup", "Mayonaise"]}
]

// console.log(dishes)


// Task 2. A restaurant menu 

// Create an object which represents a menu. 
// It should have the following fields: 
// “restaurantName” 
// “dishes”, which is an array from task 1 
// “displayRestaurantName”, an object method that displays the restaurant name 
// “displayMenu”, an object method that displays information about each dish 

// After running the code, you should get a result that looks like the following: 

// Name of the restaurant 

// Dish, ₱500 
// Contains ingredient, ingredient, ingredient. 

// Dish, ₱500 
// Contains ingredient, ingredient, ingredient. 

// Dish, ₱500 
// Contains ingredient, ingredient, ingredient.

const restaurantMenu = {
    "restaurantName": "Eric's Restaurant",
    "dishes": dishes,
    "displayRestaurantName": function (){
        console.log(this.restaurantName, '\n')
    },
    "displayMenu": function (){
        for (dish_obj of this.dishes){
            console.log(`${dish_obj['dishName']}, ₱${dish_obj['dishPrice']}\nContains ${dish_obj['ingredients'].join(', ')}.\n`)

        }
    }
}

restaurantMenu.displayRestaurantName()

restaurantMenu.displayMenu()
