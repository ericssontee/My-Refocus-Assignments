const { Employee } = require("./employee");

class TeamLead extends Employee {
    constructor () {
        super();
    };

    newTask (devEmployee, task) {
        this.introductionEmployee();
        this.salaryEmployee();
        this.companyEmployee();
        console.log(`${this.nameToUppperCase(this.name)} has instructed ${this.nameToUppperCase(devEmployee)} to ${task}.` )
    }

}

const teamLead = new TeamLead();

teamLead.name = 'eric'
teamLead.salary = 75000;

teamLead.newTask('Ericsson', 'drop the sales table of Inventory DB');