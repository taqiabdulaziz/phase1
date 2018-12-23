const Company = require(`./Company`)

class User {
    constructor(id, name, age, address, gender) {
        this.id = id
        this.name = name
        this.age = age
        this.address = address
        this.gender = gender
    }

    greet() {
        return ``
    }
}

module.exports = User