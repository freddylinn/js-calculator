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

function operate(operatorName,num1,num2){
    switch(operatorName){

        case "add":
            add(num1,num2);
        break;

        case "subtract":
            subtract(num1,num2);
        break;

        case "multiply":
            multiply(num1,num2);
        break;

        case "divide":
            divide(num1,num2);
        break;

    }
}


const displayElement = document.querySelector(".currNumber");
const numberButtons = document.querySelectorAll(".number");

for(const button of numberButtons){
    button.addEventListener("click", function(e){
        if(displayElement.textContent.length < 12)
        displayElement.textContent += e.target.textContent;
    });
}


const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => displayElement.textContent = "");

