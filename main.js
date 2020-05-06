var secretNumber;
var guessedNumbers = [];

function start()
{
    secretNumber = Math.floor(Math.random() * 100) +1;
    console.log(secretNumber);
}

function guessButtonPressed()
{
    console.log("Button pressed.")
    var usersGuess = parseInt(document.querySelector(".guessField"));
    console.log(usersGuess);
}