const inventory = [

    {type: "machine", value: 5000},


    {type: "machine", value: 650},


    {type: "duck", value: 10},


    {type: "furniture", value: 1200},


    {type: "machine", value: 77}


]
let sum = 0;
for (let i = 0; i < inventory.length; i++) {
    sum += inventory[i].value;
}

console.log(sum)