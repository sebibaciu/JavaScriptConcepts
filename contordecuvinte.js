// Declaram variabilele globale
var inputText = document.getElementById("inputText");
var wordCount = document.getElementById("wordCount");

// Functia pentru numararea cuvintelor
function countWords() {
  var text = inputText.value.trim();
  var words = text.split(" ");
  var count = words.length;
  if (text === "") {
    wordCount.innerHTML = "0 cuvinte";
  } else {
    wordCount.innerHTML = count + " cuvinte";
  }
}

// Functia pentru resetarea contorului
function resetCounter() {
  inputText.value = "";
  wordCount.innerHTML = "";
}
