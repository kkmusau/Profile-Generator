//Requiring for the import of the Employee constructor
const Employee = require('./Employee');

// The Intern constructor extends the Employee constructor
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
//Overrides the Employee Role to Intern
    getRole() {
        return "Intern";
    }
//Returns the school from the input
    getSchool () {
        return this.school;
    }
}

module.exports = Intern;