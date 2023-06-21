// TODO: Include packages needed for this application
const { error } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const { default: Choices } = require('inquirer/lib/objects/choices');
// TODO: Create an array of questions for user input
const prompt = inquirer.createPromptModule();
 prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title" 
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "description"
    },
    {
        type: "input",
        message: "What installations did you use for your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "What was the usage of your project?",
        name: "usage"
    },
    {
        type: "list",
        message: "What is the license of your project?",
        name: "license",
        choices: ["Mozilla Public License 2.0", "Apache License 2.0", "The Unilicense"]
    },
    {
        type: "input",
        message: "What is the contribution of your project?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What is the test of your project?",
        name: "test"
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },

 ])
.then((data)=>{
    const readMeContent = generateMarkdown(data);
    fs.writeFile("dist/README.md",readMeContent,(error)=>{
        if (error) throw error;
        console.log("readme generated.")
    });
})
.catch((err)=>{
    console.error("error alert", err)
});



