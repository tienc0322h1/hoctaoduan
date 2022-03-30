    function doiTien() {
    let moneyInput = document.getElementById("moneyInput").value;
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;
    let tygia = toCurrency / fromCurrency;
    let result = moneyInput * tygia;
    document.getElementById("kq").innerHTML = result
}