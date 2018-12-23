let db = require('./db')

let create_table_politicians = `CREATE TABLE Candidate (
    Id INTEGER PRIMARY KEY AUTOINCREMENT, 
    nama_pejabat VARCHAR, 
    nama_partai VARCHAR, 
    location VARCHAR, 
    grade_current VARCHAR);`

let create_table_voters = `CREATE TABLE Voters (
    Id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR,
    last_name VARCHAR,
    gender VARCHAR,
    age VARCHAR
);`

let create_table_voting = `CREATE TABLE Voting (
    Id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_pejabat INTEGER,
    id_voters INTEGER,
    FOREIGN KEY (id_pejabat) REFERENCES Candidate(Id)
    FOREIGN KEY (id_voters) REFERENCES Voters(Id)
);`

db.run(create_table_politicians,function (err) {
    if (err) {
        throw err
    }
    console.log("success");    
})

db.run(create_table_voters,function (err) {
    if (err) {
        throw err
    }
    console.log("success");    
})

db.run(create_table_voting,function (err) {
    if (err) {
        throw err
    }
    console.log("success");    
})