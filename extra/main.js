import inquirer from "inquirer";
async function allStu() {
    let Students = [];
    while (true) {
        const main = await inquirer.prompt([
            {
                type: "list",
                name: "students",
                message: "What would you like to do?",
                choices: [
                    "Add a student",
                    "Exit",
                ],
            },
        ]);
        if (main.students === "Add a student") {
            let add = await inquirer.prompt([
                {
                    type: "input",
                    name: "students",
                    message: "Enter a student name you want to add",
                },
            ]);
            const newStu = { name: add.students };
            Students.push(newStu);
            console.log("Student added:");
            console.table([newStu]);
            const check = await inquirer.prompt({
                name: "check",
                type: "confirm",
                message: "Do you wish to continue adding more students?",
            });
            if (check.check === true) {
                const newStu = { name: add.students };
                Students.push(newStu);
            }
        }
        if (main.students === "Exit") {
            break;
        }
    }
}
allStu();
