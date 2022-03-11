const display1 = document.querySelector("#display1");
const display2 = document.querySelector("#display2");
const display3 = document.querySelector("#operator");
const buttons = document.querySelectorAll("#buttons button");

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

buttons.forEach(button => {
    button.className = "input1";
    button.addEventListener("click", () => {
        checkInput(button.value, button.className);
    });
});

let operator = "";

function checkInput(input, param) {
    if (input <= 9 && param == "input1") {
        displayNumber(input);
    } else if (input <= 9 && param == "input2") {
        displayNumber2(input);
    } else if (input == "=") {
        console.log(operate(parseFloat(firstNumber), parseFloat(secondNumber), operator));
    } else {
        setOperator(input);
    }
}

let firstNumber = "";

function displayNumber(input) {
    firstNumber += input;
    display1.textContent = firstNumber;
}

let secondNumber = "";

function displayNumber2(input) {
    display2.textContent = firstNumber;
    secondNumber += input;
    display1.textContent = secondNumber;
}

function setOperator(input) {
    buttons.forEach(button => {
        button.className = "input2";
    });
    display3.textContent = input;
    switch (input) {
        case "+":
            operator = "+";
            break;
        case "-":
            operator = "-";
            break;
        case "*":
            operator = "*";
            break;
        case "/":
            operator = "/";
            break;

        default:
            break;
    }
}

function operate(a, b, type) {
    let result = 0;
    switch (type) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;


        default:
            break;
    }
    display1.textContent = result;
}