const resultInput = document.getElementById('result');

function appendToDisplay(value) {
    resultInput.value += value;
}

function clearDisplay() {
    resultInput.value = '';
}

function calculateResult() {
    try {
        resultInput.value = eval(resultInput.value);
    } catch (error) {
        resultInput.value = 'Error';
    }
}

function toggleSign() {
    if (resultInput.value.startsWith('-')) {
        resultInput.value = resultInput.value.substring(1);
    } else {
        resultInput.value = '-' + resultInput.value;
    }
}

function percentage() {
    resultInput.value = resultInput.value / 100;
}