//Requiring for the import of the Employee constructor
const Employee = require ('./Employee');

//The Manger constructer extends the Employee constructor
class Manager extends Employee {
    constructor (name, id, email, officeNum) {
        // Calling the Employee constructor
        super (name, id, email);
        this.officeNumber = officeNum;
    }
    //Overrides the Employee Role to Manager
    getRole() {
        return "Manager";
    }
}


//exporting the Manager js
module.exports = Manager;