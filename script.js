const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const igual = document.getElementById("igual");
const backspace = document.getElementById('backspace');
const display = document.getElementById('display');
const clear = document.getElementById('clear');
const decimal = document.getElementById('puntoDecimal');

number.forEach(numbers => {
    numbers.addEventListener('click', () => {
        display.value += numbers.textContent;
    });
});

decimal.addEventListener('click', () => {
    display.value += decimal.textContent;
});

operator.forEach(operators => {
    operators.addEventListener('click', () => {
        display.value += operators.textContent;
    })
});

igual.addEventListener('click', () => {
    try {
        display.value = new Function("return " + display.value)();
    } catch {
        display.value = "Error";
    }
});

clear.addEventListener('click', () => {
    display.value = "";
});

backspace.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});