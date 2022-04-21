let nikName = "X_men"
let myInfor = {
    name: "Tien",
    age: "18",
    address: "Hanoi",
    nikName,
    getName: function (name) {
        return this.name;
    }
}
console.log(myInfor.getName());

