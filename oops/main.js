#! /usr/bin/env node
import inquirer from "inquirer";
class person {
    personality = "mystery";
    name;
    constructor(personality) {
        this.personality = personality == 1 ? "introvert" : "extrovert";
    }
}
class student extends person {
    name;
    constructor(name, personality) {
        super(personality);
        this.name = name;
    }
}
async function main() {
    const ans = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
        },
        {
            type: "number",
            name: "number",
            message: "Type 1 or 2 ",
        },
    ]);
    let name = ans.name;
    let number = ans.number;
    let Student = new student(name, number);
    console.log(`your name is ${Student.name} , and your personality is ${Student.personality}`);
}
main();
