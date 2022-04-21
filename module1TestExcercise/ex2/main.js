let a = +prompt();
let b = +prompt()
let suma = 0;
let sumb = 0;
for (let i = 0; i < a; i++) {
    if (a / i == 0) {
        suma += i;
    }
}
for (let j = 0; j < b; j++) {
    if (b / j == 0) {
        sumb += j
    }
}

if (suma == b & sumb == a) {
    document.write("true")
} else {
    document.write("fale")
}



