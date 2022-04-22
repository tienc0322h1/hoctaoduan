function tryRemoveFromArray(arr, n) {
    if (n <= arr.length - 1 && n >= 0) {
        for (let i = n; i < arr.length; i++) {
            b = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = b;
        }
        arr.pop()
        console.log(arr)
    }
}

tryRemoveFromArray([1, 2, 3, 5, 7], 2)


