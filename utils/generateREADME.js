const generateREADME = answers => {

    ` 
    # ${answers.title}
    
    #### Table of Contents
    ## Project Description
    * ${answers.description}
    ## Installation Instructions
    * ${answers.installation}
    ## Usage Information
    * ${answers.usage}
    ## Test Instructions
    * ${answers.tests}
    ## License
    * licensed under the ${answers.license}
        `
    
    }
    
module.exports = generateREADME;
