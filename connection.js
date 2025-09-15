var mysql = require("mysql2");

var con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

con.connect(function(err){
    if (err) throw err;
    else console.log("connected");
    con.query("select * from books", function(err, result){
        if (err) throw err;
        else console.log(result);
    });
});

module.exports = con;
