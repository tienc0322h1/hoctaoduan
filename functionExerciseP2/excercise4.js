function checkTypeof() {
    let mess = +prompt();
    if (mess === parseInt(mess)) {
        alert("its a num");
    }else {
        alert("its a string")
    }

}checkTypeof()