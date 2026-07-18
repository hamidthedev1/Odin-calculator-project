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
        case "−":
         return subtract(firstNumber, secondNumber);
        case "×":
         return multiply(firstNumber, secondNumber);
        case "÷":
         if(secondNumber !==0) return divide(firstNumber, secondNumber);
       return "Divide by 0 error"
    default:
        return "Operator not recognized"
    }
}
// Varaibles to store 
let firstNumber = "";
let secondNumber = "";
let operator = "";
let shouldResetDisplay = false;

// select the dom elements
const display = document.querySelector(".display");

const numberButtons = document.querySelectorAll(".number");

const operatorButtons = document.querySelectorAll(".operator");

const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");

// dispaly the values
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (shouldResetDisplay) {
        display.textContent = "";
        shouldResetDisplay = false;
        }
        display.textContent +=  button.textContent
    });
});

operatorButtons.forEach((button) => {
button.addEventListener("click", () => {
    if(operator === ""){
    firstNumber = display.textContent;
    operator = button.textContent;
    shouldResetDisplay = true;
    } else 
        
        {
        secondNumber = display.textContent;
        let result = operate(operator, Number(firstNumber), Number(secondNumber))
        display.textContent = result;
        firstNumber = result;
        operator = button.textContent;
        shouldResetDisplay = true;
    }
      

});
});

equalsButton.addEventListener("click", () => {
    secondNumber = display.textContent; 

    let result = operate(operator, Number(firstNumber), Number(secondNumber))

     display.textContent = result;
    firstNumber = result;
    shouldResetDisplay = true;
});

clearButton.addEventListener('click', () => {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    display.textContent = "0"
    shouldResetDisplay = false;
})
