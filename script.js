// create basic math calc functions

function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
return num1 * num2;
}

function divide(num1, num2){
return num1 / num2;
}

// create operate function

function operate (operator, firstNumber, secondNumber) {
    switch(operator) {
        case "+":
         return add(firstNumber, secondNumber);
        case "-":
         return subtract(firstNumber, secondNumber);
        case "*":
         return multiply(firstNumber, secondNumber);
        case "/":
         return divide(firstNumber, secondNumber);

    default:
        return "Invalid Operator"
    }
}