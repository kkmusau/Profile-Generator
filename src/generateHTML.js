const { writeFile } = require('fs');

// Function to generate HTML markup from index.html
function generateHTML({ Manager, Engineer, Intern }) {

    let output = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" 
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="./src/style.css" />
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
    `

    if(Manager.length) {
        output += '<div class="row">'

        Manager.forEach(mgr => {
            output += `
                <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${mgr.name}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${mgr.id}</li>
                            <li class="list-group-item">Email: ${mgr.email}</li>
                            <li class="list-group-item">Office number: ${mgr.officeNumber}</li>
                        </ul>
                    </div>
                </div>
            `
        });

        output += '</div><hr>';
    };

    if(Engineer.length) {
        output += '<div class="row">'

        Engineer.forEach(Eng => {
            output += `
                <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${Eng.name}</h2>
                        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${Eng.id}</li>
                            <li class="list-group-item">Email: ${Eng.email}</li>
                            <li class="list-group-item">GitHub: ${Eng.github}</li>
                        </ul>
                    </div>
                </div>
            `
        });
        output += '</div><hr>';
    };

    if(Intern.length) {
        output += '<div class="row">'

        Intern.forEach(Int => {
            output += `
                <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${Int.name}</h2>
                        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${Int.id}</li>
                            <li class="list-group-item">Email: ${Int.email}</li>
                            <li class="list-group-item">School: ${Int.school}</li>
                        </ul>
                    </div>
                </div>
            `
        });
        output += '</div><hr></div>';
    };

    writeFile("./index.html", output, err => {if (err) throw err});
}



// export to index
module.exports = generateHTML; 