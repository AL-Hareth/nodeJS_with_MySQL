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

    var sql = `ALTER TABLE lessons ADD COLUMN SALARY int(11)`;

    con.query(sql, function (err, result) {

        if (err) {
            
            throw err;

        } 

        console.log("Table created ! :)");

    });

});