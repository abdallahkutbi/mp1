// Calculator Functions
function getValues() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    return [num1, num2];
  }
  
  function displayResult(result) {
    const output = document.getElementById("result");
    output.innerHTML = String(result);
    if (result < 0) {
      output.style.color = "red";
    } else {
      output.style.color = "white";
    }
  }
  
  function addition() {
    const [a, b] = getValues();
    displayResult(a + b);
  }
  
  function subtraction() {
    const [a, b] = getValues();
    displayResult(a - b);
  }
  
  function multiplication() {
    const [a, b] = getValues();
    displayResult(a * b);
  }
  
  function division() {
    const [a, b] = getValues();
    displayResult(b !== 0 ? a / b : "Error: Divide by 0");
  }
  
  function power() {
    const [base, exponent] = getValues();
    let result = 1;
    for (let i = 0; i < exponent; i++) {
      result *= base;
    }
    displayResult(result);
  }
  
  function clearCalc() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    const output = document.getElementById("result");
    output.innerHTML = "";
    output.style.color = "white";
  }
  