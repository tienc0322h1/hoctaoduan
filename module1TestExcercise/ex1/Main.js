let array=[1,2,3,4,5,6,7,8,9,23,25,37];
function getAddArr(arr) {
    let oddArr = [];
    for (let i = 0; i < arr.length; i += 2) {
        oddArr += arr[i];
    }
     return evrOddNum(oddArr);
}
function evrOddNum(arr) {
    let sumOdd = 0;
    let countOdd = 0;
    for (let j =0; j<arr.length; j++) {
        if (arr[j]%2!==0) {
            countOdd++;
            sumOdd += parseInt(arr[j]);
        }
    }
    console.log(sumOdd)
    console.log(countOdd)
    return sumOdd/countOdd;
}
let b= getAddArr(array);
console.log(b);