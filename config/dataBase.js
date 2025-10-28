const mysql = require("mysql2")


const conection = mysql.createConnection({
    host: "localhost",
    user: "TP1",
    password: "Tp1programacion",
    database: "TP1"
    
})


module.exports = { conection }