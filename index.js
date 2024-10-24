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

const nameArray = [
    `title`,
    `desc`,
    `inst`,
    `usage`,
    `contr`,
    `tests`,
    `ghName`,
    `email`,
    `license`
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile();
}

// Constructor for questions within getResponses
class Question {
    //validate is never read but this function doesn't work without it
    //How does this work?
    constructor(type='input', message, name, validate, choices) {
        this.type = type;
        this.message = message;
        this.name = name;
        this.validate = function validate(input) {
            return !!input.trim() || 'Please enter at least one non-whitespace character.'
        };
        this.choices = choices;
    }
}

function buildQuestions() {
    const formattedQuestions = [];
    for (let i = 0; i < questions.length; i++) {
        const
            type = i !== 8 ? 'input' : 'list',
            name = nameArray[i],
            message = questions[i],
            validate = i !== 8,
            choices = i !== 8 ? false: ['MIT', 'GNU', 'Apache'];
        formattedQuestions.push(new Question(type, message, name, validate, choices));
    }
    return formattedQuestions;
}


// Prompts the user for each question in allQuestions and returns the generated text plain, as well as generating the file.
function getResponses() {
    const allQuestions = buildQuestions();
    inquirer
        .prompt(
            allQuestions
        )
        .then(response => {
            console.log(generateMarkdown(response));
        })
}


// init initializes the app on call.
function init() {
    console.log(`Welcome to WRITEME, your easy README composer.`);
    getResponses();
}

init();
