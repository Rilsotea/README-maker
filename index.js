// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',

    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.',

    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'What should be included in the Table of Contents?',

    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'What is the installation process of your project?',

    },
    {
        type: 'input',
        name: 'usage',
        message: 'How would a user use this application?',

    },
    {
        type: 'input',
        name: 'license',
        message: 'Which license will your project be using?',

    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the guidelines to contribute to the project?',

    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do users run tests for the application?',

    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub Username?',

    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address for questions?',

    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data.trim(), (err) => {



        if (err) {
            console.error('Error writing to file', err);
        } else {
            console.log('README.md has been created successfully.');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const content = generateMarkdown(answers);

        writeToFile('README.md', content);

    });
}

// Function call to initialize app
init();