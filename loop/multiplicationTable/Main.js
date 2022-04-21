let scount = "<table border='1px' width='800px' cellspacing='0' cellpadding='3'>";
for (let i = 1; i <= 9; i++) {
    scount = scount + "<tr>";
    for (let j = 2; j <= 9; j++) {
        scount = scount + "<td>" + j + " x " + i + " = " + i * j + "</td>";
    }
    scount = scount + "</tr>";
}
scount = scount + "</table>";
document.write(scount);