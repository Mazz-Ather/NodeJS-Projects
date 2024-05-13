#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import chalkAnimation from "chalk-animation";


let rainbow = chalkAnimation.rainbow("Welcome To My Calculator");
rainbow.start();

console.log(
  chalk.green(`_____________________
|  _________________  |
| |      MAZZ       | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|`)
);

await figlet("Developed By Mazz", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

async function start() {
  const answer: {
    number1: number;
    number2: number;
    operator: string;
  } = await inquirer.prompt([
    {
      type: "number",
      name: "number1",
      message: chalk.whiteBright("Enter Your First Number"),
    },
    {
      type: "number",
      name: "number2",
      message: chalk.whiteBright("Enter Your Second Number"),
    },
    {
      type: "list",
      name: "operator",
      message: chalk.yellow("Select Any One Operator"),
      choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
  ]);

  const { number1, number2, operator } = answer;

  if (number1 && number2 && operator) {
    if (operator === "Addition") {
      console.log(
        chalk.blue(`The Result Of ${number1} + ${number2} = `) +
          chalk.green(number1 + number2)
      );
    } else if (operator === "Subtraction") {
      console.log(
        chalk.blue(`The Result Of ${number1} - ${number2} = `),
        chalk.green(number1 - number2)
      );
    } else if (operator === "Multiplication") {
      console.log(
        chalk.blue(`The Result Of ${number1} * ${number2} = `),
        chalk.green(number1 * number2)
      );
    } else if (operator === "Division") {
      console.log(
        chalk.blue(`The Result Of ${number1} / ${number2} = `),
        chalk.green(number1 / number2)
      );
    }
  } else {
    console.log(chalk.red("Please Select Valid Operator"));
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
    console.log(chalk.greenBright("Enjoy Calculation..."));
    start();
  }
}

startAgain();
