#! /usr/bin/env node
// Printing a wellcome massege
console.log("\n\Wellcome To '\Sabter Raza Qadri\' Simple Calculator\n");
import inquirer from "inquirer";
// Asking Questions From User Through Inquirer
let answer = await inquirer.prompt([
    { massege: "Enter Your First Number", type: "number", name: "FirstNumber" },
    { messege: "Enter Your Second Number", type: "number", name: "SecondNumber" },
    {
        messege: "Select One Operator To Perform Operations", type: "list", name: "Operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    }
]);
if (answer.Operator === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.Operator === "Substraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.Operator === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.Operator === "Division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    'Invalid Input';
}
