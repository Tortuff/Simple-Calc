const defaultResult = 0;
let currentResult = defaultResult;
let operand;
let userInput = input.value;

function getUserNumberInput() {
    userInput = input.value;

    return parseInt(userInput);
};

function createAndWriteOutput (operator, fNum, sNum) {
    const calcDescription = `${fNum} ${operator} ${sNum}`;

    outputResult(currentResult, calcDescription);
}

function calculateResult(calculateType) {
    const enteredNumber = getUserNumberInput();
    const prevNumber = currentResult;

    if(calculateType === "ADD") {
        currentResult += enteredNumber;

        operand = '+';
    } else if (calculateType === "SUB") {
        currentResult -= enteredNumber;

        operand = '-';
    } else if(calculateType === "MULT") {
        currentResult *= enteredNumber;

        operand = '*';
    } else if (calculateType === "DIV") {
        currentResult /= enteredNumber;

        operand = '/';
    };

    createAndWriteOutput(operand, prevNumber, enteredNumber);
};

function add() {
    calculateResult('ADD');
};

function substract() {
    calculateResult('SUB');
};

function multiply() {
    calculateResult('MULT');
};

function divide() {
    calculateResult('DIV');
};

plusBtn.addEventListener('click', add);
substractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
