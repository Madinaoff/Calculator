let currentInputValue = "";

function clearDisplay() {
    currentInputValue = "";
    document.getElementById("result").value = "";
}

function appendValue(value) {
    currentInputValue += value;
    document.getElementById("result").value = currentInputValue;
}

function calculateResult() {
    try {
        currentInputValue = eval(currentInputValue);
        document.getElementById("result").value = currentInputValue;
    } catch {
        document.getElementById("result").value = "Error";

    }
    
}