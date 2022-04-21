class Book {
    constructor(code, name, yearEx, quantity, status) {
        this._code = code;
        this._name = name;
        this._yearEx = yearEx;
        this._quantity = quantity;
        this._status = status;
    }

    getCode() {
        return this._code;
    }

    getName() {
        return this._name;
    }

    getYearEx() {
        return this._yearEx;
    }

    getQuantity() {
        return this._quantity;
    }

    getStatus() {
        return this._status;
    }

    setCode(code) {
        this._code = code;
    }

    setName(name) {
        this._name = name;
    }

    setYearEX(yearEx) {
        this._yearEx = yearEx;
    }

    setQuantity(quantity) {
        this._quantity = quantity;
    }

    setStatus(status) {
        this._status = status;
    }
}

let bookArr = [];
function addBookInfo() {
    let code = document.getElementById("idCode").value;
    let name = document.getElementById("idName").value;
    let yearEX = document.getElementById("idYearEx").value;
    let quantity = document.getElementById("idQuantity").value;
    let status = document.getElementById("idStatus").value;
    let book = new Book(code, name, yearEX, quantity, status)
    bookArr.push(book);
    showListBook();
    cleanInput();
}

function showListBook() {
    let listBook = "";
    for (let i = 0; i < bookArr.length; i++) {
        listBook += '<tr>' +
            `<td>${bookArr[i].getCode()}</td>` +
            `<td>${bookArr[i].getName()}</td>` +
            `<td>${bookArr[i].getYearEx()}</td>` +
            `<td>${bookArr[i].getQuantity()}</td>` +
            `<td>${bookArr[i].getStatus()}</td>` +
            '</tr>'
    }

    document.getElementById("showListB").innerHTML = listBook;
}

function cleanInput() {
    document.getElementById("idCode").value = ""
    document.getElementById("idName").value = ""
    document.getElementById("idYearEx").value = ""
    document.getElementById("idQuantity").value = ""
    document.getElementById("idStatus").value = ""
}

function compareQuantity() {
    let arr2 = [...bookArr]
    arr2.sort((a, b) => {
        return b._quantity - a._quantity
    })
    alert(arr2[0]._name)
}

