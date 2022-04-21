class StudentManage {
    constructor() {
        this.arr = [];
    }

    add(name, birthDate, gender, major, startDate) {
        let student = new Student(name, birthDate, gender, major, startDate)
        this.arr.push(student);
        this.showList();
        this.cleanInput();
    }

    showList() {
        //hien thi danh sach
        let html = '';
        if (this.arr.length === 0) {
            html += '<tr>';
            html += '<td colspan="6">No data</td>';
            html += '</td>'
        } else {
            for (let i = 0; i < this.arr.length; i++) {
                html += '<tr>';
                html += `<td>${i + 1}</td>`;
                html += `<td>${this.arr[i].getName()}</td>`;
                html += `<td>${this.arr[i].getBirthDate()}</td>`;
                html += `<td>${this.arr[i].getGender()}</td>`;
                html += `<td>${this.arr[i].getMajor()}</td>`;
                html += `<td>${this.arr[i].getStartDate()}</td>`;
                html += `<td><button onclick="updateStudentInfo((${i}))">Modify</button></td>`;
                html += `<td><button onclick="deleteStudent(${i})">Delete</button></td>`;
                html += '</tr>';
            }
        }
        document.getElementById("listStudents").innerHTML = html;

    }

    cleanInput() {
        document.getElementById("idName").value = "";
        document.getElementById("idBirthDate").value = "";
        document.getElementById("idGender").value = "";
        document.getElementById("idMajor").value = "";
        document.getElementById("idStartDate").value = "";

    }

    destroy(index) {
        this.arr.splice(index, 1);
        console.log(this.arr)
        this.showList();
    }
}
