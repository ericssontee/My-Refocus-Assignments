// Find the first uppercase letter 

// The news company needs to find the first uppercase letter in each of their articles. 
// Create an algorithm which checks a text and finds its first uppercase letter.


const text = "there Is a storm coming to thE East of the Philippines";

function getFirstCapital(str) {
    let capStr = "";
    for (let i = 0; i < str.length; i++) {
        if(capStr == "") {
            if (str[i].match(/[A-Z]/)) {
                capStr += str[i];
            }
        } else {
            break;
        }
        
    }
    return capStr
}

console.log(getFirstCapital(text));