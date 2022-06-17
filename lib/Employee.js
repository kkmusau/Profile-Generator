// The Employee constructor is responsible for 

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
}

// To return the name input
getName () {
    return this.name;
}

// To return ID from input
getId () {
    return this.id;
}

//To return email from input
getEmail () {
    return this.email;
}


//To return the role of the employee
getRole() {
    return 'Employee';
}

};

//to export the employee js
module.exports = Employee;