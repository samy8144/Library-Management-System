require('dotenv').config();
var con=require('./connection')
var express=require('express');
var app=express();

// var path=require("path"); 
var bodyParser=require("body-parser");
const { name } = require('ejs');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','ejs');
app.get('/log',function(req,res){
    res.sendFile(__dirname+'/home.html');
});

app.post('/log',function(req,res){
    var book_id = req.body.book_id;
    var title= req.body.title;
    var author= req.body.author;
    var genre= req.body.genre;
    var number_of_copies=req.body.number_of_copies;
    var availability= req.body.availability;

    con.connect(function(err){
        if (err) throw err;
        
        else var sql ="INSERT INTO Books (book_id, title, author, genre, number_of_copies,availability) values(?,?,?,?,?,?)";

        con.query(sql,[book_id, title, author, genre, number_of_copies,availability],function(err,result){
            if (err) throw err;
            else res.redirect('/home');
        });
    });
});


app.get('/newuser',function(req,res){
    res.sendFile(__dirname+'/newuser.html');
});

app.post('/newuser',function(req,res){
    var user_id = req.body.user_id;
    var name= req.body.name;
    var email= req.body.email;
    var role= req.body.role;
    

    con.connect(function(err){
        if (err) throw err;
        
        else var sql ="INSERT INTO users (user_id, name, email, role) values(?,?,?,?)";

        con.query(sql,[user_id, name, email, role ],function(err,result){

            if (err) throw err;
            else res.redirect('/users');
        });
    });
});

app.get('/home',function(req,res){
    con.connect(function(err){
        if (err) console.log(err);
        var sql="select * from books";
        con.query(sql,function(err,result){
            if(err) console.log(err);
            
            res.render(__dirname+"/table",{lib:result});
            
        });

    });
});

app.get('/borrowings',function(req,res){
    con.connect(function(err){
        if (err) console.log(err);
        var sql="select * from loan";
        con.query(sql,function(err,result){
            if(err) console.log(err);
            
            res.render(__dirname+"/borrowings",{lib:result});
            
        });

    });
});



app.get('/users', function (req, res) {
    con.connect(function (err) {
        if (err) console.log(err);
        
        var sql = `
            SELECT 
                users.user_id, 
                users.name, 
                users.email, 
                users.role,
                GROUP_CONCAT(DISTINCT loan.book_id ORDER BY loan.book_id) AS books_borrowed,
                GROUP_CONCAT(DISTINCT loan.borrowing_id ORDER BY loan.borrowing_id) AS borrow_ids
            FROM users
            LEFT JOIN loan
            ON users.user_id = loan.user_id
            GROUP BY users.user_id;
        `;
        
        con.query(sql, function (err, result) {
            if (err) console.log(err);
            console.log(result); // Debug log
            res.render(__dirname + "/users", { lib: result });
        });
    });
});


        app.get('/delete', function (req, res) {
            var book_id = req.query.book_id; 
            var borrowing_id = req.query.borrowing_id;
        
           
            const updateAvailability = "UPDATE books SET availability = availability + 1 WHERE book_id = ?";
            const deleteBorrowings = "DELETE FROM loan WHERE borrowing_id = ?";
        
            con.query(updateAvailability, [book_id], function (err, updateResult) {
                if (err) {
                    console.log('Error updating availability:', err);
                    
                }
            });
                con.query(deleteBorrowings, [borrowing_id], function (err, deleteResult) {
                    if (err) {
                        console.log('Error deleting loan record:', err);
                 }
            });
            res.redirect('/borrowings');
        });
        

app.get('/update_copy',function(req,res){
    
    con.connect(function(err){
        if (err) console.log(err);
        var sql="select * from books where book_id=?";
        var book_id=req.query.book_id;
        con.query(sql,[book_id],function(err,result){
            if(err) console.log(err);
            
            res.render(__dirname+'/update_copy',{lib:result});
            
        });

    });

});
app.post('/update_copy',function(req,res){

    var book_id=req.body.book_id;
    var number_of_copies=req.body.number_of_copies;
       
    con.connect(function(err){
        if (err) console.log(err);
        var sql="UPDATE books set number_of_copies=? where book_id=?";
        con.query(sql,[number_of_copies,book_id],function(err,result){
            if(err) console.log(err);
            res.redirect('/home');        
        });

    });

});
app.get('',function(req,res){
    
    con.connect(function(err){
        if (err) console.log(err);
            res.redirect('/home');
            
        });

    });

            app.get('/search',function(req,res){
                var book_id=req.query.book_id;
                var title=req.query.title;
                var author=req.query.author;
                var genre=req.query.genre;
                var number_of_copies =req.query.number_of_copies;
                
                con.connect(function(err){
                    if (err) console.log(err);
                    
                    var sql = "select * from books where book_id like '%" + book_id + "%' and title like '%" + title + "%' and author like '%" + author + "%' and genre like '%" + genre + "%' and number_of_copies like '%" + number_of_copies + "%' ";

                    con.query(sql,function(err,result){
                        if (err) console.log(err);
                        res.render(__dirname+"/search",{lib:result})
                    })

                });
                
                        
                    }); 

                    app.get('/borrow',function(req,res){
                        res.sendFile(__dirname+'/borrowbook.html');
                    });
                    

                    app.post('/borrow', function (req, res) {
                        const book_id = req.body.book_id;
                        const user_id = req.body.user_id;
                        const borrow_date = req.body.borrow_date; 
                        const borrowDateObject = new Date(borrow_date);

                        const currentDate = new Date();
                        const maxFutureDate = new Date();
                        maxFutureDate.setFullYear(currentDate.getFullYear() + 10);
                    
                        const returnDateObject = new Date(borrowDateObject);
                        returnDateObject.setDate(borrowDateObject.getDate() + 15);
                    
                        const return_date = returnDateObject.toISOString().split('T')[0]; 

                        var updateAvailability = "UPDATE books SET availability = availability - 1 WHERE book_id = ?";
                        con.query(updateAvailability, [book_id], function (err, result) {
                            if (err) {console.error('Error updating availability:', err);
                            };
                        const sql = "INSERT INTO loan (user_id, book_id, borrow_date, return_date) VALUES (?, ?, ?, ?)";
                    
                        con.query(sql, [user_id, book_id, borrow_date, return_date], function (err, result) {
                            if (err) {
                                console.error('Error executing query:', err);
                                res.status(500).send('An error occurred while borrowing the book.');
                            } else {
                                res.redirect('/borrowings');
                            }
                        });    
                });
                    
            });
           
app.listen(6174);

