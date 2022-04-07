let arr =
    [
        [1, 2, 3, 0, 5, 6, 7, 5],//0-
        [2, 3, 4, 5, 6, 0, 7, 8],
        [4, 5, 6, 7, 8, 9, 4, 2]
    ]

let locaArr = "";
function changeLocaArr() {
    for (let j = 0; j < arr.length; j++) {
        arr[j][arr[j].length-1] = 0;
    }console.log(arr)
}

// //b1. lấy ra phần tử cuối của từng phẩn tử trong mảng 2 chiều
// // ==> kết quả : 5,8,2
// //làm ở bên dưới
// // gợi ý sử dụng vòng lặp for  để lấy giá trị muốn lấy
// let locaArr = "";
// for (let j = 0; j <arr.length; j++ ) {
//     locaArr = arr[j][arr[j].length-1];
//
//     console.log(locaArr);
// }
//
// }
//
//
//
//
//
//
//
//
//
//
// //b2. đổi tất cả phần tử vừa lấy được thành  số 0.
// //==>
// let arrs2 = [
//     [1, 2, 3, 0, 5, 6, 7, 0],
//     [2, 3, 4, 5, 6, 0, 7, 0],
//     [4, 5, 6, 7, 8, 9, 4, 0]
// ]
//
// // function convertAllArrstoZero() {
// //     for (let i = 0; i <arrs.length; i++) {
// //         arrs[i][arrs[i].length -1] = arrs[0][7];
// //         console.log(arrs[i])
// //     }
// //
// // }
//
// //
// // gợi ý dựa vào bài 1 lấy vị array[i][j]  sau đó gán cho bằng 0
//
//
// //b3. Tính tổng các phần tử trong arr
//
// //==> kết quả = 94.
//
// // làm ở bên dưới
// let sum = 0;
// for (let i = 0 ; i< 3 ; i++) {            //0    //1
//     for (let j = 0; j<7; j++) {       //1-8         //1-8
//         sum += arr[i][j];
//     }
//      document.getElementById("x").innerHTML=sum
// }
//
//
// // gợi ý.sử dụng vòng lặp lồng nhau duyệt mảng sau đó cổng tổng từng giá trị trong mảng
//
//
// //b4 đổi tất cả phần tử bên dưới giá trị là 0 trong mảng và tính tổng.
// // kết quả ==> mảng khi đổi tất cả giá trị dưới 0.
// //      [
// //         [1, 2, 3, 0, 5, 6, 7, 0],
// //         [2, 3, 4, 0, 6, 0, 7, 0],
// //         [4, 5, 6, 0, 8, 0, 4, 0]
// //     ]
// // tính tổng.
// // bài làm bên dưới
// // gợi ý ===>
// /* bước 1 tìm được vị trí của phần tử có giá trị bằng 0.
//     bước 2 tìm đến giá trị dọc theo cột có giá trị k sau đó gán lại cho nó bằng 0.
//     tìm hiểu thêm về tọa độ x,y để dễ hình dung. bài này x sẽ tăng lên 1 đơn vị y giữ nguyên
//     bước 3 tính tổng các phần tử trong array.
//
//
//  */
//
//