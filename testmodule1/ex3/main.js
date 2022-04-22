function checkString(a, b) {
    if (a.length > b.length) {
        alert("a không nằm trong b");
    }else {
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                alert("a không nằm trong b");
            }else {
                alert("a nằm trong b");
            }
        }
    }

}

checkString("okokokokokokok", "okokokok")