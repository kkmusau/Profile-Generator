const questions =     [
    {
        type: 'confirm',
        name: 'isEmployee',
        message: 'Would you like to add an employee?'
    },
    {
        type: 'list',
        name: 'role',
        message: 'Which position would you like to fill?',
        choices: ['Manager','Engineer','Intern'],
        //When isEmployee is true rest of questions are run
        when: ({ isEmployee }) => isEmployee
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the emplyoee\'s name?',
        when: ({ isEmployee }) => isEmployee
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the emplyoee\'s id?',
        when: ({ isEmployee }) => isEmployee
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the emplyoee\'s email address?',
        when: ({ isEmployee }) => isEmployee
    },
    { //Run when Manager is selected as a Role
        type: 'input',
        name: 'officeNumber',
        message: 'What is the manager\'s office number?',
        when: ({ role }) => role === 'Manager'
    },
    { //Run when Engineer is selected as a Role
        type: 'input',
        name: 'github',
        message: 'What is the engineer\'s Github username?',
        when: ({ role }) => role === 'Engineer'
    },
    { //Run when Intern is selected as a Role
        type: 'input',
        name: 'school',
        message: 'What is the intern\'s school?',
        when: ({ role }) => role === 'Intern'
    },
];

module.exports= questions;