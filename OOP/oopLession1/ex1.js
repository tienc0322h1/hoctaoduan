class c0322H1 {
    // thuoc tinh cua doi tuonmg
    constructor(name, paticipant, date, field) {
        this.name=name;
        this.paticipant= paticipant;
        this.date =  date;
        this.field = field;
    }
    // hanh donng chung
    getName(){
        return this.name
    }

}
// khoi tao 1 đoi tuong thuoc lop
let object=new c0322H1("toi", "codegym", 4, "ltcb");
let object1=new c0322H1("toi", "codegym", 4, "ltcb");

console.log(object);
console.log(object1);
let a=[object,object1];

class date {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    getDay() {
        return this.Day;
    }
    getMonth() {
        return this.month;
    }
    getYear() {
        return this.year;
    }
    setDay(day) {
        this.day = day
    }
}
let checkDateW14Y2022 = new date(8, 4, 2022);
checkDateW14Y2022.setDay(9)
console.log(checkDateW14Y2022);
