const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
    return parseInt(userInput);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const calcDesc = `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult + enteredNumber;
    outputResult(currentResult, calcDesc);
}
console.log(plusBtn);

plusBtn.addEventListener('click', add);
