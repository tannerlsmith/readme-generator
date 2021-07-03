// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [ {
    type: 'input',
    name: 'title',
    message: 'What is your project title?'
}, {
    type: 'input',
    name: 'githubUsername',
    message: 'What is your github username?'
}, {
    type: 'input',
    name: 'email',
    message: 'What is your email?'
}, {
    type: 'input',
    name: 'description',
    message: 'Write a description of your project.'
}, {
    type: 'input', 
    name: 'installations',
    message: 'What are the installations needed?'
}, {
    type: 'input', 
    name: 'usageInformation',
    message: 'Enter usage information did you use?'
}, {
    type: 'input', 
    name: 'contributing',
    message: 'What are the contributions?'
}, {
    type: 'input', 
    name: 'tests',
    message: 'What are the tests used?'
}, {
    type: 'list', 
    name: 'license',
    message: 'Please select a license.',
    choices: ['MIT', 'apache', 'IBM']
}
];
// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, err => {
        if (err) throw err
        console.log('File created.')
    })
}

// TODO: Create a function to initialize app and calls 
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers)
        let dataTemplate = generateMarkdown(answers)
        console.log(dataTemplate)
        writeToFile(dataTemplate)
    })
}

// Function call to initialize app
init();