const { Employee } = require("./employee");

class Marketer extends Employee {
    constructor () {
        super();
    }

    promoteCompany () {
        console.log(`${this.companyName} is about caring enough to create value for customers. If you get that part right, selling is easy.`)
    }

    showProductsCompany (arrProducts) {
        console.log(`The following successful products of ${this.companyName} are ${arrProducts.join(', ')}.`)
    }
}


const marketer = new Marketer();

marketer.name = 'Steve Jobs'
marketer.salary = 10000000;

marketer.introductionEmployee();
marketer.salaryEmployee();
marketer.companyEmployee();
marketer.promoteCompany();
marketer.showProductsCompany(['Fried Chicken', 'Supercomputer', 'Cars', 'I-drone']);