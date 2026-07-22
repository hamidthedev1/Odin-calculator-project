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
       return "Divide by 0 error";
      
    default:
        return "Operator not recognized";
    }
}
// Varaibles to store 
let firstNumber = "";
let secondNumber = "";
let operator = "";
let shouldResetDisplay = false;
let justCalculated = false;

// select the dom elements
const display = document.querySelector(".display");

const numberButtons = document.querySelectorAll(".number");

const operatorButtons = document.querySelectorAll(".operator");

const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const decimalButton = document.querySelector(".point");

const backspaceButton = document.querySelector(".backspace");
const percentButton = document.querySelector(".percent");
const signButton = document.querySelector(".sign");

// helper function
function roundResult(number) {
    return Math.round(number * 100000) / 100000;
}

// number logic function
function inputNumber(number) {
    if (shouldResetDisplay) {
        display.textContent = "";
        shouldResetDisplay = false;
        }
        display.textContent += number
}

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
       inputNumber(button.textContent)
    });
});
//handle operators logic

function handleOperator(nextOperator) {
    if(display.textContent === "") return;

    if(operator === ""){
    firstNumber = display.textContent;
    operator = nextOperator;
    shouldResetDisplay = true;
    } 

    else if(justCalculated) {
        operator = nextOperator;
        justCalculated = false;
        shouldResetDisplay = true;
        return;
    }

    else if (shouldResetDisplay) {
      operator = nextOperator;
     }

    else {
        secondNumber = display.textContent;
        const result = operate(operator, Number(firstNumber), Number(secondNumber));
        const roundedResult = roundResult(result);

        display.textContent = roundedResult;
        firstNumber = roundedResult;
        operator = nextOperator;
        shouldResetDisplay = true;
        justCalculated = false;
    }
}


operatorButtons.forEach((button) => {
button.addEventListener("click", () => {

handleOperator(button.textContent);

});
});

// Handle Equal button
function calculate() {
   if (operator === "") return;

    if (shouldResetDisplay) return; 

    secondNumber = display.textContent; 
    const result = operate(operator, Number(firstNumber), Number(secondNumber))
 
     const roundedResult = roundResult(result);

     display.textContent = roundedResult;
     firstNumber = roundedResult;
    shouldResetDisplay = true;
    justCalculated = true;
    
 }

equalsButton.addEventListener("click", calculate);

//handle clear button
function clearCalculator() { 
  firstNumber = "";
    secondNumber = "";
    operator = "";
    display.textContent = "0"
    shouldResetDisplay = false;
    justCalculated = false;
 }
clearButton.addEventListener('click',clearCalculator);

//handle decimal point

function inputDecimal() { 
      if(shouldResetDisplay){
       display.textContent = "";
       shouldResetDisplay = false;
     }
        if (display.textContent.includes(".")) return;

        if (display.textContent === "") {
            display.textContent = "0.";
            return;
        }

        display.textContent += ".";
}

decimalButton.addEventListener('click', inputDecimal);

//handle delete (backspace) button
function deleteLastDigit() { 
    if(shouldResetDisplay) return;
display.textContent = display.textContent.slice(0,-1)
if(display.textContent === ""){
    display.textContent = "0";
}
 }
backspaceButton.addEventListener('click', deleteLastDigit);

// handle percentage 
function convertPercentage() {

    if (display.textContent === "") return;

    let value = Number(display.textContent);

    value = value / 100;

    display.textContent = value;
}

percentButton.addEventListener("click", convertPercentage);

function handleKeyboard(event) {
   
if(event.key >= "0" && event.key <="9"){
    inputNumber(event.key);
  }
  else if (event.key === "+") {
    handleOperator("+");
}
else if (event.key === "-") {
    handleOperator("−");
}
else if(event.key === "*"){
  handleOperator("×");
}
else if(event.key === "/"){
    handleOperator("÷");
}
else if (event.key === "Enter"){
    calculate();
}
else if (event.key === "="){
    calculate();
}
// else if (event.key === "Enter" || event.key === "="){
//     calculate();
// }
else if(event.key === "Backspace"){
    deleteLastDigit();
}
 else if(event.key === "Escape"){
    clearCalculator();
 }
}

document.addEventListener("keydown", handleKeyboard);
