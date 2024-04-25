#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";

await figlet("Welcome To My BANK", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

let myBalance: any = 10000;
await console.log(
  `${chalk.green(`\n YOUR CURRENT BALANCE IS  '${myBalance}' \n`)}`
);
let myPin = 1122;

let PinAns = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: chalk.whiteBright("Enter Your Pin"),
  },
]);
if (PinAns.pin != myPin) {
  console.log(chalk.red("Wrong Pin"));
} else if (PinAns.pin == myPin) {
  while (true) {
    let method = await inquirer.prompt([
      {
        name: "method",
        type: "list",
        message: chalk.black("Select Your Method"),
        choices: ["Deposit", "Withdraw", "Check Balance", "Fast Cash", "Quit"],
      },
    ]);

    if (method.method === "Deposit") {
      let addMoney = await inquirer.prompt([
        {
          name: "add",
          type: "number",
          message: chalk.black("How much do you want to deposit?"),
        },
      ]);
      myBalance += addMoney.add;
      console.log(chalk.blue(`Now Your Current Balance Is ${myBalance}\n`));
    }

    if (method.method === "Withdraw") {
      let withdrawl = await inquirer.prompt([
        {
          name: "draw",
          type: "number",
          message: chalk.black("How Much Do You Want To Withdrwal?"),
        },
      ]);
      if (myBalance >= withdrawl.draw) {
        myBalance -= withdrawl.draw;
        console.log(chalk.blue(`Now Your Current Balance Is ${myBalance}\n`));
      } else {
        console.log(chalk.red("insufficient funds"));
      }
    }

    if (method.method === "Check Balance") {
      console.log(chalk.blue(`'Your Current Balance is ${myBalance}\n`));
    }

    if (method.method === "Fast Cash") {
      let Fast = await inquirer.prompt([
        {
          name: "cash",
          type: "list",
          message: chalk.black("choose how much do you want to get?\n"),
          choices: [1000, 2000, 5000, 7000],
        },
      ]);
      if (Fast.cash === 1000) {
        myBalance -= Fast.cash;

        console.log(chalk.blue(`now your balance is ${myBalance}\n`));
      } else if (Fast.cash === 2000) {
        myBalance -= Fast.cash;

        console.log(chalk.blue(`now your balance is ${myBalance}\n`));
      } else if (Fast.cash === 5000) {
        myBalance -= Fast.cash;

        console.log(chalk.blue(`now your balance is ${myBalance}\n`));
      } else if (Fast.cash === 7000) {
        myBalance -= Fast.cash;

        console.log(chalk.blue(`now your balance is ${myBalance}\n`));
      }
    }

    if (method.method === "Quit") {
      console.log(chalk.green("byee byee"));

      process.exit();
    }
  }
}
