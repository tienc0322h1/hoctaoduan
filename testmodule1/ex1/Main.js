function findtheThirt(arr) {
    let max1 = arr[0];
    let max1_index = 0;
    for (let i = 0; i<arr.length; i++) {
        if (max1<arr[i]) {
            max1 = arr[i];
            max1_index = i;
        }
    }
    arr.splice(max1_index,1);
    console.log(arr);

}findtheThirt([1,2,3,2,1,6,7])