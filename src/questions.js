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
        //When isEmployee is tr
        when: ({ isEmployee }) => isEmployee
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the emplyee\'s name?',
        when: ({ isEmployee }) => isEmployee
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the emplyee\'s id?',
        when: ({ isEmployee }) => isEmployee
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the emplyee\'s email address?',
        when: ({ isEmployee }) => isEmployee
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the manager\'s office number?',
        when: ({ role }) => role === 'Manager'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineer\'s Github username?',
        when: ({ role }) => role === 'Engineer'
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the intern\'s school?',
        when: ({ role }) => role === 'Intern'
    },
]

module.exports= questions;