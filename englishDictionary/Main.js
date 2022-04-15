let wordInput = prompt();
let Earrs = ["hello", "goodbye", "nice", "ok"];
let Varrs = ["xin chào", "tạm biệt", "đẹp", "đồng ý"];
let flag = false;
for (let i = 0; i < Earrs.length; i++) {
    if (wordInput === Earrs[i]) {
        alert(wordInput + " : " + Varrs[i]);
        flag = true;
        break;
    }
}
if(flag === false){

    alert("No data")
} else {
    flag = false;
}
