const Employee = require(`../Models/Employee`)
const View = require(`../Views/View`)

class Controller {

    static register(username, password, role) {
        Employee.register(username, password, role, function (err) {
            err ?
                View.errorRegister(err) :
                View.successRegister(`success register`)
        })
    }

}

module.exports = Controller