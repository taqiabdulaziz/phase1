const User = require(`./User`)

class Student extends User {
    constructor(id, name, age, address, gender, phase) {
        super(id, name, age, address, gender)
        this.phase = phase
    }

    greet() {
        return `Halo! Saya salah satu member Hacktiv8\nSaya sedang belajar programming disini!`
    }
}

module.exports = Student