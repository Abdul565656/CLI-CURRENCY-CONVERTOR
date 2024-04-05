#!/usr/bin/env node

import inquirer from "inquirer"

const currency:any = {
    USD : 1,
    EUR : 0.91,
    INR : 74.57,
    PKR : 280,
    GBP : 0.76,

}


let UserAnswer = await inquirer.prompt([
    {
    name: "from",
    message: "enter from currency",
    type: "list",
    choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "to",
        message: "enter your currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR','PKR']

        },
        {
            name: "amount",
            message: "enter your amount",
            type: "number",
           
            }
])

let fromAmount = currency[UserAnswer.from];
let toAmount = currency[UserAnswer.to];
let amount = UserAnswer.amount
let baseAmount = amount / fromAmount

let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);