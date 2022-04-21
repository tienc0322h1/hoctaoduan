let num = +prompt();
let countM = 0;
let i = 2;
for (; i <= num; i++) {
    if (num % i == 0) {
        countM++;
    }
}
if (countM <= 1) {
    alert(num + " is a Prime");
} else {
    alert(num + " is not a Prime")
}