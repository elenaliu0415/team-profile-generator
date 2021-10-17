const Manager = require("./Manager");
const Intern = require("./Intern");
const Engineer = require("./Engineer");
const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
    {
      type: "input",
      message: "What is your project title?",
      name: "title",
    },
];

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
    });
  }
  // Function call to initialize app
  init();
