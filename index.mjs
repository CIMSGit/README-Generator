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

    let README =  `# Csaba's Portfolio

    ## Description 
    
    A ${first_name} of work,showcasing my skills and talent.
    
    Using :YYY, YYY, YYY YYY, and YYY variables. You'll get to see my new skills. 
    <hr>
    
    
    ## Resources:
    
    YYYYYYYYY
    <hr>
    
    ## Installation
    YYYYYYYYY 
    <hr>
    
    YYYYYYYYY
    
    ## Deployed project
    YYYYYYYYYYYY <hr>
    
    ### Credits
    N/A
    <hr>
    
    ### License
    
    [MIT LICENSE](./LICENSE)`
  
      await fs.writeFile("README.md", README)
  
      console.log("success!")
