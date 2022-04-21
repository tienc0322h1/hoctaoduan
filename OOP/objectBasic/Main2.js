

let object8={
     name:"Thanh",
     age:"27",
     height :"1m63",
     school : "codegym",
}

let object3={
     name:"Tien",
     age:35,
     height :"1m73",
     school : "codegym",
     experience: "3_year"
}
function ageCompare(c, d) {
     let a = +(c.age);
     let b = +(d.name);
     if (a>b) {
          alert(c.name)
     }
     else {
          alert(d.name)
     }
}
ageCompare(object3,object8);

//1. hiển thị từng   thuộc tính trong object và object1
//2. hay in ra  tên người có số tuổi lơn hơn.
//3. thay đổi giá trị của school thành CODEGYM.
//4. tạo ra 1  mảng chứa 2 object trên.
//5. viết 1 funcition chưa các thuộc tính chung của 2 objcet.