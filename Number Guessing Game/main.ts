#! /usr/bin/env node
//? computer guess random number
import inquirer from "inquirer";
import chalk from "chalk";
type ansType = {
  userInput: number;
};
async function start() {
  const answer: ansType = await inquirer.prompt({
    type: "input",
    name: "userInput",
    message: "Input a number between  1 to 10:",
  });

  let secretNumber = Math.floor(Math.random() * 10);

  //? add the user number in a new variable

  const { userInput } = answer;
  let user = 0;
  let computer = 0;
  if (userInput == secretNumber) {
    let res = user + 1;
    console.log(
      `computer choose ${chalk.blue(
        secretNumber
      )} and you choose ${userInput} , ${chalk.green("Yahooo You Win")}`
    );
    console.log(`user score is ${res}`);
  } else {
    console.log(
      `the computer choose ${chalk.blue(
        secretNumber
      )} and you choose ${userInput},${chalk.red(
        "you guessed wrong"
      )}  ,${chalk.green("better luck next time")}`
    );
    let re = computer + 1;

    console.log(`computer score is ${re}`);
  }
}
async function startAgain() {
  await start();
  var again = await inquirer.prompt({
    type: "input",
    name: "restart",
    message: "Do You Want To continue ? IF Yes Press Y",
  });

  if (
    again.restart === "y" ||
    again.restart === "Y" ||
    again.restart === "yes" ||
    again.restart === "YES"
  ) {
    console.log(chalk.greenBright("continueing..."));
    start();
  }
}
startAgain();
