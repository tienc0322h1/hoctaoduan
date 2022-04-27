// kieu array, khai bao bien la mang co kieu du lieu number hoac string
let Listnum: number[] = [1, 2, 3, 4, 5];
let ListNum2: Array<number> = [1, 2, 3, 4, 5, 6, 7];
let listName: string[] = ["hue", "lan", "cuc"];
let listName2: Array<string> = ["hue", "lan", "cuc"]
// kieu tuple: khai bao mang voi cac gia tri co kieu du lieu da biet
let x: [string, number];
x = ["CodeGym", 2021];

// data type enum: cho phep mot bien co the la mot trong cac hang so duoc dinh san
enum vnBigCity {Hanoi, Danang, SaiGon};
let capital: vnBigCity = vnBigCity.Hanoi;

//Interface: là một cấu trúc hoạt động theo khuôn mẫu. Nó định nghĩa cú pháp cho các lớp tuân theo,
// có nghĩa một lớp triển khai interface ràng buộc để triển khai các thuộc tính, phương thức.
// nó không thể được khởi tạo nhưng có thể tham chiểu bởi lớp thực thi nó.
interface Calc {
    subtract(first: number, second: number): any;
}

let Calculator: Calc = {
    subtract(first: number, second: number) {
        return first - second;
    }
}

// named function with number as parameters type and return type
function add(a: number, b: number): number {
    return a + b;
}

// (ẩn danh=anonymuos)anonymous function with number as parameters type and return type
let sum = function (a: number, b: number): number {
    return a + b
};
// Generic: được sử dụng để tạo một thành phần cho phép làm việc với nhiều kiểu dữ liệu khác nhau; tái sử dụng; mở rộng
// TSC sử dụng generic vs biến kiểu <T>
function idenify<T>(agr:T): T {
    return agr;
}
let output1 = idenify<string>("mystring");
let output2 = idenify<number.>(100);
// Decorators: is special data type, its attached (included) with creat Class, function, method, accessor, parameter
// it provides the way to add command and meta programing syntax for Classes and function. its used with "@" symbol
// Decorators: is experimental feature
function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

class C {
    @f()
    method() {}
}

