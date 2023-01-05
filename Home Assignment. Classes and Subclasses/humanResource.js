const employee = require('./employee');

class HumanResource extends employee.Employee {
    constructor (newEmployee) {
        super();
        
    };

    companyEmployee() {
        console.log(`I work at ${this.companyName}.`);
    }

    hireEmployee (employee, salary) {
        this.introductionEmployee();
        this.salaryEmployee();
        this.companyEmployee()
        console.log(`I've just recently hired ${this.nameToUppperCase(employee)} with a salary of $${salary}.`);
        
    }

};



const hr = new HumanResource();


hr.name = 'eric';
hr.salary = 75000;
hr.hireEmployee('john', 20000);