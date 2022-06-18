//Node Modules
const fs = require('fs');
//Start the prompt
const { prompt } = require ('inquirer');

//Employee Profiles
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

// Questions for Team Profile
const questions = require('./src/questions');

//Link to generate html mark-up
const generateHTML = require('./src/generateHTML');

//Employee Info as one object
const employees = {Manager:[],Intern:[],Engineer:[]};

init();

//Function to prompt questions to eventually generate HTML page
function init() {
    prompt (questions).then(ans => {
        //If Employee is true
        if (ans.isEmployee) {
            if (ans.role === "Manager"){
                employees.Manager.push(new Manager(ans.name, ans.id, ans.email, ans.officeNumber));
            };
            if (ans.role === "Engineer"){
                employees.Engineer.push(new Engineer(ans.name, ans.id, ans.email, ans.github));
            };
            if (ans.role === "Intern"){
                employees.Intern.push(new Intern(ans.name, ans.id, ans.email, ans.school));
            };
            // Loops back to start questions to create a new Employee
            init();    
        } else {
            //Adds Employees to HTML
            generateHTML(employees);
        }
    });
}

