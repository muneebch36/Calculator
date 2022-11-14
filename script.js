const numberKeys = document.querySelectorAll(".number");
const displayScreen = document.querySelector(".display");
const operatorKeys = document.querySelectorAll("#operator");
const equalKey = document.querySelector(".equal");

let x = 0;
let y = 0;
let z = 0;

const divide = function(x,y) {
    let z = x / y;
    return z;
}

const multiply = function(x,y) {
    let z = x * y;
    return z;
}

const subtract = function(x,y) {
    let z = x - y;
    return z;
}

const add = function(x,y) {
    let z = x + y;
    return z;
}

numberKeys.forEach(function(button) {
    button.addEventListener("click", function() {
    displayScreen.value += button.value
    return x = parseInt(button.value);
    })
});

operatorKeys.forEach(function(button) {
    button.addEventListener("click", function() {
    return y = button.className;
    })
});


