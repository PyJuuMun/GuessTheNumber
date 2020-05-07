var secretNumber;
var guessedNumbers = [];
var messageBox = document.getElementById("messageBox");
var wrongGuesses = document.getElementById("wrongGuesses");

const guessField = document.querySelector(".guessField")

function start()
{
    secretNumber = Math.floor(Math.random() * 100) +1;
    console.log(secretNumber);
    messageBox.innerHTML = "";
    wrongGuesses.innerHTML = "";
    guessedNumbers = [];
}

function guessButtonPressed()
{
    console.log("Button pressed.")

    var usersGuess = Number(guessField.value);
    var guessBool = isValidGuess(usersGuess);

    if(guessBool == true)
    {
        CheckIfCorrect(usersGuess);
    }

    wrongGuesses.innerHTML = guessedNumbers;

    guessField.value ="";

    console.log(usersGuess);
}

function isValidGuess(number)
{
    if(isNaN(number))
    {
        messageBox.innerHTML = "Make a guess within the 1 to 100 range."
        return false;
    }

    if(number >100 || number <1)
    {
        messageBox.innerHTML = "Number must be bigger than one, or smaller than hundred."
        return false;
    }

    if(guessedNumbers.includes(number))
    {
        messageBox.innerHTML = "This number has been guessed before, try again."
        return false;
    }

    else
    {
        guessedNumbers.push(number)
        return true;
    }
}

function CheckIfCorrect(number)
{
    if(number == secretNumber)
    {
        messageBox.innerHTML = "Correct guess! Amount of guesses was: " +guessedNumbers.length+ "<button onclick=start()>Reset the game</button>";
    }

    if(number != secretNumber)
    {
        messageBox.innerHTML = "Incorrect guess. Try again.";

        if(number >secretNumber)
        {
            messageBox.innerHTML += "The number you guessed was bigger than what I thought of."
        }
        
        if(number <secretNumber)
        {
            messageBox.innerHTML += "The number you guessed was smaller than what I thought of."
        }
    }
}

