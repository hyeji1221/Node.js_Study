var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'me',
    password : '111111',
    database : 'my-db'
});
connection.connect();

var sql = 'SELECT * FROM topic';

connection.query(sql, function(err, rows, fields){
    if (err){
        console.log(err);
    } else{
        for(var i = 0; i<rows.length; i++){
            console.log(rows[i].title);
        }
    }
});

var sql1 = 'INSERT INTO topic (title, description, author) VALUES (?, ?, ?)';
var params = ['Supervisor', 'Watcher', 'graphittie'];
connection.query(sql, params,function(err, rows, fields){
    if(err){
        console.log(err);
    } else {
        console.log(rows.insertId);
    }
});

var sql2 = 'UPDATE topic SET title=?, description=?, WHERE id =?';
var params = ['Supervisor', 'Watcher', '1'];
connection.query(sql, params,function(err, rows, fields){
    if(err){
        console.log(err);
    } else {
        console.log(rows.insertId);
    }
});

var sql3 = 'DELETE FROM topic WHERE id=?';
var params = [1];
connection.query(sql, params,function(err, rows, fields){
    if(err){
        console.log(err);
    } else {
        console.log(rows.insertId);
    }
});


connection.end();