// create functions to generate the cards for team members
function teamManager(manager) {
  return `
        <div class="col-3 m-3">
          <div class="card">
            <div class="card-header">
              <h3>${manager.name}</h3>
              <h5><i class="fa fa-coffee" aria-hidden="true"></i> ${manager.role}</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: ${manager.email}</li>
                <li class="list-group-item">Office number: ${manager.officeNumber}</li>
              </ul>
            </div>
          </div>
        </div>      
            `;    
}

function teamEngineers(engineer) {
  return `
        <div class="col-3 m-3">
          <div class="card">
            <div class="card-header">
              <h3>${engineer.name}</h3>
              <h5><i class="fa fa-laptop" aria-hidden="true"></i> ${engineer.role}</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: ${engineer.email}</li>
                <li class="list-group-item">GitHub: ${engineer.github}</li>
              </ul>
            </div>
          </div>
        </div>
            `;
}

function teamInterns(intern) {
  return `
        <div class="col-3 m-3">
          <div class="card">
            <div class="card-header">
              <h3>${intern.name}</h3>
              <h5><i class="fa fa-graduation-cap" aria-hidden="true"></i> ${intern.role}</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: ${intern.email}</li>
                <li class="list-group-item">School: ${intern.school}</li>
              </ul>
            </div>
          </div>
        </div>
            `;
}

function generateHTML(manager, interns, engineers) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"
      />
      <script src="https://use.fontawesome.com/0362c0af43.js"></script>
      <link rel="stylesheet" href="./style.css" />
      <title>My Team</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4 text-center">My Team</h1>
        </div>
      </div>
  
      <div class="row justify-content-center">
        <!-- team member cards -->
        ${teamManager(manager)}
        ${engineers.map(teamEngineers).join("")}
        ${interns.map(teamInterns).join("")}
      </div>
    </body>
  </html>
        `;

  // return teamEngineers(engineers);
  // return `${engineers.map(teamEngineers).join('')}`;
  // return `${interns.map(teamEngineers).join('')}`;
}

module.exports = generateHTML;
