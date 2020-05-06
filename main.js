var secretNumber;
var guessedNumbers = [];

const guessField = document.querySelector(".guessField")

function start()
{
    secretNumber = Math.floor(Math.random() * 100) +1;
    console.log(secretNumber);
}

function guessButtonPressed()
{
    console.log("Button pressed.")
    var usersGuess = Number(guessField.value);
    console.log(usersGuess);
}