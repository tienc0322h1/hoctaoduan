// class Student {
//     constructor(name, birthDate, gender, major) {
//         this._name = name;
//         this._birthDate = birthDate;
//         this._gender = gender;
//         this._major = major;
//     }
//
//     getName() {
//         return this._name;
//     }
//
//     setName(value) {
//         this._name = value;
//     }
//
//     getBirthDate() {
//         return this._birthDate;
//     }
//
//     setBirthDate(value) {
//         this._birthDate = value;
//     }
//
//     getGender() {
//         return this._gender;
//     }
//
//     setGender(value) {
//         this._gender = value;
//     }
//
//     getMajor() {
//         return this._major;
//     }
//
//     setMajor(value) {
//         this._major = value;
//     }
// }
//
// let studentInfoArr = [];
//
// function getStudentInfo() {
//     let name = document.getElementById("ipName").value;
//     let birthDate = document.getElementById("ipBirthDate").value;
//     let gender = document.getElementById("ipGender").value;
//     let major = document.getElementById("ipMajor").value;
//     let student = new Student(name, birthDate, gender, major);
//     studentInfoArr.push(student);
//     console.log(studentInfoArr)
//     showListStudent()
// }
//
// function showListStudent() {
//     let listStudentInfo = "<tr>" +
//         "<td>No</td>" +
//         "<td>Name</td>" +
//         "<td>" + "Birth Date" + "</td>" +
//         "<td>" + "Gender" + "</td>" +
//         "<td>" + "Major" + "</td>" +
//         "<tr>"
//
//     for (let i = 0; i < studentInfoArr.length; i++) {
//         let {_name, _birthDate, _gender, _major} = studentInfoArr[i];
//         listStudentInfo +=
//             "<tr>" +
//             "<td>" + (i + 1) + "</td>" +
//             "<td>" + _name + "</td>" +
//             "<td>" + studentInfoArr[i].getBirthDate() + "</td>" +
//             "<td>" + studentInfoArr[i].getGender() + "</td>" +
//             "<td>" + studentInfoArr[i].getMajor() + "</td>" +
//             "<td><button id='deleteStudent' onclick='deleteListStudent(" + i + ")'>Delete</button></td>" +
//             "<td><button id='modifyStudent' onclick='modifyStudent(" + i + ")'>Modify</button></td>" +
//             "</tr>"
//     }
//     document.getElementById("listStudents").innerHTML = listStudentInfo;
//
// }
//
// function deleteListStudent(index) {
//     studentInfoArr.splice(index, 1);
//     showListStudent();
// }
