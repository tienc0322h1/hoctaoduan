let array = [];

function addConfirm() {
    let num = document.getElementById("inputNumber").value;
    array.push(num);
}


function disPlayConfirm() {
    let str = "";
    for (let i = 0; i < array.length; i++) {
        str += "Element " + i + " - " + array[i] + "<br>"
        document.getElementById("disPlayAll").innerHTML = str;
    }
}


