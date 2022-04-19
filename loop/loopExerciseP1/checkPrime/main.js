function checkPrime() {
    let num = document.getElementById("inputNo").value;
    console.log(num)
    let a = 0;
    let i = 1;
    for (; i <= num; i++) {
        if (num % i == 0) {
            a++;
        }
    }
    if (a == 2 && num >= 2) {
        alert(num + " is a prime number");
    } else {
        alert(num + " is not a prime number");
    }
}
