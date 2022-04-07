function increaseNum(num) {
     num = +document.getElementById("putnumber").value;
    console.log(num)
    num = num + 1
    document.getElementById("increaseConfirmShow").innerHTML = num

}

