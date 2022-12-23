//---To Note---
//1. All pre-built functions must return a new array
//2. You can make new functions as long as you want but do not change or update the pre-built ones
//3. You can udpdate the values inside the *newsList variable if you want but do not change the variable name
//4. Happy coding :)

//newsList is the variable that holds an array of strings
export var newsList = [
  "What films should an aspiring journalist watch?",
  "Buried underpants and tea bags help scientists evaluate soil",
  "Decoder: Mining asteroids for minerals can help spare Earth",
  "Media glare can enrich tennis pros yet imperil mental health",
  "'Nightmare' TV show 'Euphoria — health threat or high art?",
  "Decoder: Armenia in a bind as Ukraine war resets global order",
  "What books should an aspiring journalist read?",
  "Marie Colvin shined a light on war-torn corners of the world",
];

// export const inputValue = ''; // For testing only since the inputValue inside the search value is pre-made.

export function search() {
  //inputValue is the variable that contains the search string
  const inputValue = document.getElementById("search-input").value;
  
  //Write your code here for the search function

  let searchArray
  
  if (inputValue.toLowerCase() === null || inputValue.toLowerCase() === ''){
    searchArray = newsList;
    return searchArray;
  } else if (newsList.toLocaleString().toLowerCase().includes(inputValue.toLowerCase()) === true) {
    searchArray = newsList.filter(x => {
      return x.toLowerCase().includes(inputValue.toLowerCase());
    });
    return searchArray;
  } else {
    window.alert("No results found. Please try again. To reset the list, clear the input box first then click search button.");
    return [];
  };
}

export function testSearch(searchParam) {
  //inputValue is the variable that contains the search string
  const inputValue = searchParam
  
  //Write your code here for the search function

  let searchArray
  // const inputEntered = inputValue;
  
  if (inputValue.toLowerCase() === null || inputValue.toLowerCase() === ''){
    searchArray = newsList;
    return searchArray;
  } else if (newsList.toLocaleString().toLowerCase().includes(inputValue.toLowerCase()) === true) {
    searchArray = newsList.filter(x => {
      return x.toLowerCase().includes(inputValue.toLowerCase());
    });
    return searchArray;
  } else {
    // window.alert("No results found. Please try again. To reset the list, clear the input box first then click search button.");
    return [];
  };
}

export function sort(type) {
  if (type == "ascending") {
    //Write your code here for sorting (ascending)
    newsList.sort();
    return newsList;
  } else {
    //Write your code here for sorting (descending)
    newsList.sort((a, b) => b.localeCompare(a, 'en', {sensitivity: 'base'}))
    return newsList;
  }
}
