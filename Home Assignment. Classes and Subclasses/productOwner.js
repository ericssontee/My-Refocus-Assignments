const { Employee } = require("./employee");

class ProductOwner extends Employee {
    constructor () {
        super();
        this.projects = [];
    };

    addProjects (project) {
        this.projects.push(project);
        console.log(`New project ${project} has been added. The current projects of company ${this.companyName} are:`);
        console.log(this.projects.join('\n'));
    }


}


const productOwner = new ProductOwner();

productOwner.name = 'gates';
productOwner.salary = 5000000;

productOwner.introductionEmployee();
productOwner.salaryEmployee();
productOwner.companyEmployee();
productOwner.addProjects('Create Class');
productOwner.addProjects('POS Machine');
productOwner.addProjects('f1 Racing');
productOwner.addProjects('NASCAR');
productOwner.addProjects('WRC');