import inquirer from 'inquirer';
import fs from "fs/promises"

let {first_name, last_name, Github, LinkedIn} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'first_name',
            message: "What's your first name",
        },
        {
            type: 'input',
            name: 'last_name',
            message: "What's your last name",
            
        },
        {
            type: 'input',
            name: 'Github',
            message: "What's your GitHub name?",
        },
        {
            type: 'input',
            name: 'LinkedIn',
            message: "What's your LinkedIn link?",
        },
       
    ])

    
