import inquirer from "inquirer";
let roundNumber = Math.floor((Math.random() * 4) + 1);
let userInput = await inquirer.prompt({
    type: "number",
    name: "guessedNumber",
    message: "Guess a number between 1 -4"
});
if (userInput.guessedNumber === roundNumber) {
    console.log('congratulations! you guessed correctly');
}
else {
    console.log(`sorry try next time. correct ans is:${roundNumber}`);
}
