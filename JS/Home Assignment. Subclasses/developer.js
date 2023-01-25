const employee = require('./employee');


class Developer extends employee.Employee {
    constructor (specialty) {
        super();
        this.specialty = specialty;
    }

    specialtyEmployee() {
        console.log(`I'm a web developer specializing in ${this.specialty}.`);
    }

    companyEmployee() {
        console.log(`I work at ${this.companyName}.`);
    }

}



const developer = new Developer('Full Stack Developer');
developer.name = 'Eric';
developer.salary = 65000;

developer.introductionEmployee();
developer.salaryEmployee();
developer.specialtyEmployee();
developer.companyEmployee();
