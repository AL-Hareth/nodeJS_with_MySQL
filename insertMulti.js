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
                VALUES ?`;

    var values = [
        [1, 'createDB', 20, 'alhareth', 20000],
        [2, 'createTable', 25, 'alhareth', 10000]
    ];

    con.query(sql, [values], function (err, result) {

        if (err) {
            
            throw err;

        } 

        console.log(result.affectedRows + " Record inserted ! :)");

    });

});