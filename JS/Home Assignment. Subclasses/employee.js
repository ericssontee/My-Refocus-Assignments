class Employee {
    constructor (name, salary) {
        this.name = name;
        this.salary = salary;
        this.companyName = 'MHA'
    }

    introductionEmployee() {
        console.log(`Hi, My name is ${this.name}.`)
    }

    salaryEmployee() {
        console.log(`${this.name[0].toUpperCase() + this.name.slice(1)}'s salary is $${this.salary}.`)
    }

}

exports.Employee = Employee;