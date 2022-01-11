// !DOM methods
const input = document.getElementById('input');

const plusBtn = document.querySelector('.btn-plus');
const substractBtn = document.querySelector('.btn-substract');
const multiplyBtn = document.querySelector('.btn-multiply');
const divideBtn = document.querySelector('.btn-divide');

const action = document.querySelector('.action');
const result = document.querySelector('.result');

const userInput = input.value;

// * CONTROLLER
function outputResult(calcResult, calcDescription) {
    action.textContent = '';
    result.textContent = 0;
}

outputResult();
