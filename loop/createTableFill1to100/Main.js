let sout = "<table class='borderTable'>"
for (let i = 0; i <= 10; i++) {
    sout = sout + "<tr>";
    for (let j = 0; j <= 10; j++) {
        sout = sout + "<td>" + i*j + "</td>";
    }
    sout = sout + "</tr>";
}
sout = sout + "</table>";
document.write(sout);
