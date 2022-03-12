const display1 = document.querySelector("#display1");
const display2 = document.querySelector("#display2");
const display3 = document.querySelector("#operator");
const buttons = document.querySelectorAll("#buttons button");

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

buttons.forEach(button => {
    changeClass(true);
    button.addEventListener("click", () => {
        checkInput(button.value, button.className);
    });
});

let operator = "";

function checkInput(input, param) {
    if ((input <= 9 || input == ".") && param == "input1") {
        displayNumber(input);
    } else if ((input <= 9 || input == ".") && param == "input2") {
        displayNumber2(input);
    } else if (input == "=") {
        operate(parseFloat(firstNumber), parseFloat(secondNumber), operator, true);
    } else {
        if (secondNumber == "") {
            console.log("woo");
            setOperator(input);
        } else {
            operate(parseFloat(firstNumber), parseFloat(secondNumber), operator, false);
            setOperator(input);
            console.log("wee");
        }
    }
}

let firstNumber = "";

function displayNumber(input) {
    firstNumber += input;
    display1.textContent = firstNumber;
    console.log("display1");
}

let secondNumber = "";

function displayNumber2(input) {
    display2.textContent = firstNumber;
    secondNumber += input;
    display1.textContent = secondNumber;
    console.log("display2");
}

function setOperator(input) {
    changeClass(false);
    display3.textContent = input;
    display2.textContent = firstNumber;
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

function operate(a, b, type, check) {
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
    if (check) {
        display2.textContent = `${firstNumber} ${operator} ${secondNumber}`;
        operator = "=";
        firstNumber = "";
        display3.textContent = operator;
        display1.textContent = result;
    } else {
        console.log("not =");
        display2.textContent = `${result}`;
        secondNumber = "";
        firstNumber = result;
    }
}


function changeClass(params) {
    buttons.forEach(button => {
        if (params) {
            button.className = "input1";
        } else {
            button.className = "input2";
        }
    });
}

function clearScreen() {
    console.log("cleared");
    firstNumber = "";
    secondNumber = "";
    operator = "";
    display1.textContent = 0;
    display2.textContent = "";
    display3.textContent = "";
    changeClass(true);
}


function deleteNumber() {
    let active = buttons[0].classList;
    console.log(active);
    if (active == "input1") {
        firstNumber = firstNumber.slice(0, -1);
        display1.textContent = firstNumber;
    } else {
        secondNumber = secondNumber.slice(0, -1);
        display1.textContent = secondNumber;
        console.log(secondNumber);
    }
}