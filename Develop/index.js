// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
//const pageTemplate = require('./develop/pageTemplate')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'provide your github username',
            validate: userInput => {
                if (userInput) {return true}
                else {
                    console.log('enter your github username')
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'provide you email address',
            validate: userEmail => {
                if (userEmail) {return true}
                else {
                    console.log('enter your email address')
                }
            }
        },
    ])
}

questions().then(answers => console.log(answers))

// TODO: Create a function to write README file
fs.writeFile('./README.md', generatePage(), err => {

    if (err) throw new Error(err)

    console.log('portfolio complete... check out README.md to see the output')
})

const writeToFile = (fileName, data) => {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
