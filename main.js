//Skapa variabler
let number;
let attemptsLeft = 5;
//Skapa array för previousGuesses
let previousGuesses = [];

function startGame() {
    //Skapa random nummer mha Math.random
    number = Math.floor(Math.random() * 101);
   //insert antal attempts
    attemptsLeft = 5;
    previousGuesses = [];
    //visa resultatet
    displayResult('');
    displayPreviousGuesses('');
}

//funktion för att gissa numret
function guessNumber() {
    //hämta gissning
    const userGuess = parseInt(document.getElementById('guessInput').value);
   //antsl attempts
    attemptsLeft--;
    //skapa en "if sats" 
    if (userGuess === number) {
        displayResult('Congratulations! You guessed the correct number!');
    } else if (attemptsLeft === 0) {
        displayResult(`You're out of attempts. The correct number was ${number}.`);
    } else {
        const hint = userGuess < number ? 'too low' : 'too high';
        const resultMessage = `Wrong guess! Your guess is ${hint}. ${attemptsLeft} attempts left.`;
        saveGuess(userGuess, resultMessage);
    }

    document.getElementById('guessInput').value = '';
    displayPreviousGuesses();
}
//visa resultatet
function displayResult(message) {
    document.getElementById('result').innerText = message;
    if (message.includes('Congratulations')) {
        startGame();
    }
}

//funktion för att spara resultatet
function saveGuess(guess, result) {
    previousGuesses.push({ guess, result });
}
//Skapa en list element
function displayPreviousGuesses() {
    const previousGuessesElement = document.getElementById('previousGuesses');
    previousGuessesElement.innerHTML = '';
    
    previousGuesses.forEach(guess => {
        const guessItem = document.createElement('li');
        guessItem.textContent = `${guess.guess} - ${guess.result}`;
        previousGuessesElement.appendChild(guessItem);
    });
}

//addeventlistener för guess button
document.getElementById('guessButton').addEventListener('click',guessNumber);

//starta funktionen
startGame();
