#!/usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"


console.log(chalk.italic.greenBright("Welcome to Currency Convertor"))
let Convertion = {
    "PKR": {
      "USD": 0.004434589800443458980044345898,
      "GBP": 0.0037,
      "PKR": 1
    },
    "GBP": {
      "USD": 1.21,
      "PKR": 271.79,
      "GBP": 1
    },
    "USD": {
      "PKR": 225.50,
      "GBP": 0.83,
      "USD": 1
    }
  }

  const answer: {
    from: "PKR"| "USD" | "GBP",
    to: "PKR"| "USD" | "GBP",
    amount: number
  } = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: (chalk.blue("Select your currency: "))
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: (chalk.blue("Select your convertion currency: "))
    },
    {
        type: "number",
        name: "amount",
        message: (chalk.magenta("Enter your convertion amount: "))
    }
  ]);

  const {from, to, amount} = answer;

  if(from && to && amount) {
    let result = Convertion[from][to] * amount;
    console.log(chalk.yellowBright(`Your convertion from ${from} to ${to} is ${result}`))
  } else {
    console.log(chalk.red("Invalid inputs"))
  }