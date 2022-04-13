class myDate {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    getDay() {
        return this.day;
    }

    getMonth() {
        return this.month;
    }

    getYear() {
        return this.year;
    }

    setDay(day) {
        this.day = day;
    }

    setMonth(month) {
        this.month = month;
    }

    setYear(year) {
        this.year = year;
    }

}

let date1 = new myDate(2, 12, 2022);
// let day = date.getDay();
// let month = date.getMonth();
// let year = date.getYear();
date1.setDay(3);
date1.setMonth(11);
date1.setYear(2021);

