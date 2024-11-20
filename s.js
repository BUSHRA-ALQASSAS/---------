let memory = [];
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
        let result = eval(display);
        document.getElementById('result').value = result;
        memory.push(`${display} = ${result}`);
        updateMemoryList();
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}
function toggleMemory() {
    let sidebar = document.getElementById('memory-sidebar');
    sidebar.classList.toggle('active');
}

function updateMemoryList() {
    let memoryList = document.getElementById('memory-list');
    memoryList.innerHTML = '';
    for (let entry of memory) {
        let li = document.createElement('li');
        li.textContent = entry;
        memoryList.appendChild(li);
    }
}
/*عرفنا مصفوفة memory لتخزين العمليات.

دالة calculate الآن تضيف العمليات إلى الذاكرة عند حساب النتيجة.

دالة toggleMemory لتفعيل أو إخفاء الشريط الجانبي.

دالة updateMemoryList لتحديث قائمة العمليات المخزنة في الشريط الجانبي.
*/