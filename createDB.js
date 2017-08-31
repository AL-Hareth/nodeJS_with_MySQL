var mysql = require('mysql');

var con = mysql.createConnection({

    host        : 'localhost',
    user        : 'root',
    password    : 'QJdsWqekI9#='

});

con.connect(function (err) {

    if (err) {

        throw err;

    }

    console.log("Connected !! :)");

    con.query("CREATE DATABASE nodeTest;", function (err, result) {

        if (err) {
            
            throw err;

        } 

        console.log("Created ! :)");

    });

});