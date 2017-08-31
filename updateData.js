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

    var sql = `UPDATE lessons SET id = 1 WHERE SALARY = 20000`;

    con.query(sql, function (err, result) {

        if (err) {
            
            throw err;

        } 

        console.log(result.affectedRows + ": Record updated ! :)");

    });

});