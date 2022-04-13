class ProductManager {
    constructor() {
        this._products = [];
    }

    showListProduct() {
        let html = ""
        if (this._products.length === 0) {
            html += '<tr>'
            html += '<td colspan=\'6\'>No Data</td>'
            html += '</tr>'
        } else {
            for (let i = 0; i < this._products.length; i++)
                html += '<tr>';
                html += `<td>${this._products[i].getName()}</td>`;
                html += `<td>${this._products[i].getPrice()}</td>`;
                html += `<td>${this._products[i].getAuthor()}</td>`;
                html += `<td><button onclick="deleteProduct(${i})">Delete</button></td>`;
                html += `</tr>`;
        }
    }
}
