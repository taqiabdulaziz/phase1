let Student = require(`./Student`)
let Instructor = require(`./Instructor`)
let Manager = require(`./Manager`)
let Company = require(`./Company`)

let john = new Manager(1, `John Kosasih`, 16, `pluto`, `male`, 100)
let marry = new Instructor(2, `Marry Kosasih`, 16, `pluto`, `female`, 200)
let kirry = new Instructor(3, `Kirry Kosasih`, 17, `saturnus`, `male`, 300)
let kurry = new Student(5, `Kurry Kosasih`, 27, `pluto`, `male`, 1)

let Hacktiv8 = new Company(`Hacktiv8`, 10)
Hacktiv8.addPeople([john, marry, kirry, kurry])
Hacktiv8.login(`John Kosasih`)
Hacktiv8.showSalaries()
Hacktiv8.mySalary()
Hacktiv8.showPeople()








