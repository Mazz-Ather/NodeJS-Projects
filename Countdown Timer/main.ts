#! /usr/bin/env node
import inquirer from "inquirer";

async function main() {
  const { year, month, day, hour, minute, second } = await inquirer.prompt([
    {
      type: "number",
      name: "year",
      message: "Enter the year you want to countdown to:",
    },
    {
      type: "number",
      name: "month",
      message: "Enter the month (1-12):",
      validate: (value) => {
        if (value < 1 || value > 12) {
          return "Invalid month. Please enter a number between 1 and 12.";
        }
        return true;
      },
    },
    {
      type: "number",
      name: "day",
      message: "Enter the day (1-31):",
      validate: (value) => {
        if (value < 1 || value > 31) {
          return "Invalid day. Please enter a number between 1 and 31.";
        }
        return true;
      },
    },
    {
      type: "number",
      name: "hour",
      message: "Enter the hour (0-23):",
      validate: (value) => {
        if (value < 0 || value > 23) {
          return "Invalid hour. Please enter a number between 0 and 23.";
        }
        return true;
      },
    },
    {
      type: "number",
      name: "minute",
      message: "Enter the minute (0-59):",
      validate: (value) => {
        if (value < 0 || value > 59) {
          return "Invalid minute. Please enter a number between 0 and 59.";
        }
        return true;
      },
    },
    {
      type: "number",
      name: "second",
      message: "Enter the second (0-59):",
      validate: (value) => {
        if (value < 0 || value > 59) {
          return "Invalid second. Please enter a number between 0 and 59.";
        }
        return true;
      },
    },
  ]);

  const targetDate = new Date(year, month - 1, day, hour, minute, second); // Adjust month index

  if (targetDate.getTime() < Date.now()) {
    console.error("The target date and time have already passed.");
    return;
  }

  const countdown = setInterval(() => {
    const now = Date.now();
    const remaining = targetDate.getTime() - now;

    if (remaining <= 0) {
      clearInterval(countdown);
      console.log("Countdown complete!");
      return;
    }

    const remainingSeconds = Math.floor(remaining / 1000) % 60;
    const remainingMinutes = Math.floor(remaining / (1000 * 60)) % 60;
    const remainingHours = Math.floor(remaining / (1000 * 60 * 60)) % 24;
    const remainingDays = Math.floor(remaining / (1000 * 60 * 60 * 24));

    const formattedTime = `${remainingDays
      .toString()
      .padStart(2, "0")}d ${remainingHours
      .toString()
      .padStart(2, "0")}h ${remainingMinutes
      .toString()
      .padStart(2, "0")}m ${remainingSeconds.toString().padStart(2, "0")}s`;
    console.log(formattedTime);
  }, 1000);
}

main();
