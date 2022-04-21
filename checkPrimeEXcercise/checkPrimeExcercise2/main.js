let n = +prompt();
let count = 0;
for (let i = 2; i <= n; i++) {
    checkPrime(i)
    console.log(i);
    count++;
}