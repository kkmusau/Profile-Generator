//Requiring for the import of the Employee constructor
const Employee = require ('./Employee');

//The Manger constructer extends the Employee constructor
class Manager extends Employee {
    constructor (name, id, email, officeNum) {
        super (name, id, email);
        this.officeNum = officeNum;
    }
    getRole() {
        return "Manager";
    }
}


//exporting the Manager js
module.exports = Manager;