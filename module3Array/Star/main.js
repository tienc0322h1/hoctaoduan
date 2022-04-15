function getArray2Position() {
    let a = prompt();
    console.log(a)
    let arrs1 = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
    let arrs2 = ["UrsaMinor", "Tarurus", "Cygnus", "Lyra", "Aquila", "UrsaMajor", "Leo"];
    for (let i = 0; i < arrs1.length; i++) {
        if (arrs1[i] === a) {
            alert(arrs2[i]);
            break;
        } else {
            alert("no data Constellation");
            break;
        }
    }
}

getArray2Position();