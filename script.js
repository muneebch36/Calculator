const displayScreen = document.getElementById("display");
const numberKeys = document.querySelectorAll(".number");
const operatorKeys = document.querySelectorAll("#operator");
const equalKey = document.querySelector(".equal");
const clearKey = document.querySelector("#clear");
const deleteKey = document.querySelector(".delete");
const decimalKey = document.querySelector(".decimal");

let x = null;
let y = "";
let z = null;
let savedOperator = null;
let displayNumber = "";

const divide = function(x,y) {
    return z = x / y;
}

const multiply = function(x,y) {
    return z = x * y;
}

const subtract = function(x,y) {
    return z = x - y;
}

const add = function(x,y) {
    return z = x + y;
}

const operate = function(x,y) {
switch(savedOperator) {
case "divide":
    return divide(x,y);
case "multiply":
    return multiply(x,y);
case "subtract":
	return subtract(x,y);
case "add":
	return add(x,y);
}
}

numberKeys.forEach(function(button) {
    button.addEventListener("click", function() {
        displayNumber += button.value;
        displayScreen.textContent = displayNumber;
        if (typeof(savedOperator) === "string") {;
            y += button.value;
            displayScreen.textContent = y;
            y = parseInt(displayScreen.textContent);
            operate(x,y);
        } else {
            x = parseInt(displayNumber);
        }
    })
});

operatorKeys.forEach(function(button) {
    button.addEventListener("click", function() {
        if (typeof(x && y) === "number") {     
            displayScreen.textContent = z;
            }    
    return savedOperator = button.className;
    })
});

equalKey.addEventListener("click", function() {
    displayScreen.textContent = z;
});

clearKey.addEventListener("click", function() {
    displayScreen.textContent = 0;
    x = null;
    y = null;
    z = null;
    savedOperator = null;
});

deleteKey.addEventListener("click", function() {
    if (displayScreen.textContent.length == 1 && displayScreen.textContent != "0") {;
        displayScreen.textContent = "0"
    } else if (displayScreen.textContent.includes("-",".") && displayScreen.textContent.length == 2) {
        displayScreen.textContent = "0"         
    } else if (displayScreen.textContent == "0") {
        return;         
    } else {
        displayScreen.textContent = displayScreen.textContent.slice(0, -1)
    }
});

  