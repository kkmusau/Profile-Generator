//Requiring for the import of the Employee constructor
const Employee = require ('./Employee');

// The Engineer constructor extends the Employee constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        //Calling the Employee constructor
        super (name, id, email);
        this. github = github
    }
//Overrides the Employee Role to Engineer
    getRole () {
        return "Engineer";
    }   
// Returns the GitHub input
    getGithub () {
        return this.github;
    }
}

module.exports = Engineer;
