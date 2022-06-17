//Requiring for the import of the Employee constructor
const Employee = require ('./Employee');

// The Engineer constructor extends the Employee constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this. github = github
    }

    getGithub () {
        return this.github;
    }

    getRole () {
        return "Engineer";
    }
}

module.exports = Engineer;
