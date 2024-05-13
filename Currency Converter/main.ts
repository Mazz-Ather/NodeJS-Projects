#! /usr/bin/env node

import inquirer from "inquirer";

const currencies: any = {
  USD: 1,
  PKR: 277.58,
  GBP: 0.79,
  EUR: 0.93,
};

const main: any = await inquirer.prompt([
  {
    type: "list",
    name: "from",
    message: "What is the currency you want to convert FROM?",
    choices: Object.keys(currencies),
  },
  { 
    type: "list",
    name: "to",
    message: "What is the currency you want to convert TO?",
    choices: Object.keys(currencies),
  },
  {
    type: "number",
    name: "amount",
    message: "Enter Your Amount",
  },
]);

let fromAmount = currencies[main.from];
let toAmount = currencies[main.to];
let amount = main.amount;
let baseAmount = fromAmount / amount;
let ConvertedAmount = baseAmount * toAmount;

Math.floor(ConvertedAmount);
console.log(ConvertedAmount);
