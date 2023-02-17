import inquirer from 'inquirer';
import fs from "fs/promises"

let { first_name, Github, LinkedIn, license } = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'first_name',
            message: "What's your first name",
        },
        {
            type: 'list',
            name: 'license',
            message: "What's your license",
            choices: ["MIT", "BOOST"]

        },


    ])

let README =`
# Csaba's Portfolio

## License
${generateLicense(license)}

## Other
`

await fs.writeFile("README.md", README)



function generateLicense(license) {
    if (license === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    if (license === "BOOST") {
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    }
}
