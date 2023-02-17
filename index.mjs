import inquirer from 'inquirer';
import fs from "fs/promises"

let { title, description, installation, usage, contributing, tests, license } = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: "What's the project title?",
        },
        {
            type: 'input',
            name: 'description',
            message: "What's the description?",
        }, {
            type: 'input',
            name: 'installation',
            message: "Any installation required?",
        }, {
            type: 'input',
            name: 'usage',
            message: "The usage of the project?",
        },
        {
            type: 'input',
            name: 'contributing',
            message: "What contributions are included?",
        },
        {
            type: 'input',
            name: 'test',
            message: "Any tests run?",
        },
        {
            type: 'list',
            name: 'license',
            message: "What's your license",
            choices: ["MIT", "BOOST", "Apache 2.0", "Other"]

        },


    ])

let README = `
# ${title}

## Description
${description}
## Installation
${installation}
## Usage
${usage}
## Contributions
${contributing}

## Tests
${tests}
###### ${generateLicense(license)}
`

await fs.writeFile("README.md", README)



function generateLicense(license) {
    if (license === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    if (license === "BOOST") {
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    }
    if (license === "Apache 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    

}

