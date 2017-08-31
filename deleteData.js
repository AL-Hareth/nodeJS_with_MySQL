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

    var sql = `DELETE FROM lessons WHERE id = 1 LIMIT 1`;

    con.query(sql, function (err, result) {

        if (err) {
            
            throw err;

        } 

        console.log(result.affectedRows + ": Record deleted ! :)");

    });

});