const User = require(`./User`)

class Manager extends User{
    constructor(id, name, age, address, gender,salary) {
        super(id, name, age, address, gender)
        this.salary = salary
    }

    greet() {
        return `Halo! Saya salah satu member Hacktiv8\nSaya adalah seorang manager!`
    }

}

module.exports = Manager