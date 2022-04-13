class ManageSoftDrink {
    constructor(name, color, taste, weight) {
        this.name = name;
        this.color = color;
        this.taste = taste;
        this.weight = weight;
    }

    getName() {
        return this.name;
    }

    getColor() {
        return this.color;
    }

    getTaste() {
        return this.taste;
    }

    getWeight() {
        return this.weight;
    }

    setName(name) {
        this.name = name;
    }

    setColor(color) {
        this.color = color;
    }

    setTaste(taste) {
        this.taste = taste;
    }

    setWeight(weight) {
        this.weight = weight;
    }

}
let array=[];
function GetProductInfor(name, color, taste, weight) {
    name = document.getElementById("inputName").value;
    color = document.getElementById("inputColor").value;
    taste = document.getElementById("inputTaste").value;
    weight = document.getElementById("inputWeight").value;
    let inAllProduct = new ManageSoftDrink(name, color, taste, weight);
    array.push(inAllProduct)
    console.log(array)
}

