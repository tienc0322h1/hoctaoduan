function revertArrange() {
    let arrs = [-3, 5, 1, 3, 2, 10];
    let i = 0;
    let j = arrs.length - 1;
    while (i < j) {
        let b = arrs[i];
        arrs[i] = arrs[j];
        arrs[j] = b;
        i++;
        j--;
    }
    console.log(arrs)
    return arrs;
}

revertArrange()