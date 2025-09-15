

var mysql = require("mysql");

var mysql=require("mysql2")
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "lib"
});

con.connect(function(err){
    if (err)   throw err;
      else console.log("connected");
      con.query("select * from books",function(err,result){
          if (err) throw err;
          else console.log(result);
      })
  });
  

module.exports=con;