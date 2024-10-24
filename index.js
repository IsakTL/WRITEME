// Inquirer is used to get user input in this app.
import inquirer from "inquirer";

// TODO: Create an array of questions for user input
const questions = [
    `First, enter the name of your project:`,
    `Next, describe your project's purpose and capabilities:`,
    `How do you install your project?`,
    `How do you use it?`,
    `How, if at all, can others contribute?`,
    `What tests should be run, and what results are expected?`,
    `Tell me a bit about you for ##Questions. What's your GitHub username?`,
    `What's an email address at which a user can reach you?`,
    `Finally, select a license from this list:`
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.log(`Welcome to writeme, your easy README composer.`);
}

// Function call to initialize app
init();
