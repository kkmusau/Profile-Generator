//node modules
const fs = require('fs');
const { prompt } = require ('inquirer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const questions = require('./src/questions');
const generateHTML = require('./src/generateHTML');

const employees = {Manager:[],Intern:[],Engineer:[]};

init();

function init() {
    prompt (questions).then(ans => {
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

            init();    
        } else {
            generateHTML(employees);
        }
    });
}

