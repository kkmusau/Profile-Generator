//Requiring for the import of the Employee constructor
const Employee = require('./Employee');

// The Intern constructor extends the Employee constructor
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    getSchool () {
        return this.school;
    }
}

module.exports = Intern;