const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}
function trimLastCharacter() {
    display.value = display.value.slice(0, -1);
}


function calculate() {
    const display = document.getElementById('display');
    try {
        // Convert degrees to radians for trigonometric functions
        let result = display.value
            .replace(/sin\(([^)]+)\)/g, 'Math.sin($1 * Math.PI / 180)')
            .replace(/cos\(([^)]+)\)/g, 'Math.cos($1 * Math.PI / 180)')
            .replace(/tan\(([^)]+)\)/g, 'Math.tan($1 * Math.PI / 180)')
            .replace(/log\(([^)]+)\)/g, 'Math.log10($1)')
            .replace(/pie/g, 'Math.PI');

        result = eval(result);

        // Handle very small floating-point results
        if (Math.abs(result) < 1e-10) {
            result = 0;
        }

        // Round the result to 10 decimal places
        result = Math.round(result * 1e10) / 1e10;

        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}


function sin(){
    document.calculator.display.value=Math.sin(document.calculator.display.value);
}
function square() {
    try {
        let display = document.getElementById('display');
        let number = parseFloat(display.value);
        if (!isNaN(number)) {
            display.value = number * number;
        } else {
            display.value = "Error";
        }
    } catch (e) {
        display.value = "Error";
    }
}
function cube() {
    try {
        let display = document.getElementById('display');
        let number = parseFloat(display.value);
        if (!isNaN(number)) {
            display.value = number * number*number;
        } else {
            display.value = "Error";
        }
    } catch (e) {
        display.value = "Error";
    }
}

function squareRoot() {
    try {
        let display = document.getElementById('display');
        let number = parseFloat(display.value);
        if (!isNaN(number) && number >= 0) {
            display.value = Math.sqrt(number);
        } else {
            display.value = "Error";
        }
    } catch (e) {
        display.value = "Error";
    }
}