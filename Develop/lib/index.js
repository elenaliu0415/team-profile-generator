const Manager = require("./Manager");
const Intern = require("./Intern");
const Engineer = require("./Engineer");
const fs = require("fs");
const inquirer = require("inquirer");

let manager;
let interns = [];
let engineers = [];

function promptMenu() {
    const questions = [
        {
          type: "list",
          message: "Menu Options: ",
          name: "menu",
          choices: ["Add an engineer",
                    "Add an intern",
                    "Finish building team"]
        },
    ];
    inquirer.prompt(questions).then((answers) => {
        switch (answers.menu) {
            case "Add an engineer":
                return promptEngineer();
            case "Add an intern":
                return promptIntern();
            case "Finish building team":
                writeToFile("dist/team.html");
                console.log("Your team is complete.");
                break;
        }
    });
}

function promptManager() {
    const managerQuestions = [
        {
            type: "input",
            message: "What is your team manager's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your team manager's id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your team manager's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your team manager's office number?",
            name: "officeNumber"
        }
    ];
    inquirer.prompt(managerQuestions).then((answers) => {
        manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        // console.log(newManager);
        return promptMenu();
    });
}

function promptEngineer() {
    const engineerQuestions = [
        {
            type: "input",
            message: "What is your team engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your team engineer's id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your team engineer's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your team engineer's github?",
            name: "github"
        }
    ];
    inquirer.prompt(engineerQuestions).then((answers) => {
        let newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        engineers.push(newEngineer);
        // console.log(newEngineer);
        return promptMenu();
    });
}

function promptIntern() {
    const internQuestions = [
        {
            type: "input",
            message: "What is your team intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your team intern's id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your team intern's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your team intern's school?",
            name: "school"
        }
    ];
    inquirer.prompt(internQuestions).then((answers) => {
        let newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
        interns.push(newIntern);
        // console.log(newIntern);
        return promptMenu();
    });
}

function writeToFile(fileName) {
    const contents = generateHTML(manager, interns, engineers);
    s.writeFile(fileName, contents, (err) => {
        return err
          ? console.log(err)
          : console.log(`Your professional ${fileName} is created!`);
      });
}

// Create a function to initialize app
function init() {
    promptManager();
  }
// Function call to initialize app
init();
