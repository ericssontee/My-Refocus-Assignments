const { Employee } = require("./employee");

class Tester extends Employee {
    constructor () {
        super();
    }

    notifCodePass (codeName) {
        console.log(`Tester ${this.nameToUppperCase(this.name)} has approved the code/feature ${codeName} since there's no error found during testing.`)
    }

    notifCodeReject (codeName) {
        console.log(`Tester ${this.nameToUppperCase(this.name)} has rejected the code/feature ${codeName} since there's an error found during testing.`)
    }

};



const tester = new Tester();

tester.name = 'Eric';
tester.salary = 55000;

tester.introductionEmployee();
tester.salaryEmployee();
tester.companyEmployee();
tester.notifCodePass('File Extractor');
tester.notifCodeReject('Data Extractor');