class Student {
    constructor(name, birthDate, gender, major, startDate) {
        this._name = name;
        this._birthdate = birthDate;
        this._gender = gender;
        this._major = major;
        this._startDate = startDate;
    }

    getName() {
        return this._name;
    }

    getBirthDate() {
        return this._birthdate;
    }

    getGender() {
        return this._gender;
    }

    getMajor() {
        return this._major;
    }

    getStartDate() {
        return this._startDate;
    }
}