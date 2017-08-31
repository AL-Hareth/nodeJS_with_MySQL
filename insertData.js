var mysql = require('mysql');

var con = mysql.createConnection({

    host        : 'localhost',
    user        : 'root',
    password    : 'QJdsWqekI9#=',
    database    : 'nodeJS'

});

con.connect(function (err) {

    if (err) {

        throw err;

    }

    console.log("Connected !! :)");

    var sql = `INSERT INTO lessons (id, name, time, author, SALARY)
                VALUES (20, 'createDB', 20, 'alhareth', 20000)`;

    con.query(sql, function (err, result) {

        if (err) {
            
            throw err;

        } 

        console.log("Data inserted ! :)");

    });

});