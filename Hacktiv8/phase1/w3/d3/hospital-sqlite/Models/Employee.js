const db = require(`../db`)

class Employee { 
    static register(username, password, role, cb) {
        let insert = `INSERT INTO Employees (
            username,
            password,
            role
        ) VALUES (
            "${username}", "${password}", "${role}"
        )`

        db.run(insert, function (err) {
            err && cb(err)
        })
    }
}

module.exports = Employee