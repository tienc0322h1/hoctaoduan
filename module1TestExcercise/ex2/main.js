let a = +prompt();
let b = +prompt();
let suma = 0;
let sumb = 0;
for (let i = 2; i <= a; i++) {
    if (a % i === 0) {
        suma += a/i;
    }
}
for (let j = 2; j <= b; j++) {
    if (b%j===0) {
        sumb += b / j;
    }
}
if (suma === b && sumb === a) {
    alert("true");
} else {
    alert("false")
}
