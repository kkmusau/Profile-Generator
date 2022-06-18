const { writeFile } = require('fs');

// Function to generate HTML markup from index.html
function generateHTML(employees) {
    let output = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
</head>
<body>
    `
    

    employees.Manager.forEach(mgr => {
        
    });
}

// export to index
module.exports = generateHTML; 