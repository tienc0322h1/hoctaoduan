function setInput(number) {
    document.getElementById('input').value += number;
}

function clearInput() {
    document.getElementById('input').value = '';
}

function calculator() {
    let input = document.getElementById('input').value;
    let result = eval(input); // eval('1+2') -> 3 -> ham tinh toan bieu thuc dang chuoi
    document.getElementById('input').value = result;
}