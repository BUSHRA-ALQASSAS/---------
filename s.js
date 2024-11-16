function clearDisplay() {
    document.getElementById('result').value = '';
}

function appendToDisplay(value) {
    document.getElementById('result').value += value;
}

function deleteLast() {
    let display = document.getElementById('result').value;
    document.getElementById('result').value = display.substring(0, display.length - 1);
}

function calculate() {
    let display = document.getElementById('result').value;
    try {
        document.getElementById('result').value = eval(display);
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}
