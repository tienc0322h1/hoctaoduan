// Bài 1,
//     Khai báo số x có giá trị bất kỳ
// Nếu x < 0 thì in ra x là số âm
// Nếu x = 0 thì in ra x = 0
// Nếu x > 0, và x là số nguyên thì in ra x là số nguyên dương
// Nếu x > 0, và là số thập phân thì in ra x là số thập phân dương
//
// // Bài 2,
// let x = 5
//
// let a = 5 + x++ + 10;
//
//
// let b = 5 + ++x + 10;
//
//
// let c = 5 + x-- + 10;
//
// let d = 5 + --x + 10;
//
// let e = x + x++ + ++x + x++ + --x - x - -+x;
// console.log(e);
// a,b,c, d, e có giá trị là bao nhiêu ?
// a =20, b =22, c = 22,d 20,e 31
//
//     Bài 3: cho
// let array = [1, 5, 7, 8, 9, 15, 8]
// let i = 0;

//
// 1.1 in ra các số chẵn của mảng
// 1.2 in ra các số lẻ của mảng
// function findEven() {
//
//     let arr2 = [];
//     let arr3 =[];
//
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             arr2.push(array[i]);
//         }
//         else {
//             arr3.push(array[i]);
//         }
//     }
//     console.log(array);
//     console.log(arr2);
//     console.log(arr3);
// }
// findEven()
// 1.3 in ra các số lớn hơn hoặc bằng 5 của mảng
// function findNumless5() {
//     let arr4 = [];
//     for (; i <array.length; i++) {
//         if (array[i] >= 5) {
//             arr4.push(array[i]);
//         }
//     }
//     console.log(arr4);
// }
// findNumless5()

// 1.4 Cộng tổng các số chia hết cho 5 của mảng
// function findDivisible5() {
//     let countDivi5 = 0;
//     for (; i <array.length; i++) {
//         if (array[i]%5 === 0)
//         countDivi5 += array[i];
//     }
//     console.log(countDivi5);
// }findDivisible5()
// 1.5 Tìm ra tích 3 số đầu của mảng array
// function multi3Num() {
//     let multiplyFisrt3 = array[0]*array[1]*array[2];
//     console.log(multiplyFisrt3);
// }multi3Num()
// 1.6 Tính tổng 3 phần tử cuối của mảng
// function totalLast3() {
//     let sum3 = array[array.length-1]*array[array.length-2]*array[array.length-3];
//     console.log(sum3)
// }totalLast3()

// 1.7 Tìm xem trong array có phần tử nào là số 5 không?
// function find5Num() {
//     let index5Arr = []
//     for (i = 0; i < array.length; i++) {
//         if (array[i] === 5) {
//             index5Arr.push(i);
//         }
//     }
//     console.log(index5Arr);
// }find5Num()

//     1.8 Đếm số phần tử = 8 trong mảng;
// function countN8() {
//     let countNum8 = 0;
//     for (i = 0; i < array.length; i++) {
//         if (array[i] === 8) {
//             countNum8++;
//         }
//     }
//     console.log(countNum8)
// }countN8()

//
// Bài 4: cho var data = [3,2,4,1,8,7,1,10,1,2]
// let dataArr = [3, 2, 4, 1, 8, 7, 1, 10, 1, 2];
// let i = 0;
// let sumdataArr = 0;
// let multiplyDtaArr = 1;
// let sumOdd = 0;
// let multiplyEvenNumArr = 1;

// a, tính tổng các phần tử trong array
// b, tính tích các phần từ trong array
// function sumArrData() {
//     for (i = 0; i < dataArr.length; i++) {
//         sumdataArr += dataArr[i];
//         multiplyDtaArr = multiplyDtaArr * dataArr[i];
//     }
//     console.log(sumdataArr);
//     console.log(multiplyDtaArr);
// }
// sumArrData()
// c, tính tổng các số lẻ trong array
// function sumOddArr() {
//     for (i = 0; i < dataArr.length; i++) {
//         if (dataArr[i] % 2 !== 0) {
//             sumOdd += dataArr[i];
//         }
//     }
//     console.log(sumOdd)
// }sumOddArr()
// d, tính tích các số chẵn trong array
// function multiplyEvenNum() {
//     for (i = 0; i < dataArr.length; i++) {
//         if (dataArr[i] % 2 === 0) {
//             multiplyEvenNumArr = multiplyEvenNumArr * dataArr[i]
//         }
//     }
//     console.log(multiplyEvenNumArr)
// }multiplyEvenNum();

// e, có mấy số 1 trong array, ở những vị trí nào
// f, số 1 đầu tiền và số 1 cuối cùng ở vị trí nào trong array
// function findOne() {
//     let countOneNum = 0;
//     let countIndexNum0 = [];
//     for (i = 0; i < dataArr.length; i++) {
//         if (dataArr[i] === 1) {
//             countOneNum++;
//             countIndexNum0.push(i)
//         }
//     }
//
//     console.log(countOneNum);
//     console.log(countIndexNum0);
// }
//
// findOne()


// Bài 5: cho var data = [3,2,4,'5',1,8,7,'9']
// a, tính tổng các phần tử trong array trên
// let dataArr5 = [3, 2, 4, '5', 1, 8, 7, '9'];
// let i = 0;

// function sumArr5total() {
//     let sumArr5 = 0;
//     for (i = 0; i < dataArr5.length; i++) {
//         sumArr5 += parseInt(dataArr5[i]);
//     }
//     console.log(sumArr5)
// }
//
// sumArr5total()

// b, hãy tạo ra array2 chứa các phần tử có giá trị lẻ của data
// function creatArr52() {
//     let Arr52 = []
//     for (i = 0; i < dataArr5.length; i++) {
//         if (dataArr5[i] % 2 !== 0) {
//             Arr52.push(dataArr5[i]);
//         }
//     }
//     console.log(Arr52)
// }creatArr52()

// c, hãy tạo ra array3 chứa các phần tử của data theo thứ tự đảo ngược
// // kết quả [ '9', 7, 8, 1, '5', 4, 2, 3]
// function invertArr5() {
//     let invertDataArr5 = [];
//     for (i = 0; i < dataArr5.length; i++) {
//         invertDataArr5.push(dataArr5[(dataArr5.length-1)-i])
//     }
//     console.log(invertDataArr5)
// }invertArr5()

// Bài 6 var array = [1,9,3,7,6,4,5,2]
// let dataArr6 = [1, 9, 3, 7, 6, 4, 5, 2];
// let i = 0;
// let maxNum = dataArr6[0];
// let minNum = dataArr6[0];

// a, Hãy lấy ra số lơn nhất trong array
// function findMaxNum() {
//     for (i = 0; i < dataArr6.length; i++) {
//         if (maxNum<dataArr6[i]) {
//             maxNum = dataArr6[i];
//         }
//     }
//     console.log(maxNum)
// }findMaxNum()

// b, Hãy lấy ra số chẵn nhỏ nhất trong array
// function findMinNumArr6() {
//     for (i = 0; i < dataArr6.length; i++) {
//         if (minNum>dataArr6[i]) {
//             minNum = dataArr6[i];
//         }
//     }
//     console.log(minNum)
// }findMinNumArr6()

//
// Bài 7 Hãy tính tổng số lượng sản phẩm của các phần tử trong array
// let sanPham = [
//     {
//         ten: "áo somi",
//         soLuong: 100,
//     },
//     {
//         ten: "áo khoác",
//         soLuong: 50,
//     },
//     {
//         ten: "áo phông",
//         soLuong: 200,
//     }
// ];
//
//
// function sumDataArr7() {
//     let sumData7 = 0;
//     for (let i = 0; i < sanPham.length; i++) {
//         sumData7 += sanPham[i].soLuong
//     }
//     console.log(sumData7)
// }
//
// sumDataArr7()

//
// Bài 8: cho data = [3,2,4,1,8,7]
// let data8 = [3, 2, 4, 1, 8, 7];

// function sortIncrease() {
//     let min = data8[0];
//     let i = 0;
//
//     while (i === (data8.length-1)) {
//         if (data8[i]<min) {
//             min = data8[i];
//             minArr8.push(min)
//         }
//     }
//     console.log(minArr8)
// }sortIncrease()

// a, hãy dùng while để sắp xếp array theo chiều tăng dần
// b, hãy dùng while để sắp xếp array theo chiều giảm dần
//
//
//
