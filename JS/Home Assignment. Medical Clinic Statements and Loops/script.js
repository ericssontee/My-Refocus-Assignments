const birth_year = 1996;

let current_year = new Date().getFullYear();

let age = current_year - birth_year;

console.log(`Patient’s age: ${age}`);


let birth_month = 9;

const current_Month = new Date().getMonth();

--current_year;

age = current_year - birth_year;


if (birth_month < current_Month ) {
    ++age;
}

console.log(`Patient’s Accurate Age: ${age}`);