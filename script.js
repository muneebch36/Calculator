const displayScreen = document.getElementById("display");
const numberKeys = document.querySelectorAll(".number");
const operatorKeys = document.querySelectorAll("#operator");
const equalKey = document.querySelector(".equal");
const clearKey = document.querySelector("#clear");
const deleteKey = document.querySelector(".delete");
const decimalKey = document.querySelector(".decimal");

let x = null;
let y = null;
let z = null;
let savedOperator = null;


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

const operate = function() {
switch(savedOperator) {
case "divide":
	divide(x,y);
    displayScreen.textContent = z;
	break;
case "multiply":
	multiply(x,y);
    displayScreen.textContent = z;
	break;
case "subtract":
	subtract(x,y);
    displayScreen.textContent = z;
	break;
case "add":
	add(x,y);
    displayScreen.textContent = z;
	break;
}
}

equalKey.addEventListener("click", function() {
    displayScreen.textContent = "hello";
    operate(x,y);

});

numberKeys.forEach(function(button) {
    button.addEventListener("click", function() {
        displayScreen.textContent += button.value;
        displayScreen.textContent = displayScreen.textContent.replace(/^0+/, '');
        if (typeof(savedOperator) === "string") {;
            y = parseInt(button.value);
            displayScreen.textContent = y;
        } else {
            x = parseInt(button.value);
        }
    })
});

operatorKeys.forEach(function(button) {
    button.addEventListener("click", function() {
    return savedOperator = button.className;
    })
});



clearKey.addEventListener("click", function() {
    displayScreen.textContent = 0;
    x = 0;
    y = 0;
    z = 0;
    savedOperator = 0;
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

function clearAll() {
    displayScreen.textContent = "0";
    x = null;
    y = null;
    z = null;
    savedOperator = null;
  };
  