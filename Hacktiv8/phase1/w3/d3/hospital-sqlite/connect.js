const db = require(`./db`)

db.serialize(function () {
    let createEmployees = `CREATE TABLE IF NOT EXISTS Employees (
        id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
        username INTEGER,
        password TEXT,
        role TEXT
    );`

    let createPatient = `CREATE TABLE IF NOT EXISTS Patients (
        id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
        disease TEXT
    );`

    db.run(createEmployees, function (err) {
        if (err) {
            console.log(err);
        }
    })

    db.run(createPatient, function (err) {
        if (err) {
            console.log(err);
            
        }
    })
})

db.close()