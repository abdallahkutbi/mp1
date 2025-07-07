// Calculator functions for the multifunction calculator
function addition() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 + num2;
    displayResult(result);
}

function subtraction() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 - num2;
    displayResult(result);
}

function multiplication() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 * num2;
    displayResult(result);
}

function division() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (num2 === 0) {
        document.getElementById('result').innerHTML = 'Error: Division by zero';
        document.getElementById('result').id = '';
    } else {
        const result = num1 / num2;
        displayResult(result);
    }
}

function power() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    // Using for loop as required (not Math.pow())
    let result = 1;
    for (let i = 0; i < num2; i++) {
        result *= num1;
    }
    
    displayResult(result);
}

function clearCalc() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('result').id = '';
}

function displayResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Result: ${result}`;
    
    // Apply red color for negative results
    if (result < 0) {
        resultElement.id = 'negative';
    } else {
        resultElement.id = 'result';
    }
}
