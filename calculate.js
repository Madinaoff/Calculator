// Функция для очистки дисплея
function clearDisplay() {
    document.getElementById('result').value = '';
}

// Функция для добавления значения на дисплей
function appendValue(value) {
    let display = document.getElementById('result');
    let currentValue = display.value;
    
    // Регулярное выражение для проверки, есть ли оператор в конце текущего значения
    const operatorPattern = /[\+\-\*\/]$/;
    
    // Если на дисплее пусто и добавляется оператор, ничего не делаем
    if (currentValue === '' && ['+', '-', '*', '/'].includes(value)) {
        return;
    }
    
    // Если текущее значение заканчивается на оператор и добавляется другой оператор, заменяем старый оператор новым
    if (operatorPattern.test(currentValue) && ['+', '-', '*', '/'].includes(value)) {
        display.value = currentValue.slice(0, -1) + value;
    } else {
        // Добавляем значение на дисплей
        display.value += value;
    }
}

// Функция для вычисления результата
function calculateResult() {
    let display = document.getElementById('result');
    let expression = display.value;

    // Удаляем лишние пробелы
    expression = expression.replace(/\s+/g, '');

    // Проверка на пустое выражение
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

    // Проверка на неправильные комбинации операторов
    const invalidPattern = /[\+\-\*\/]{2,}/;
    if (invalidPattern.test(expression)) {
        display.value = 'Error';
        return;
    }

    try {
        // Используем eval для вычисления выражения
        display.value = eval(expression);
    } catch (e) {
        display.value = 'Error'; // Показываем ошибку, если выражение некорректно
    }
}

// Функция для изменения знака числа
function toggleSign() {
    let display = document.getElementById('result');
    if (display.value) {
        display.value = (parseFloat(display.value) * -1).toString();
    }
}

// Функция для вычисления процентов
function calculatePercentage() {
    let display = document.getElementById('result');
    if (display.value) {
        display.value = (parseFloat(display.value) / 100).toString();
    }
}

// Функция для добавления точки
function appendDecimal() {
    let display = document.getElementById('result');
    let currentValue = display.value;
    
    // Если текущий ввод пустой, добавляем '0.'
    if (currentValue === '') {
        display.value = '0.';
    } else if (/[\+\-\*\/]$/.test(currentValue)) {
        // Если текущий ввод заканчивается на оператор, добавляем '0.'
        display.value += '0.';
    } else if (!currentValue.includes('.')) {
        // Если точка ещё не присутствует, добавляем её
        display.value += '.';
    }
}
