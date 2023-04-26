// Declaram variabilele globale
var randomNumber;
var guessInput = document.getElementById("guess");
var message = document.getElementById("message");

// Functia pentru generarea unui numar aleator
function generateNumber() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
}

// Functia pentru ghicirea numarului
function guessNumber() {
  var guess = parseInt(guessInput.value);
  if (guess === randomNumber) {
    message.innerHTML = "Felicitari, ai ghicit numarul!";
    guessInput.disabled = true;
  } else if (guess < randomNumber) {
    message.innerHTML = "Numarul introdus este prea mic. Incearca din nou.";
  } else if (guess > randomNumber) {
    message.innerHTML = "Numarul introdus este prea mare. Incearca din nou.";
  }
}

// Functia pentru resetarea jocului
function resetGame() {
  generateNumber();
  guessInput.value = "";
  guessInput.disabled = false;
  message.innerHTML = "";
}

// Generam numarul aleator la incarcarea paginii
generateNumber();
