// Declaram variabilele globale
var result = document.getElementById("result");
var currentNumber = "";
var currentOperator = "";
var currentResult = 0;

// Functia pentru adaugarea cifrelor
function addDigit(digit) {
  currentNumber += digit;
  result.value = currentNumber;
}

// Functia pentru adaugarea operatorilor
function addOperator(operator) {
  if (currentNumber != "") {
    if (currentOperator != "") {
      calculate();
    }
    currentOperator = operator;
    currentResult = parseFloat(currentNumber);
    currentNumber = "";
    result.value = currentResult;
  }
}

// Functia pentru adaugarea punctului decimal
function addDot() {
  if (currentNumber.indexOf(".") == -1) {
    currentNumber += ".";
    result.value = currentNumber;
  }
}

// Functia pentru resetarea la valorile initiale
function clearAll() {
  currentNumber = "";
  currentOperator = "";
  currentResult = 0;
  result.value = "";
}

// Functia pentru calcularea rezultatului
function calculate() {
  if (currentOperator != "" && currentNumber != "") {
    switch (currentOperator) {
      case "+":
        currentResult += parseFloat(currentNumber);
        break;
      case "-":
        currentResult -= parseFloat(currentNumber);
        break;
      case "*":
        currentResult *= parseFloat(currentNumber);
        break;
      case "/":
        currentResult /= parseFloat(currentNumber);
        break;
    }
    currentNumber = "";
    currentOperator = "";
    result.value = currentResult;
  }
}
