#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"

let score =0 ;
let username = await inquirer.prompt([{
    name: "Name",
    type: "input",
    message: chalk.black("What is your name?"),
}])
console.log(`welcome to Typescript quiz ${chalk.green(username.Name)}`)
let q1:any = await inquirer.prompt([{
    name: "q1",
    type: "list",
    message: chalk.blue("1. Which of the following is a benefit of using TypeScript over JavaScript?"),
    choices:["a) Improved performance at runtime",
    "b) Increased security vulnerabilities",
    "c) No need for additional transpilation step",
    "d) Static type checking"],//*d
    
},
])

if(q1.q1 === "d) Static type checking"){
    score++
    console.log(chalk.green("Correct!"));
    console.log(`your score is ${chalk.green(score)}`);
    
}else{
    console.log(chalk.red(`True answer is ${chalk.bgRed("d) Static type checking")}`));
    console.log(`your score is ${chalk.red(score)}`);
}


let q2 = await inquirer.prompt({
    
    name: "q2",
    type: "list",
    message: chalk.blue("2. How do you declare a variable with a string type in TypeScript?"),
   choices:[`a) var name: string - "John"`, 
   `b) let name:string = "John"`,
   `c) string name = "John"`,
   
   '(d) const name: "John"'],//*b
},)   
if(q2.q2 === `b) let name:string = "John"`){
    score++
    console.log(chalk.green("Correct!"));
    console.log(`your score is ${chalk.green(score)}`);
    
}else{
    console.log(chalk.red(`True answer is ${chalk.bgRed(`b) let name:string = "John"`)}`));
    console.log(`your score is ${chalk.red(score)}`);
}

    let q3 = await inquirer.prompt(  {
        name: "q3",
        type: "list",
        message: chalk.blue("3. What is the syntax for defining a function that takes two numbers as arguments and returns their sum in TypeScript?"),
       choices:[`(a) function sum(x, y) { return x + y; }`, 
       `b) const sum(x: number, y: number): number { return x + y; }`,
       `c) let sum = (x, y) => { return x + y; }`,
       `d) All of the above`],//*d
},       
)

if(q3.q3 === `d) All of the above`){
    score++
    console.log(chalk.green("Correct!"));
    console.log(`your score is ${chalk.green(score)}`);
    
}else{
    console.log(chalk.red(`True answer is ${chalk.bgRed(`d) All of the above`)}`));
    console.log(`your score is ${chalk.red(score)}`);
}
  let q4 = await inquirer.prompt(
    {
        name: "q4",
        type: "list",
        message: chalk.blue("4. Which of these is NOT a valid data type in TypeScript?"),
       choices:[`a) boolean`, 
       `b) object`,
       `c) float`,
       `d) enum`],//*c
    },)   

    if(q4.q4 === `c) float`){
        score++
        console.log(chalk.green("Correct!"));
        console.log(`your score is ${chalk.green(score)}`);
        
    }else{
        console.log(chalk.red(`True answer is ${chalk.bgRed(`c) float`)}`));
        console.log(`your score is ${chalk.red(score)}`);
    }

    
let q5 = await inquirer.prompt(
    {
        name: "q5",
        type: "list",
        message: chalk.blue("5. What is JSX in TypeScript and what is its purpose?"),
       choices:[`a) A separate language for styling components`, 
       `b) A syntax extension for describing UI elements within code`,
       `c) A library for managing state in applications`,
       `d) A tool for unit testing TypeScript code`],//*b
    },   
    )
    if(q5.q5 === `b) A syntax extension for describing UI elements within code`){
        score++
        console.log(chalk.green("Correct!"));
        console.log(`your score is ${chalk.green(score)}`);
        
    }else{
        console.log(chalk.red(`True answer is ${chalk.bgRed(`b) A syntax extension for describing UI elements within code`)}`));
        console.log(`your score is ${chalk.red(score)}`);
    }
    



if(score === 5){
    console.log(`${chalk.green("Excellent performance!")}`)
    console.log(`${chalk.green("Your Final Score Is")} ${chalk.bgGreen(score)}`);

}else if(score === 4){
    console.log(`${chalk.green("Good performance!")}`)
    console.log(`${chalk.green("Your Final Score Is")} ${chalk.bgGreen(score)}`);

}else if(score === 3){
    console.log(`${chalk.green("Not A Bad performance!")}`)
    console.log(`${chalk.green("Your Final Score Is")} ${chalk.bgGreen(score)}`);

}else if(score === 2){
    console.log(`${chalk.green("Practice more , you will become better!")}`)
    console.log(`${chalk.red("Your Final Score Is")} ${chalk.bgRed(score)}`);

}else if(score === 1){
    console.log(`${chalk.green("atleast you guess one right option!")}`)
    console.log(`${chalk.red("Your Final Score Is")} ${chalk.bgRed(score)}`);

}else if(score === 0){
    console.log(`${chalk.green("Don't be sad! , atleast you tried")}`)
    console.log(`${chalk.red("Your Final Score Is")} ${chalk.bgRed(score)}`);
}