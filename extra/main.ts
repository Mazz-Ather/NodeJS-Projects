#! /usr/bin/env node
import inquirer from "inquirer"

function getTime(targetDate:any) {
    let previousTime = null; // Store previous time (seconds and minutes)
  
    while (targetDate - Date.now() > 0) {
      const now = Date.now();
      const remainingMilliseconds = Math.max(0, targetDate - now);
  
      // Calculate remaining minutes and seconds
      const remainingSeconds = Math.floor(remainingMilliseconds / 1000) % 60;
      const remainingMinutes = Math.floor(remainingMilliseconds / (1000 * 60));
      const remainingHours = Math.floor(remainingMilliseconds / (1000 * 60 * 60));

      // Only print if time has changed
      const currentTime = `${remainingHours}: ${remainingMinutes}:${remainingSeconds.toString()}`; // Pad seconds with leading zero
      if (currentTime !== previousTime) {
        console.log(currentTime);
        previousTime = currentTime;
      }
  async () => {
    
      await new Promise(resolve => setTimeout(resolve, 1000));
  }
    }
  
    console.log("Countdown complete!");
  }
  
  
  

const main = await inquirer.prompt([{
    type: "number",
    name: "hour",
    message: "type any hour for countdown",
},{
    type: "number",
    name: "min",
    message: "type any min for countdown",

}

])



if(main.hour){
    if(main.min){
        const targetDate = new Date(Date.now() + (main.hour * 60 * 60 ) + (main.min * 60 * 1000));
        getTime(targetDate)
    }

 }







