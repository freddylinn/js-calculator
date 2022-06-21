function add(num1,num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1 / num2;
}

function power(num1,num2){
    return num1 ** num2;
}

function mod(num1,num2){
    return num1 % num2;
}

function operate(operatorName,num1,num2){
    switch(operatorName){

        case "+":
            return add(num1,num2);
        break;

        case "-":
            return subtract(num1,num2);
        break;

        case "*":
            return multiply(num1,num2);
        break;

        case "/":
            return divide(num1,num2);
        break;

        case "x^":
            return power(num1,num2);
        break;

        case "%":
            return mod(num1,num2);
        break;

    }
}

function calculateAns(){
    if(displayElement.textContent.includes(".")){
        secondNumber = parseFloat(displayElement.textContent);
    }
    else{
        secondNumber = parseInt(displayElement.textContent);
    }
    displayElement.textContent = operate(currOperator,firstNumber,secondNumber);
    secondStage = false;
    currOperator = "";
}


const displayElement = document.querySelector(".currNumber");
const numberButtons = document.querySelectorAll(".number");
let reset = true;
let secondStage = false;
let firstNumber = "";
let secondNumber = "";
let currOperator = "";

for(const button of numberButtons){
    button.addEventListener("click", function(e){
        if(displayElement.textContent.length < 12 && !reset){
            displayElement.textContent += e.target.textContent;
        }
        else{
            displayElement.textContent = e.target.textContent;
            reset = false;
        }
    });
}


const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => { displayElement.textContent = "0"; reset = true; });


const operatorButtons = document.querySelectorAll(".operator");

for(const button of operatorButtons){
    button.addEventListener("click", (e) => {
        if(!secondStage && currOperator == ""){
            if(displayElement.textContent.length >= 1){

                currOperator = e.target.textContent;

                if(displayElement.textContent.includes(".")){
                    firstNumber = parseFloat(displayElement.textContent);
                }
                else{
                    firstNumber = parseInt(displayElement.textContent);
                }

                reset = true;
                secondStage = true;

            }
        }
        else if(currOperator == e.target.textContent){
            calculateAns();
        }
    });
}


const decimalButton = document.querySelector("#decimal");
decimalButton.addEventListener("click", () => {
    if(!displayElement.textContent.includes(".")){
        reset = false;
        displayElement.textContent += ".";
    }
})

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", calculateAns);