function calFactorial() {
    let num = +prompt();
    let fact = 1;
    for (let i =1; i <= num; i++) {
        fact *= i;
    }return fact;

}alert(calFactorial())




