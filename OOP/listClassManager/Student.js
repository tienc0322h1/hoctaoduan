class Student {
    constructor(name, birthDate, gender, major, startDate) {
        this._name = name;
        this._birthDate = birthDate;
        this._gender = gender;
        this._major = major;
        this._startDate = startDate;
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

    getStartDate() {
        return this._startDate;
    }
    setName(name) {
        this._name = name;
    }
    setBirthDate(birthDate) {
        this._birthDate = birthDate
    }
    setGender(gender) {
        this._gender = gender;
    }
    setMajor(major) {
        this._major = major;
    }
    setStartDate(startDate) {
        this._startDate = startDate;
    }
}