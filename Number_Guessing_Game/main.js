#! /usr/bin/env node
//? computer guess random number
import inquirer from "inquirer";
import figlet from "figlet";
import chalk from "chalk";
await figlet("Guess A Number", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});
async function start() {
    const answer = await inquirer.prompt({
        type: "input",
        name: "userInput",
        message: chalk.blue("Input a Number between 1 to 5:"),
    });
    let secretNumber = Math.floor(Math.random() * 5);
    const { userInput } = answer;
    while (true) {
        if (userInput == secretNumber) {
            console.log("**************************************************************");
            console.log(`Computer Choose ${chalk.yellow(secretNumber)} And You Also Choose ${chalk.bgBlue(userInput)},\n${chalk.green("Congratulations! You Win")}`);
            console.log("**************************************************************");
            break;
        }
        else if (userInput != secretNumber) {
            console.log(`Computer Choose ${chalk.yellow(secretNumber)} and you choose ${chalk.bgRed(userInput)}, ${chalk.red("You Guessed Wrong")},\n${chalk.red("*******************Try Again**********************")}`);
            await start();
            break;
        }
    }
}
start();
