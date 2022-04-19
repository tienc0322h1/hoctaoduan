class Product {
    constructor(name, color, taste, weight) {
        this._name = name;
        this._color = color;
        this._taste = taste;
        this._weight = weight;
    }

    getName() {
        return this._name;
    }

    getColor() {
        return this._color;
    }

    getTaste() {
        return this._taste;
    }

    getWeight() {
        return this._weight;
    }

    setName(name) {
        this._name = name;
    }

    setColor(color) {
        this._color = color;
    }

    setTaste(taste) {
        this._taste = taste;
    }

    setWeight(weight) {
        this._weight = weight;
    }
}

let productArr = [];

function getProductInfo() {
    let name = document.getElementById("idName").value;
    let color = document.getElementById("idColor").value;
    let taste = document.getElementById("idTaste").value;
    let weight = document.getElementById("idWeight").value;
    let product = new Product(name, color, taste, weight);
    productArr.push(product);
    showListProduct();
    cleanInput()

}

function cleanInput() {
    document.getElementById("idName").value = "";
    document.getElementById("idColor").value = "";
    document.getElementById("idTaste").value = "";
    document.getElementById("idWeight").value = "";
}

function showListProduct() {
    let listProduct = "";
    for (let i = 0; i < productArr.length; i++) {
        listProduct += '<tr>' +
            `<td>${(i + 1)}</td>` +
            `<td>${productArr[i].getName()}</td>` +
            `<td>${productArr[i].getColor()}</td>` +
            `<td>${productArr[i].getTaste()}</td>` +
            `<td>${productArr[i].getWeight()}</td>` +
            `<td><button id='idDelete' onclick='deleteProductInList(${i})'>Delete</button></td>` +
            `<td><button id='idModifyProductInfo' onclick='modifyProductInfoInList(${i})'>Modify</button></td>` +
            '</tr>'
    }
    document.getElementById("idListProduct").innerHTML = listProduct;
}

function deleteProductInList(index) {
    productArr.splice(index, 1);
    showListProduct()
}

function modifyProductInfoInList(index) {
    document.getElementById("idName").value = productArr[index].getName();
    document.getElementById("idColor").value = productArr[index].getColor();
    document.getElementById("idTaste").value = productArr[index].getTaste();
    document.getElementById("idWeight").value = productArr[index].getWeight();
    document.getElementById("idSubmitModify").value = index;

}

function submitModify() {
    let index = document.getElementById("idSubmitModify").value;
    let name = document.getElementById("idName").value;
    let color = document.getElementById("idColor").value;
    let taste = document.getElementById("idTaste").value;
    let weight = document.getElementById("idWeight").value;

    productArr[index].setName(name);
    productArr[index].setColor(color);
    productArr[index].setTaste(taste);
    productArr[index].setWeight(weight);
    showListProduct();
    cleanInput()
}