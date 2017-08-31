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

    var sql = `DROP TABLE lessons`;

    con.query(sql, function (err, result) {

        if (err) {
            
            throw err;

        } 

        console.log("Dopped :(");

    });

});