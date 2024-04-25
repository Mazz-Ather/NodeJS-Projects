import inquirer from "inquirer";
class Customer {
    firstName;
    lastName;
    age;
    mobile;
    constructor(firstName, lastName, age, mobile) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.mobile = mobile;
    }
}
class NewBank extends Customer {
    amount = 0; // Initial balance
    constructor(amount, firstName, lastName, age, mobile) {
        super(firstName, lastName, age, mobile);
        this.amount = amount; // Pass initial balance to constructor
    }
    deposit(amount) {
        this.amount += amount;
        console.log(`Amount deposited successfully: ${amount}`);
    }
    withdraw(amount) {
        if (amount > this.amount) {
            console.error("Insufficient funds.");
            return; // Exit the function if insufficient funds
        }
        this.amount -= amount;
        console.log(`Amount withdrawn successfully: ${amount}`);
    }
    getBalance() {
        return this.amount;
    }
}
async function openAccount() {
    const { fName, lastName, age, mobile } = await inquirer.prompt([
        { type: "input", name: "fName", message: "Enter your first name" },
        { type: "input", name: "lastName", message: "Enter your last name" },
        { type: "number", name: "age", message: "Enter your age" },
        { type: "number", name: "mobile", message: "Enter your mobile number" },
    ]);
    const user = new NewBank(0, fName, lastName, age, mobile); // Initial balance of 0
    console.table(user);
}
await openAccount();
async function main() {
    let bankAccount = new NewBank(0, "placeholder", "placeholder", 0, 0); // Create a BankAccount instance with placeholder values
    while (true) {
        const { opt } = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "What do you want to do?",
            choices: ["Deposit", "Withdraw", "Balance", "Exit"],
        });
        switch (opt) {
            case "Deposit":
                const { deposit } = await inquirer.prompt({
                    type: "number",
                    name: "deposit",
                    message: "How much money do you want to deposit?",
                });
                bankAccount.deposit(deposit);
                break;
            case "Withdraw":
                const { withdrawal } = await inquirer.prompt({
                    type: "number",
                    name: "withdrawal",
                    message: "How much money do you want to withdraw?",
                });
                bankAccount.withdraw(withdrawal);
                break;
            case "Balance":
                console.log(`Your current balance is: ${bankAccount.getBalance()}`);
                break;
            case "Exit":
                console.log("Thank you for banking with us!");
                process.exit(); // Exit the program
            default:
                console.error("Invalid option."); // Handle unexpected input
        }
    }
}
main();
