import inquirer from "inquirer";

async function analyzeSentence() {
  let allAnalyze: any = [];

  while (true) {
    const main: {
      sentence: any;
    } = await inquirer.prompt({
      name: "sentence",
      type: "input",
      message: "Please enter a sentence",
    });

    let words = main.sentence.trim().split(/\s+/).length;
    let alphabet = main.sentence.replace(/[^a-zA-Z]/g, "").length;
    let digit = main.sentence.replace(/[^0-9]/g, "").length;
    let specialChar = main.sentence.replace(/[\w\s]/g, "").length;

    const result = {
      sentence: main.sentence,
      Total_Words: words,
      total_Alphabet: alphabet,
      total_digits: digit,
      special_char: specialChar,
    };

    allAnalyze.push(result);
    console.table(allAnalyze, [
      "sentence",
      "Total_Words",
      "total_Alphabet",
      "total_digits",
      "special_char",
    ]);

    const confirm = await inquirer.prompt({
      type: "confirm",
      name: "confirm",
      message: "do you want to continue",
    });
    if (!confirm.confirm) {
      break;
    }
  }
}

analyzeSentence();
  