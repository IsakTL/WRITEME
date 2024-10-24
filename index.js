// Inquirer is used to get user input in this app.
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// An array of questions for user input
const questions = [
    `First, enter the name of your project:`,
    `Next, describe your project's purpose and capabilities:`,
    `How do you install your project?`,
    `How do you use it?`,
    `How, if at all, can others contribute?`,
    `What tests should be run, and what results are expected?`,
    `Tell me a bit about you for Questions. What's your GitHub username?`,
    `What's an email address at which a user can reach you?`,
    `Finally, select a license from this list, ordered from least to most restrictive:`
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile();
}

// TODO: Create a function to initialize app
function init() {
    console.log(`Welcome to writeme, your easy README composer.`);
    getResponses();
}

function getResponses() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title',
                validate (input) {
                    return !!input.trim() || 'Please enter at least one non-whitespace character.'
                }
            },
            {
                type: 'input',
                message: questions[1],
                name: 'desc',
                validate (input) {
                    return !!input.trim() || 'Please enter at least one non-whitespace character.'
                }
            },
            {
                type: 'input',
                message: questions[2],
                name: 'inst',
                validate (input) {
                    return !!input.trim() || 'Please enter at least one non-whitespace character.'
                }
            },
            {
                type: 'input',
                message: questions[3],
                name: 'usage',
                validate (input) {
                    return !!input.trim() || 'Please enter at least one non-whitespace character.'
                }
            },
            {
                type: 'input',
                message: questions[4],
                name: 'contr',
                validate (input) {
                    return !!input.trim() || 'Please enter at least one non-whitespace character.'
                }
            },
            {
                type: 'input',
                message: questions[5],
                name: 'tests',
                validate (input) {
                    return !!input.trim() || 'Please enter at least one non-whitespace character.'
                }
            },
            {
                type: 'input',
                message: questions[6],
                name: 'ghName',
                validate (input) {
                    return !!input.trim() || 'Please enter at least one non-whitespace character.'
                }
            },
            {
                type: 'input',
                message: questions[7],
                name: 'email',
                validate (input) {
                    return !!input.trim() || 'Please enter at least one non-whitespace character.'
                }
            },
            {
                type: 'list',
                message: questions[8],
                name: 'license',
                choices: ['MIT', 'Apache', 'Helicopter']
            },
        ])
        .then( response => {
            console.log(response.title);
            console.log(generateMarkdown(response));
        })
}

// Function call to initialize app
init();
