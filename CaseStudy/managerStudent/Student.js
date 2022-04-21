class Student {
    constructor(name, birthDate, gender, major) {
        this._name = name;
        this._birthDate = birthDate;
        this._gender = gender;
        this._major = major;
    }

    getName() {
        return this._name;
    }

    getBirthDate() {
        return this._birthDate;
    }

    getGender() {
        return this._gender;
    }

    getMajor() {
        return this._major;
    }

    setName(name) {
        this._name = name;
    }

    setBirthDate(birthDate) {
        this._birthDate = birthDate;
    }

    setGender(gender) {
        this._gender = gender;
    }

    setMajor(major) {
        this._major = major;
    }
}

let studentInfoArr = [];

function addStudentInfo() {
    let name = document.getElementById("idName").value;
    let birthDate = document.getElementById("idBirthDate").value;
    let gender = document.getElementById("idGender").value;
    let major = document.getElementById("idMajor").value;
    let student = new Student(name, birthDate, gender, major);
    studentInfoArr.push(student);
    console.log(studentInfoArr);
    showListStudent();
    cleanInPut();
}

function cleanInPut() {
    document.getElementById("idName").value = ""
    document.getElementById("idBirthDate").value = ""
    document.getElementById("idGender").value = ""
    document.getElementById("idMajor").value = ""

}

function showListStudent() {
    let listStudent = ""
    for (let i = 0; i < studentInfoArr.length; i++) {
        listStudent += '<tr>' +
            `<td>${i + 1}</td>` +
            `<td>${studentInfoArr[i].getName()}</td>` +
            `<td>${studentInfoArr[i].getBirthDate()}</td>` +
            `<td>${studentInfoArr[i].getGender()}</td>` +
            `<td>${studentInfoArr[i].getMajor()}</td>` +
            `<td><button id="idDelete" onclick="deleteStudentList(${i})">Delete</button></td>` +
            `<td><button id="idModify" onclick="modifyStudentList(${i})">Modify</button></td>` +
            '</tr>'
    }
    document.getElementById("listStudents").innerHTML = listStudent;
}

function deleteStudentList(index) {
    if (confirm("are you sure to delete?"))
    studentInfoArr.splice(index, 1);
    showListStudent();
}

function modifyStudentList(index) {
    document.getElementById("idName").value = studentInfoArr[index].getName();
    document.getElementById("idBirthDate").value = studentInfoArr[index].getBirthDate();
    document.getElementById("idGender").value = studentInfoArr[index].getGender();
    document.getElementById("idMajor").value = studentInfoArr[index].getMajor();
    document.getElementById("idSubmitModify").value = index
}

function submitModifyStudent() {
    let index = document.getElementById("idSubmitModify").value;
    let name = document.getElementById("idName").value;
    let birthDate = document.getElementById("idBirthDate").value;
    let gender = document.getElementById("idGender").value;
    let major = document.getElementById("idMajor").value;
    studentInfoArr[index].setName(name);
    studentInfoArr[index].setBirthDate(birthDate) ;
    studentInfoArr[index].setGender(gender);
    studentInfoArr[index].setMajor(major);
    showListStudent();
}