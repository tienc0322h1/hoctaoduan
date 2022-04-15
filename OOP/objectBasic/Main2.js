let object7={
     name:"Thanh",
     age:27,
     height :"1m63",
     school : "codegym",
     getName: function() {
          return this.name
     }
       getAge: function(name){
          return this.age=name
          console.log(name)
     }
     getHeight: function () {
          return this.height;
     }
     getSchool: function () {
          return this.school;
     }
}
console.log(object7.getAge())
let object1={
     name:"Tien",
     age:35,
     height :"1m73",
     school : "codegym",
     experience: "3_year"
}
object7.getName()
console.log(object7)

//1. hiển thị từng   thuộc tính trong object và object1
//2. hay in ra  tên người có số tuổi lơn hơn.
//3. thay đổi giá trị của school thành CODEGYM.
//4. tạo ra 1  mảng chứa 2 object trên.
//5. viết 1 funcition chưa các thuộc tính chung của 2 objcet.