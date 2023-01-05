class Employee {
    constructor (name, salary) {
        this.name = name;
        this.salary = salary;
        this.companyName = 'MHA'
    }

    nameToUppperCase(name) {
        return name[0].toUpperCase() + name.slice(1);
    }

    introductionEmployee() {
        console.log(`Hi, My name is ${this.nameToUppperCase(this.name)}.`)
    }

    salaryEmployee() {
        console.log(`${this.nameToUppperCase(this.name)}'s salary is $${this.salary}.`)
    }

    companyEmployee() {
        console.log(`I work at ${this.companyName}.`);
    }

}

exports.Employee = Employee;