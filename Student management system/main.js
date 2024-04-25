#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
//? Function to display the welcome message
await figlet("Student Management", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});
async function allStu() {
    let feesStu = [];
    let allStudents = [];
    while (true) {
        const main = await inquirer.prompt([
            {
                type: "list",
                name: "students",
                message: chalk.green("What would you like to do?"),
                choices: [
                    "Add a student",
                    "View all students",
                    "Search for a student",
                    "Remove A Student",
                    "Pay Fees of a student",
                    "Give ID to All students",
                    "Enroll in a course",
                    "Exit",
                ],
            },
        ]);
        if (main.students === "Add a student") {
            // let a =0;
            let add = await inquirer.prompt([
                {
                    type: "input",
                    name: "students",
                    message: chalk.black("Enter a student name you want to added"),
                },
            ]);
            console.log(chalk.cyanBright("Added Successfully"));
            allStudents.push(add.students);
            //  a++;
            //  let y = add.students
            console.table([allStudents]);
            //?
        }
        else if (main.students === "View all students") {
            if (allStudents === 0) {
                console.log("No Student Added Yet!");
            }
            else {
                console.log(`${chalk.blue("Total Students : ")} ${chalk.blueBright(allStudents.length)}`);
                console.table([allStudents]);
                break;
            }
            //?
        }
        else if (main.students === "Search for a student") {
            const searchStu = await inquirer.prompt([
                {
                    name: "search",
                    type: "input",
                    message: "Enter The Name of The Student You Are Looking For Or Part Of The Name",
                },
            ]);
            const filteredStu = allStudents.filter((student) => student.includes(searchStu.search));
            if (filteredStu.length === 0) {
                console.log(chalk.cyan("No matching student found."));
            }
            else {
                console.log(chalk.cyan(`The Student You Are Looking For Is ${chalk.bgCyan(filteredStu[0])}`));
            }
        }
        //?
        else if (main.students === "Remove A Student") {
            const removeStu = await inquirer.prompt([
                {
                    name: "remove",
                    type: "input",
                    message: "Enter the name of the student you want to remove",
                },
            ]);
            if (allStudents < 0) {
                console.log(chalk.red("No Students In Database"));
            }
            else {
                allStudents.splice(removeStu.index, 1);
                console.log(`Successfully Deleted ${chalk.red(`${removeStu.remove}`)}`);
                console.table([allStudents]);
            }
        }
        //?
        else if (main.students === "Pay Fees of a student") {
            const payFees = await inquirer.prompt([
                {
                    name: "fees",
                    type: "input",
                    message: "Enter Student Name To Pay Their Fees : ",
                },
            ]);
            allStudents.find((student) => student.names === payFees.fees);
            if (allStudents < 0) {
                console.log(chalk.red("Student Does Not Exist"));
                console.log(chalk.blue("Please Enter Valid Student Name"));
            }
            else {
                let randomFee = Math.floor(Math.random() * 50000);
                console.log(chalk.cyan(`Fee Of ${payFees.fees} Is ${randomFee}`));
                feesStu.push(randomFee.toFixed());
                //! how much do you want to pay
                const pay = await inquirer.prompt([
                    {
                        name: "amount",
                        type: "number",
                        message: `How Much Do You Want To Pay For ${payFees.fees}'s Fees ?`,
                    },
                ]);
                if (pay.amount == isNaN) {
                    console.log(chalk.red("invalid"));
                }
                else {
                    console.log(chalk.blue("paying.......   succesfully"));
                    let paid = randomFee - pay.amount;
                    console.log(`remaining fee is ${paid}`);
                }
            }
        }
        else if (main.students === "Give ID to All students") {
            if (allStudents < 0) {
                console.log("No Student in the system");
            }
            else {
                allStudents.forEach((student) => {
                    let roll = Math.floor(Math.random() * 100);
                    console.log(`giving id to ${student} 00${roll}`);
                });
            }
        }
        else if (main.students === "Enroll in a course") {
            if (allStudents < 0) {
                console.log("No Student in the system");
            }
            else {
                let course = [
                    "Software Engineering",
                    "React Native Developer",
                    "Javascript Developer",
                    "Web 3.0 Developer",
                    "A.I Developer",
                    "Metaverse Developer",
                    "Frontend Developer",
                    "Backend Developer",
                    "Cyber Security",
                ];
                allStudents.forEach((student) => {
                    let randomC = Math.floor(Math.random() * course.length);
                    let k = course[randomC];
                    console.log(`${student} Enrolled in a ${k}`);
                });
            }
        }
        if (main.students === "Exit") {
            break;
            //     }
            //   }
            // }
        }
    }
}
allStu();
