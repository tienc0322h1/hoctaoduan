let num = parseInt(document.getElementById("inputNumber"))
function checktPrimeNumber(num) {
    let a = 0;
    let i = 1;
    for (; i <= num; i++) {
        if (num % i == 0) {
            a++;
        }
    }
    if (a == 2 && num >= 2) {
        return 1;
    } else {
        return -1;
    }
}
function printPrimeListnumber(num) {
    for (let i = 0; i<num; i++) {
        if (checktPrimeNumber(i) == 1) {
            console.log(i)
        }
    }
}printPrimeListnumber(num);
console.log(printPrimeListnumber(num));


