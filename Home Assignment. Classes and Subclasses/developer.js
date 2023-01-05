const employee = require('./employee');


class Developer extends employee.Employee {
    constructor (specialty) {
        super();
        this.specialty = specialty;
    }

    specialtyEmployee() {
        console.log(`I'm a web developer specializing in ${this.specialty}.`);
    }

    // Relocating this function to employee class since it will be used to all subclass with the same value.
    // companyEmployee() {
    //     console.log(`I work at ${this.companyName}.`);
    // }

}



const developer = new Developer('Full Stack Developer');
developer.name = 'eric';
developer.salary = 65000;


developer.introductionEmployee();
developer.salaryEmployee();
developer.specialtyEmployee();
developer.companyEmployee();

