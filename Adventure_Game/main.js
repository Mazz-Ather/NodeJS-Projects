#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let main = await inquirer.prompt([
    {
        type: "list",
        name: "hero",
        message: "Choose a hero",
        choices: ["Batman", "Superman"],
    },
    {
        type: "list",
        name: "villain",
        message: "choose your opponent",
        choices: ["Assasins", "Robot"],
    },
]);
console.log("**************************************************************");
console.log(`So It's ${chalk.green(main.hero)} VS ${chalk.red(main.villain)}`);
console.log("**************************************************************");
//! 1st hero & 1st villain selected
if (main.hero === "Batman") {
    if (main.villain === "Assasins") {
        //! hero batman
        //! villain assasins
        let batmanfuel = 100;
        let villainFuel = 100;
        let vs = await inquirer.prompt([
            {
                type: "list",
                name: "weapon",
                message: chalk.black(`what do you wanna do ?`),
                choices: ["Attack", "Give up"],
            },
        ]);
        if (vs.weapon === "Attack") {
            console.log(chalk.green(main.hero) +
                "'s  used Batarang and hit the " +
                chalk.red(main.villain));
            console.log(chalk.red(main.villain) +
                `'s fuel remaining ${chalk.bgRed((villainFuel -= 50))}`);
            console.log(chalk.red(main.villain) +
                `'s also hit you , ${chalk.green(main.hero)}'s remaining fuel is ${chalk.bgGreen((batmanfuel -= 30))}`);
            let again = await inquirer.prompt([
                {
                    type: "list",
                    name: "weapon",
                    message: chalk.black("what do you wanna do"),
                    choices: ["Attack", "Take Aid"],
                },
            ]);
            if (again.weapon === "Attack") {
                villainFuel -= 50;
                if (villainFuel <= 0) {
                    console.log(chalk.green(main.hero) +
                        " used Batarang Again and hit the " +
                        chalk.red(main.villain));
                    console.log(`${chalk.red(main.villain)}'s fuel remaining is ${chalk.bgGreen((batmanfuel = 100))}`);
                    console.log("Congratulation " + chalk.green(main.hero) + " won!");
                    process.exit();
                }
            }
            else if (again.weapon === "Take Aid") {
                batmanfuel = 100;
                console.log(`${chalk.green(main.hero)}'s fuel now is ${chalk.bgGreen((batmanfuel = 100))}`);
                let secondAgain = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "weapon",
                        message: " do you wanna Attack again",
                    },
                ]);
                if ((secondAgain.weapon === "y", "Y", "YES", "yes")) {
                    villainFuel -= 50;
                    if (villainFuel <= 0) {
                        console.log(main.hero +
                            " used Batarang Again and hit the " +
                            chalk.red(main.villain));
                        console.log(`${chalk.red(main.villain)}'s fuel remaining is ${chalk.red("0")}`);
                        console.log("Congratulation " + chalk.green(main.hero) + " won!");
                        process.exit();
                    }
                }
            }
        }
        else if (vs.weapon === "Give up") {
            console.log(chalk.red("You Lost"));
            process.exit();
        }
        //! Batman win
        //!=======================================
        //!2nd villain
    }
    else if (main.villain === "Robot") {
        console.log(chalk.red("Friendly Disclaimer: As a Batman you cannot fight with Robot"));
        //! hero batman
        let herofuel = 100;
        let villainFuel = 100;
        let vs = await inquirer.prompt([
            {
                type: "list",
                name: "weapon",
                message: chalk.black(`what do you wanna do ?`),
                choices: ["Attack", "Give up"],
            },
        ]);
        //! villain robot
        if (vs.weapon === "Attack") {
            console.log(chalk.green(main.hero) +
                "'s  used Batarang and hit the " +
                chalk.red(main.villain));
            console.log(main.villain + `'s fuel remaining ${chalk.bgRed((villainFuel -= 10))}`);
            console.log(chalk.red(main.villain) +
                `'s also hit you , ${chalk.green(main.hero)}'s remaining fuel is ${chalk.bgGreen((herofuel -= 98))}`);
            let again = await inquirer.prompt([
                {
                    type: "list",
                    name: "weapon",
                    message: chalk.black("what do you wanna do"),
                    choices: ["Attack", "Take Aid"],
                },
            ]);
            if (again.weapon === "Attack") {
                villainFuel -= 10;
                console.log(chalk.green(main.hero) +
                    " used Batarang Again and hit the " +
                    chalk.red(main.villain));
                console.log(`${chalk.red(main.villain)}'s fuel remaining is ${chalk.bgRed("80")}`);
                console.log(chalk.green(main.hero) + "'s fuel is " + chalk.bgGreen("0"));
                console.log(chalk.green(main.hero) + chalk.red(" lost!"));
                process.exit();
                // }
            }
            else if (again.weapon === "Take Aid") {
                herofuel = 100;
                console.log(`${chalk.green(main.hero)}'s fuel now is ${chalk.bgGreen((herofuel = 100))}`);
                let secondAgain = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "weapon",
                        message: chalk.black(" do you wanna Attack again"),
                    },
                ]);
                if ((secondAgain.weapon === "y", "Y", "YES", "yes")) {
                    console.log(chalk.green(main.hero) +
                        " used Batarang Again and hit the " +
                        chalk.red(main.villain));
                    console.log(`${chalk.red(main.villain)}'s fuel remaining is ${chalk.red("70")}`);
                    console.log(chalk.green(main.hero) + "'s fuel is" + chalk.bgGreen(0));
                    console.log(chalk.green(main.hero) + chalk.red(" lost!"));
                    process.exit();
                }
            }
        }
    }
}
//~````````````````````````````````````````````````````````````````````````````
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//?????=========================================================================
//todo ========================================================================
//*================================================================================
if (main.hero === "Superman") {
    if (main.villain === "Assasins") {
        //! hero superman
        let supfuel = 100;
        let villainFuel = 100;
        let vs = await inquirer.prompt([
            {
                type: "list",
                name: "weapon",
                message: chalk.black(`what do you wanna do ?`),
                choices: ["Attack", "Give up"],
            },
        ]);
        //! villain assasins
        if (vs.weapon === "Attack") {
            console.log(chalk.green(main.hero) +
                "'s  used Batarang and hit the " +
                chalk.red(main.villain));
            console.log(chalk.red(main.villain) +
                `'s fuel remaining ${chalk.bgRed((villainFuel -= 50))}`);
            console.log(chalk.red(main.villain) +
                `'s also hit you , ${chalk.green(main.hero)}'s remaining fuel is ${chalk.bgGreen((supfuel -= 30))}`);
            let again = await inquirer.prompt([
                {
                    type: "list",
                    name: "weapon",
                    message: chalk.black("what do you wanna do"),
                    choices: ["Attack", "Take Aid"],
                },
            ]);
            if (again.weapon === "Attack") {
                villainFuel -= 50;
                if (villainFuel <= 0) {
                    console.log(chalk.green(main.hero) +
                        " used Batarang Again and hit the " +
                        chalk.red(main.villain));
                    console.log(`${chalk.red(main.villain)}'s fuel remaining is ${chalk.bgRed("0")}`);
                    console.log("Congratulation " + chalk.green(main.hero) + " won!");
                    process.exit();
                }
            }
            else if (again.weapon === "Take Aid") {
                supfuel = 100;
                console.log(`${chalk.green(main.hero)}'s fuel now is ${chalk.bgGreen((supfuel = 100))}`);
                let secondAgain = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "weapon",
                        message: " do you wanna Attack again",
                    },
                ]);
                if ((secondAgain.weapon === "y", "Y", "YES", "yes")) {
                    villainFuel -= 50;
                    if (villainFuel <= 0) {
                        console.log(main.hero +
                            " used Batarang Again and hit the " +
                            chalk.red(main.villain));
                        console.log(`${chalk.red(main.villain)}'s fuel remaining is ${chalk.red("0")}`);
                        console.log("Congratulation " + chalk.green(main.hero) + " won!");
                        process.exit();
                    }
                }
            }
        }
        else if (vs.weapon === "Give up") {
            console.log(chalk.red("You Lost"));
            process.exit();
        }
        //! superman win
        //!=======================================
        //!2nd villain
    }
    else if (main.villain === "Robot") {
        console.log(chalk.blue(":Yeahh!! As a Superman you can fight with Robot"));
        //! hero superman
        let herofuel = 100;
        let villainFuel = 100;
        let vs = await inquirer.prompt([
            {
                type: "list",
                name: "weapon",
                message: chalk.black(`what do you wanna do ?`),
                choices: ["Attack", "Give up"],
            },
        ]);
        //! villain robot
        if (vs.weapon === "Attack") {
            console.log(chalk.green(main.hero) +
                "'s  used Laser Light and hit the " +
                chalk.red(main.villain));
            console.log(main.villain + `'s fuel remaining ${chalk.bgRed("10")}`);
            console.log(chalk.red(main.villain) +
                `'s also hit you , ${chalk.green(main.hero)}'s remaining fuel is ${chalk.bgGreen("90")}`);
            let again = await inquirer.prompt([
                {
                    type: "list",
                    name: "weapon",
                    message: chalk.black("what do you wanna do"),
                    choices: ["Attack", "Take Aid"],
                },
            ]);
            if (again.weapon === "Attack") {
                console.log(chalk.green(main.hero) +
                    " used Laser Light Again and hit the " +
                    chalk.red(main.villain));
                console.log(`${chalk.red(main.villain)}'s fuel remaining is ${chalk.bgRed("0")}`);
                console.log(chalk.green(main.hero) + "'s fuel is " + chalk.bgGreen(" 90"));
                console.log("Congratulations " + chalk.green(main.hero) + chalk.red(" you Win!"));
                process.exit();
                // }
            }
            else if (vs.weapon === "Give up") {
                console.log(chalk.red("You Lost"));
                process.exit();
            }
            else if (again.weapon === "Take Aid") {
                herofuel = 100;
                console.log(`${chalk.green(main.hero)}'s fuel now is ${chalk.bgGreen("100")}`);
                let secondAgain = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "weapon",
                        message: chalk.black(" do you wanna Attack again"),
                    },
                ]);
                if ((secondAgain.weapon === "y", "Y", "YES", "yes")) {
                    console.log(chalk.green(main.hero) +
                        " used Laser light Again and hit the " +
                        chalk.red(main.villain));
                    console.log(`${chalk.red(main.villain)}'s fuel remaining is ${chalk.red("0")}`);
                    console.log(chalk.green(main.hero) + "'s fuel is" + chalk.bgGreen("100"));
                    console.log("Congratulations" + chalk.green(main.hero) + chalk.green(" win!!!"));
                    process.exit();
                }
            }
        }
    }
}
