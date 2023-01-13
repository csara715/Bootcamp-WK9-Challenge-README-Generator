// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  "What is your GitHub username?",
  "What is your email address?",
  "What is your project's name?",
  "Please write a short description of your project:",
  "What kind of license should your project have?",
  "What command should be run to install dependencies?",
  "What command should be run to install optional dependencies?",
  "What command should be run to run tests?",
  "What does the user need to know about usage?",
  "What does the user need to know about contributing to the repo?",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfully created README file!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "username",
        message: questions[0],
      },
      {
        type: "email",
        name: "email",
        message: questions[1],
      },
      {
        type: "input",
        name: "title",
        message: questions[2],
      },
      {
        type: "input",
        name: "description",
        message: questions[3],
      },
      {
        type: "list",
        name: "license",
        message: questions[4],
        choices: ["MIT", "Apache", "GPL", "BSD", "None"],
      },
      {
        type: "input",
        name: "dependencies",
        message: questions[5],
      },
      {
        type: "input",
        name: "optional",
        message: questions[6],
      },
      {
        type: "input",
        name: "tests",
        message: questions[7],
      },
      {
        type: "input",
        name: "usage",
        message: questions[8],
      },
      {
        type: "input",
        name: "contributions",
        message: questions[9],
      },
    ])
    .then((answers) => {
      const readMeContent = generateMarkdown(answers);
      writeToFile("README.md", readMeContent);
    });
}

// Function call to initialize app
init();
