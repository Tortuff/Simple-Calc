// !DOM methods

const input = document.querySelector("#input");

const plusBtn = document.querySelector('.btn-plus');
const substractBtn = document.querySelector('.btn-substract');
const multiplyBtn = document.querySelector('.btn-multiply');
const divideBtn = document.querySelector('.btn-divide');

const action = document.querySelector('.action');
const result = document.querySelector('.result');


// CONTROLLER
function outputResult(calcResult, calcDescription) {
    action.textContent = calcDescription;
    result.textContent = calcResult;
};

outputResult();