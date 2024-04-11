#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";

//? todo list

let todos: string[] = [];

await figlet("Todo List", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

async function main() {
  while (true) {
    const action = await inquirer.prompt([
      {
        name: "action",
        type: "list",
        message: chalk.green("What do you want to do?"),
        choices: ["Add a new task", "Delete a task", "List all tasks", "Quit"],
      },
    ]);
    if (action.action === "Add a new task") {
      const newTodo = await inquirer.prompt([
        {
          name: "task",
          type: "input",
          message: chalk.green("Enter the task"),
        },
      ]);
      todos.push(newTodo.task);
      console.table(todos);
    } else if (action.action === "Delete a task") {
      if (todos.length === 0) {
        console.log(chalk.red("no task to be deleted"));
      } else {
        const dlt = await inquirer.prompt([
          {
            name: "index",
            type: "input",
            message: "Enter the index of the task to delete",
            validate: (value) => {
              if (isNaN(value) || value < 0 || value >= todos.length) {
                return (
                  "Invalid index , Enter the input between 0 to" +
                  "" +
                  (todos.length - 1)
                );
              }
              return true;
            },
          },
        ]);
        todos.splice(dlt.index, 1);
        console.log("Task has been deleted ");
        console.table(todos);
      }
    } else if (action.action === "List all tasks") {
      if (todos.length === 0) {
        console.log(chalk.red("no todos found to list"));
      } else {
        console.log("Your Tasks are as follows :");
        console.table(todos);
        process.exit();
      }
    } else if (action.action === "Quit") {
      process.exit();
    }
  }
}
main();
