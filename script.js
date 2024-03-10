function appendValue(value) {
  document.getElementById("display").value += value;
}

// X
function appendValue(value) {
  if (value === "X") {
    value = "*"; // Replace 'X' with '*'
  }
  document.getElementById("display").value += value;
}

// delete
function clearDisplay(action) {
  var display = document.getElementById("display");
  if (action === "C") {
    if (display.value === "") {
      display.value = ""; // If input is empty, keep it empty
    } else {
      display.value = display.value.slice(0, -1); // Remove the last character
    }
  } else if (action === "AC") {
    display.value = ""; // Clear the entire input
  }
}

function calculate() {
  var result = eval(document.getElementById("display").value);
  document.getElementById("display").value = result;
}

// %
function calculate() {
  var input = document.getElementById("display").value;
  var result;

  // Check if input contains a percentage
  if (input.includes("%")) {
    // Remove the percentage sign and evaluate the expression
    var parts = input.split("%");
    var number = parseFloat(parts[0]);
    var percentValue = number / 100;

    if (parts.length === 2 && !isNaN(percentValue)) {
      result = percentValue;
    } else {
      result = "Invalid input";
    }
  } else {
    // If no percentage sign, simply evaluate the expression
    result = eval(input);
  }

  document.getElementById("display").value = result;
}
