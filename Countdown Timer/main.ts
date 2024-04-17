#! /usr/bin/env node
import inquirer from "inquirer"

function getTime(targetDate:any) {
    let previousTime = null; 
  
    while (targetDate - Date.now() > 0) {
      const now = Date.now();
      const remainingMilliseconds = Math.max(0, targetDate - now);
  
      // Calculate minutes and seconds
      const remainingSeconds = Math.floor(remainingMilliseconds / 1000) % 60;
      const remainingMinutes = Math.floor(remainingMilliseconds / (1000 * 60));
  
      // Only print if time has changed
      const currentTime = `${remainingMinutes}:${remainingSeconds.toString()}`; 
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
    name: "time",
    message: "Type Any Time For Countdown",
}])
if(main.time){
     const targetDate = new Date(Date.now() + (main.time * 60 * 1000)); 
     getTime(targetDate);
 }







