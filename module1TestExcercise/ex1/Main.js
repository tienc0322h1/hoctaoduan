let arr = prompt()
let sum = 0;
for (let i = 0; i < arr.length; i + 2) {
    if (arr[i] % 2 != 0) {
        sum = (sum + arr[i])/ i;
    }break;
}
