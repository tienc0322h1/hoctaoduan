let studentManager = new StudentManage();

function getStudentInfo() {
    let name = document.getElementById('idName').value;
    let birthDate = document.getElementById("idStartDate").value;
    let gender = document.getElementById("idGender").value;
    let major = document.getElementById("idMajor").value;
    let startDate = document.getElementById("idStartDate").value;
    studentManager.add(name, birthDate, gender, major, startDate);
}

studentManager.showList();

function deleteStudent(index) {
    if (confirm("are you sure?")) {
        studentManager.destroy(index);
    }
}

