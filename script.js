const displayScreen = document.getElementById("display");
const numberKeys = document.querySelectorAll(".number");
const operatorKeys = document.querySelectorAll("#operator");
const equalKey = document.querySelector(".equal");
const clearKey = document.querySelector("#clear");
const deleteKey = document.querySelector(".delete");
const decimalKey = document.querySelector(".decimal");

let x = "";
let y = "";
let z = "";
let savedOperator = null;
let displayNumber = "";

const divide = function(x,y) {
    if (y === 0) {
        return z = "U srs bro?"
    } else {
        return z = parseFloat((x / y).toFixed(2)); //parseFloat gets rids of trailing zeros that toFixed gives to whole numbers. 
    }
} 

const multiply = function(x,y) {
    return z = parseFloat((x * y).toFixed(2));
}

const subtract = function(x,y) {
    return z = parseFloat((x - y).toFixed(2));
}

const add = function(x,y) {
    intX = parseFloat(x); //have to convert x and y to numbers as adding strings contaning numbers concatenates them instead. 
    intY = parseFloat(y);
    return z = parseFloat((intX + intY).toFixed(2));
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
        if (displayNumber.length > 7) {
            return displayNumber = displayNumber.substring(0,7);
        } else if (typeof(savedOperator) === "string") {
            y = displayNumber;
            displayScreen.textContent = y;
            operate(x,y);
        } else {
            x = displayNumber;
            displayScreen.textContent = x;
        }
    })
});

operatorKeys.forEach(function(button) {
    button.addEventListener("click", function() {
        if ((!x === false) && (!y === false)) {     
                displayScreen.textContent = z;
                x = z;
                y = "";
                displayNumber = "";
            } else {
                displayNumber = "";
            }   
    return savedOperator = button.className;
    })
});

clearKey.addEventListener("click", function() {
        displayScreen.textContent = 0;
        x = "";
        y = "";
        z = "";
        savedOperator = null;
        displayNumber = "";
    });

decimalKey.addEventListener("click", function() {
    if (displayScreen.textContent.includes(".") === true) {     
            return;
        } else {
            displayScreen.textContent = displayScreen.textContent + ".";
            displayNumber = displayNumber + ".";
            }   
});

/* deleteKey.addEventListener("click", function() {
    if (displayScreen.textContent.length == 1 && displayScreen.textContent != "0") {;
        displayScreen.textContent = "0"
        displayNumber = "";
        x = "";
        y = "";
        z = "";
    } else if (displayScreen.textContent.includes("-",".") && displayScreen.textContent.length == 2) {
        displayScreen.textContent = "0"         
    } else if (displayScreen.textContent === "0") {
        return;         
    } else {
        displayNumber = displayNumber.slice(0, -1); 
        x = x.slice(0, -1); 
        y = y.slice(0, -1); 
        displayScreen.textContent = displayScreen.textContent.slice(0, -1)
    }
}); */