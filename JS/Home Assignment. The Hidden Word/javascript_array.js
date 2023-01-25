// Create the Necessary Variables

const letters = ["E", "D", "L", "T", "E", "P", "B", "N", "M", "E", "E", "W", "V", "0", " "]; // Letters to be decrypt

const order = [11, 4, 6, 14, 1, 9, 12, 0, 2, 13, 5, 8, 10, 7, 3]; // This array will arrange the letters to be decrypt. 


// Decrypt the code

let hiddenWord = '';

for( i = 0; i < order.length; i++ ) {
    hiddenWord += letters[order[i]];  //value from letters arrays will be added to hiddenWord value depends from the value of the order. In short, order variable acts as an index of letters. 
    console.log(hiddenWord); // This will print the value of hiddenWord until the loop finished.
}