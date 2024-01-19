let displayValue = "";

for (let i = 0; i <= 9; i++) {
  document.getElementById(`btn-${i}`).addEventListener("click", function () {
    appendToDisplay(i.toString());
  });
}

document.getElementById("btn-plus").addEventListener("click", function () {
  appendToDisplay("+");
});

document.getElementById("btn-minus").addEventListener("click", function () {
  appendToDisplay("-");
});

document.getElementById("btn-multiply").addEventListener("click", function () {
  appendToDisplay("*");
});

document.getElementById("btn-divide").addEventListener("click", function () {
  appendToDisplay("/");
});

document.getElementById("btn-equals").addEventListener("click", function () {
  calculateResult();
});

document.getElementById("btn-clear").addEventListener("click", function () {
  clearDisplay();
});

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

function calculateResult() {
  try {
    displayValue = eval(displayValue).toString();
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById("display").value = displayValue;
}
