// #! /usr/bin/env node
// import inquirer from "inquirer"
// // // function getTime(targetDate:any) {
// // //     let previousTime = null; 
// // //     while (targetDate - Date.now() > 0) {
// // //       const now = Date.now();
// // //       const remainingMilliseconds = Math.max(0, targetDate - now);
// // //       // Calculate minutes and seconds
// // //       const remainingSeconds = Math.floor(remainingMilliseconds / 1000) % 60;
// // //       const remainingMinutes = Math.floor(remainingMilliseconds / (1000 * 60));
// // //       // Only print if time has changed
// // //       const currentTime = `${remainingMinutes}:${remainingSeconds.toString()}`; 
// // //       if (currentTime !== previousTime) {
// // //         console.log(currentTime);
// // //         previousTime = currentTime;
// // //       }
// // //   async () => {
// // //       await new Promise(resolve => setTimeout(resolve, 1000));
// // //   }
// // //     }
// // //     console.log("Countdown complete!");
// // //   }
// // const ans = await inquirer.prompt([
// //   {
// //     type: "number",
// //           name: "year",
// //           message: "Enter the year you will marry to your crush "
// //       },
// //       {
// //           type: "number",
// //           name: "month",
// //           message: "Enter the month you will marry to your crush "
// //       },
// //       {
// //           type: "number",
// //           name: "day",
// //           message: "Enter the day you will marry to your crush "
// //       },
// //       {
// //           type: "number",
// //           name: "hour",
// //           message: "Enter the hour you will marry to your crush "
// //       }, {
// //           type: "number",
// //           name: "mint",
// //           message: "Enter the mint you will marry to your crush "
// //       }, {
// //           type: "number",
// //           name: "sec",
// //           message: "Enter the sec you will marry to your crush "
// //       }
// //   ]);
// //   async function my() {
// //   const { year, month, day, hour, mint, sec } = ans;
// //   const currentTime = new Date().getFullYear();
// //   // console.log(currentTime);
// //   const diff = year - currentTime;
// //   console.log(diff);
// //   let eid = new Date()
// //   eid.setFullYear(year)
// // eid.setMonth(month)
// // eid.setDate(day)
// // eid.setHours(hour)
// // eid.setMinutes(mint)
// // eid.setSeconds(sec)
// // console.log(`${year}-${ month}-${ day} ${  hour}: ${mint}: ${sec}`);
// // }
// // setInterval(my,1000)
// // // const main = await inquirer.prompt([{
// // //     type: "number",
// // //     name: "time",
// // //     message: "Type Any Time For Countdown",
// // // }])
// // // if(main.time){
// // //      const targetDate = new Date(Date.now() + (main.time * 60 * 1000)); 
// // //      getTime(targetDate);
// // //  }
// ////////todo
// async function main() {
//   const { year, month, day, hour, minute, second } = await inquirer.prompt([
//     {
//       type: "number",
//       name: "year",
//       message: "Enter the year you want to countdown to:",
//     },
//     {
//       type: "number",
//       name: "month",
//       message: "Enter the month (1-12):",
//       validate: (value) => {
//         if (value < 1 || value > 12) {
//           return "Invalid month. Please enter a number between 1 and 12.";
//         }
//         return true;
//       },
//     },
//     {
//       type: "number",
//       name: "day",
//       message: "Enter the day (1-31):",
//       validate: (value) => {
//         if (value < 1 || value > 31) {
//           return "Invalid day. Please enter a number between 1 and 31.";
//         }
//         return true;
//       },
//     },
//     {
//       type: "number",
//       name: "hour",
//       message: "Enter the hour (0-23):",
//       validate: (value) => {
//         if (value < 0 || value > 23) {
//           return "Invalid hour. Please enter a number between 0 and 23.";
//         }
//         return true;
//       },
//     },
//     {
//       type: "number",
//       name: "minute",
//       message: "Enter the minute (0-59):",
//       validate: (value) => {
//         if (value < 0 || value > 59) {
//           return "Invalid minute. Please enter a number between 0 and 59.";
//         }
//         return true;
//       },
//     },
//     {
//       type: "number",
//       name: "second",
//       message: "Enter the second (0-59):",
//       validate: (value) => {
//         if (value < 0 || value > 59) {
//           return "Invalid second. Please enter a number between 0 and 59.";
//         }
//         return true;
//       },
//     },
//   ]);
//   const targetDate = new Date(year, month - 1, day, hour, minute, second); // Adjust month index
//   if (targetDate.getTime() < Date.now()) {
//     console.error("The target date and time have already passed.");
//     return;
//   }
//   const countdown = setInterval(() => {
//     const now = Date.now();
//     const remaining = targetDate.getTime() - now;
//     if (remaining <= 0) {
//       clearInterval(countdown);
//       console.log("Countdown complete!");
//       return;
//     }
//     const remainingSeconds = Math.floor(remaining / 1000) % 60;
//     const remainingMinutes = Math.floor(remaining / (1000 * 60)) % 60;
//     const remainingHours = Math.floor(remaining / (1000 * 60 * 60)) % 24;
//     const remainingDays = Math.floor(remaining / (1000 * 60 * 60 * 24));
//     const formattedTime = `${remainingDays.toString().padStart(2, '0')}d ${remainingHours.toString().padStart(2, '0')}h ${remainingMinutes.toString().padStart(2, '0')}m ${remainingSeconds.toString().padStart(2, '0')}s`;
//     console.log(formattedTime);
//   }, 1000);
// }
// main();
import inquirer from "inquirer";
async function main() {
    const { timeInMinutes } = await inquirer.prompt([
        {
            type: "number",
            name: "timeInMinutes",
            message: "Enter the countdown time in minutes:",
            validate: (value) => {
                if (value < 0) {
                    return "Invalid time. Please enter a positive number.";
                }
                return true;
            },
        },
    ]);
    const targetDate = new Date(Date.now() + timeInMinutes * 60 * 1000);
    if (targetDate.getTime() < Date.now()) {
        console.error("The target time has already passed.");
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
        // Calculate remaining time in seconds
        const remainingSeconds = Math.floor(remaining / 1000);
        // Extract days, hours, minutes, and seconds
        const days = Math.floor(remainingSeconds / (24 * 60 * 60));
        const hours = Math.floor((remainingSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((remainingSeconds % (60 * 60)) / 60);
        const seconds = remainingSeconds % 60;
        // Format the output string with leading zeros
        const formattedTime = `${days.toString().padStart(2, '0')}d ${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
        console.log(formattedTime);
    }, 1000);
}
main();
