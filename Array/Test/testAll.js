
// let arr2 = arr1.slice(1,5);
// let arr3 = arr1.splice(1,2);
// console.log(arr2)
// console.log(arr3)
function splArr(array, from, to, ...element) {
    arr.splice(array, from, to - from, ...element)
}
let arr1 = [1,2,3,4,5,6,8,9];
let element = [11,12,13]
splArr(arr1, 2, 5, [11,12,13]);
console.log(arr1)