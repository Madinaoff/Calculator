// Функция для очистки дисплея
function clearDisplay() {
    document.getElementById('result').value = '';
}

// Функция для удаления последнего символа
function deleteLastCharacter() {
    let display = document.getElementById('result');
    let currentValue = display.value;
    if (currentValue.length > 0) {
        display.value = currentValue.slice(0, -1);
    }
}

function appendValue(value) {
    let display = document.getElementById('result');
    let currentValue = display.value;
    
    // Регулярное выражение для проверки, есть ли оператор в конце текущего значения
    const operatorPattern = /[\+\-\*\/]$/;
    
    if (currentValue === '' && ['+', '-', '*', '/'].includes(value)) {
        return;
    }
    // Если текущее значение заканчивается на оператор и добавляется другой оператор, заменяем старый оператор новым
    if (operatorPattern.test(currentValue) && ['+', '-', '*', '/'].includes(value)) {
        display.value = currentValue.slice(0, -1) + value;
    } else {
        display.value += value;
    }
}

// Функция для вычисления результата
function calculateResult() {
    let display = document.getElementById('result');
    let expression = display.value;
    expression = expression.replace(/\s+/g, '');
    if (expression === '') {
        return;
    }

    // Проверка, начинается ли выражение с оператора
    if (/^[\+\-\*\/]/.test(expression)) {
        display.value = 'Error';
        return;
    }

    // Проверка на недопустимое окончание
    if (/[+\-*/]$/.test(expression)) {
        display.value = 'Error';
        return;
    }

    const invalidPattern = /[\+\-\*\/]{2,}/;
    if (invalidPattern.test(expression)) {
        display.value = 'Error';
        return;
    }
    try {
        display.value = eval(expression.replace(/÷/g, '/').replace(/x/g, '*'));
    } catch (e) {
        display.value = 'Error'; 
    }
}

// Функция для вычисления процентов
function calculatePercentage() {
    let display = document.getElementById('result');
    let currentValue = display.value;
    
    if (currentValue === '') {
        return;
    }

    let number = parseFloat(currentValue);
    if (!isNaN(number)) {
        display.value = (number / 100).toString();
    } else {
        display.value = 'Error';
    }
}

// Функция для добавления точки
function appendDecimal() {
    let display = document.getElementById('result');
    let currentValue = display.value;
    
    if (currentValue === '') {
        display.value = '0.';
    } else if (/[\+\-\*\/]$/.test(currentValue)) {
        display.value += '0.';
    } else if (!currentValue.includes('.')) {
        display.value += '.';
    }
}
