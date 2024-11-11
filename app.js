let currentInput = "0";
let operator = "";
let previousInput = "";

// Function to append a digit to the current input
function appendDigit(digit) {
  if (currentInput === "0") {
    currentInput = digit.toString();
  } else {
    currentInput += digit.toString();
  }
  updateDisplay();
}

// Function to clear the display
function clearDisplay() {
  currentInput = "0";
  previousInput = "";
  operator = "";
  updateDisplay();
}

// Function to set the operator and prepare for the next number
function setOperator(op) {
  if (operator !== "") {
    calculate();
  }
  previousInput = currentInput;
  operator = op;
  currentInput = "0";
}

// Function to calculate the result based on the current operator
function calculate() {
  if (operator === "") return;
  let result;
  switch (operator) {
    case "+":
      result = parseFloat(previousInput) + parseFloat(currentInput);
      break;
    case "-":
      result = parseFloat(previousInput) - parseFloat(currentInput);
      break;
    case "*":
      result = parseFloat(previousInput) * parseFloat(currentInput);
      break;
    case "/":
      result = parseFloat(previousInput) / parseFloat(currentInput);
      break;
  }
  currentInput = result.toString();
  operator = "";
  previousInput = "";
  updateDisplay();
}

// Function to update the display area
function updateDisplay() {
  document.getElementById("display").textContent = currentInput;
}
