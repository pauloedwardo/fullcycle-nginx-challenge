const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb' 
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

function save(name) {
    var data = [name]
    const sql = `INSERT INTO people(name) values (?);`
    connection.query(sql, data)
}

function getAll(callback) {
    const sql = `SELECT name FROM people;`
    connection.query(sql, function(err, rows) {
        if(err) {
            console.error(`Get all failed -> ${err}`)
        }

        return callback(rows.map((r) => r.name).join(', '))
    })
}

module.exports = { save, getAll };