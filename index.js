//packages
const inquirer = require('inquirer')
const fs = require('fs')


//const README = generatePage(questions)

//const pageTemplate = require('./develop/pageTemplate')

//question prompt function
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'plese enter your github username',
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
            message: 'please enter your email address',
            validate: userEmail => {
                if (userEmail) {return true}
                else {
                    console.log('enter your email address')
                }
            }
        },
        {
            type: 'input',
            name: 'project',
            message: 'what is the name of your project? (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('please give a name to your project (required')
                }   return false
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'give your project a good description! (required) \nhere are some questions to help: \nWhat was your motivation? \nWhy did you build this project? \nWhat problem does it solve? \nWhat did you learn?\n',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true
                } else {
                    console.log('say something nice about your project')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'thoroughly explain the installation process of your project',
            validate: installationInput => {
                if (installationInput) {
                    return true
                } else {
                    console.log('explain how to install your project step-by-step')
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'provide instructions for use' (required),
            validate: usageInput => {
                if (usageInput) {
                    return true
                } else {
                    console.log('explain how to use your application')
                }
            }
        },
        {
            type: 'confirm',
            name: 'tests',
            message: 'provide examples for how to run tests for your application (if any - if no tests, just press enter',
            default: false
        },
        //checkbox for license(s)
        {
            type: 'checkbox',
            name: 'license',
            message: 'choose the license you are using for the project (required)',
            choices: ['Apache 2.0', 'GNU General Public v3.0', 'MIT', 'BSD 2-Clause Simplified', 'BSD 3-Clause New/Revised', 'Boost Software', 'Creative Commons Zero v1.0 Universal', 'Eclipse License', 'GNU Affero General Public v3.0', 'GNU General Public v2.0', 'GNU Lesser General Public v2.1', 'none'],
            validate: choices => {
                if (choices) {
                    return true
                } else {
                    console.log('please choose a license or indicate there is none')
                    return false
                }
            }
        },
    ])
    .then(answers => {
        const readme = generateREADME(answers)

        fs.writeFile('README.md',readme , err => {
        err ? console.log(err) : console.log('Success!')
       })
    })
}

questions().then(answers => console.log(answers))

// TODO: Create a function to write README file
// fs.writeFile('./README.md', README, err => {

//     if (err) throw new Error(err)

//     console.log('portfolio complete... check out README.md to see the output')
// })

// const writeToFile = (fileName, data) => {

// }

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
