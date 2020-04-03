const fs = require("fs"); 
const path = require("path"); 
const inquirer = require("inquirer"); 
const api = require("./utils/api"); 
const generateMarkdown = ("./utils/generateMarkdown"); 


const questions = [
    {
        type: "input", 
        name: "github",
        message: "What is your GitHub username?"
    }, 
    {
        type: "input", 
        name: "title",
        message: "What is your projects name?"
    }, 
    {
        type: "input", 
        name: "description",
        message: "Provide a description of your project?"
    }, 
    {
        type: "input", 
        name: "license",
        message: "What type of license should your project have?", 
        choices: ["MIT", "APACHE 2.O", "GPL.3.0", "BSD 3", "None"]
    }, 
    {
        type: "input", 
        name: "github",
        message: "What is your GitHub username?"
    }, 
    {
        type: "input", 
        name: "installation",
        message: "What command should be run to install dependencies", 
        default: "npm i"
    }, 
    {
        type: "input", 
        name: "test",
        message: "What command should be run to run tests", 
        default: "npm test"
    },  
    {
        type: "input", 
        name: "usage",
        message: "What does the user need to know about using this repo?"
    }, 
    {
        type: "input", 
        name: "contributing",
        message: "What does user need to know about contributing to this repo?"
    }
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data); 
}

function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log("Searching..."); 

        api.getUser(inquirerResponses.github).then(({ data }) => {
            writeToFile("README.md", generateMarkdown({ ...inquirerResponses, ...data})); 
        })
    })
}

init();
