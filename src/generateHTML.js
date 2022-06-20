const { writeFile } = require('fs');

// Function to generate HTML markup from index.html
function generateHTML(employees) {
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
        <div class="row">
        ${employees}
    `


    // employees.Manager.forEach(mgr => {
    //     `  <div class="team-area col-12 d-flex justify-content-center">
    //     <div class="card employee-card">
    //         <div class="card-header">
    //             <h2 class="card-title">${ans.name}</h2>
    //             <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${ans.role}</h3>
    //         </div>
    //         <div class="card-body">
    //             <ul class="list-group">
    //                 <li class="list-group-item">ID: ${ans.id}</li>
    //                 <li class="list-group-item">Email: ${ans.email}<a
    //                         href="mailto:jared@fakemail.com">jared@fakemail.com</a></li>
    //                 <li class="list-group-item">Office number: 1</li>
    //             </ul>
    //         </div>
    //     </div>`

// });
}

// export to index
module.exports = generateHTML; 