import inquirer from "inquirer";

const currencies = {
    PKR:{
       PKR:1,
       USD:0.0036,
       GBP:0.0029,
       EUR:0.0033,
    },
    USD:{
        USD:1,
        PKR:277.58,
        GBP:0.79,
        EUR:0.93,
     },
     GPB:{
         GBP:1,
        USD:1.26,
        PKR:350.48,
        EUR:1.17,
     },
     EUR:{
         EUR:1,
        USD:1.08,
        PKR:299.80,
        GBP:0.86,
     },
}


const main :{
    // from:any, 
    // to:any, 
    // amount:number,

}= await inquirer.prompt([
    {
        type: 'list',
        name:"from",
        message: "What is the currency you want to convert FROM?",
        choices: Object.keys(currencies)
    },
    {
        type: 'list',
        name:"to",
        message: "What is the currency you want to convert TO?",
        choices: Object.keys(currencies)
    },
    {
        type: 'number',
        name:"amount",
        message: "Enter Your Amount",
    }
])



if(main.from && main.to && "amount"){
 

}else{
    console.log("invalid");
    
}
















