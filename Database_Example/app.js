var express = require('express'), http = require('http'), path = require('path');
var bodyParser = require('body-parser'), static = require('serve-static'), errorHandler = require('express-error-handler');
var fs = require('fs');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var multer = require('multer');;
var app = express();
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use('/public',static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(expressSession({
    secret:'my key',
    resave:true,
    saveUninitialized:true
}));

// 데이터베이스
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user :'nodejs',
    password : '00000',
    database : 'test',
    debug : false
});

var addUser = function(id, name, age, password, callback) {
    console.log('addUser 호출됨');
    
    pool.getConnection(function(err, conn){
        if (err) {
            if (conn) {
                conn.release();
            }
            callback(err, null);
            return;
        }
        console.log('데이터베이스 연결 스레드 아이디 : '+conn.threadId);

        var data = {id:id, name:name, age:age, password:password}; 
        var exec = conn.query('insert into users set ?', data, function(err, result){
            conn.release();
            console.log('실행 대상 SQL :' + exec.sql);

            if (err) {
                console.log('SQL 실행 시 오류 발생함');
                console.dir(err);
                callback(err, null);
                return;
            }
            callback(null,result);
        });
    });
}
var router = express.Router();
router.route('/process/adduser').post(function(req, res){
    console.log('/process/adduser 호출됨');
    var paramId = req.body.id || req.query.id;
    var paramPassword= req.body.password || req.query.password;
    var paramName = req.body.name || req.query.name;
    var paramAge = req.body.age || req.query.age;

    console.log('요청 파라미터 : ' +paramId+', '+ paramPassword+', ' +paramName+', ' +paramAge);
    if (pool) {
        addUser(paramId, paramName, paramAge, paramPassword, function(err, addUser){
            if (err) {
                console.error('사용자 추가 중 오류 발생: '+ err.stack);
                res.writeHead('200', {'Content-Type': 'text/html;charset=utf8'});
                res.write('<h2>사용자 추가 중 오류 발생</h2>');
                res.write('<p>'+err.stack+'</p>');
                res.end();
                return;
            }
            if(addUser) {
                console.dir(addUser);
                console.log('inserted' + addUser.affetedRows +' rows');
                var insertId = addUser.insertId;
                console.log('추가한 레코드 아이디: '+insertId);
                res.writeHead('200', {'Content-Type': 'text/html;charset=utf8'});
                res.write('<h2>사용자 추가 성공</h2>');
                res.end();
    
            }else {
                res.writeHead('200', {'Content-Type': 'text/html;charset=utf8'});
                res.write('<h2>사용자 추가 실패</h2>');
                res.end();
            }
        });
    } else{
        res.writeHead('200', {'Content-Type': 'text/html;charset=utf8'});
        res.write('<h2>데이터베이스 연결 실패</h2>');
        res.end();
    }
});
app.use('/', router);
http.createServer(app).listen(app.get('port'), function() {
    console.log('서버가 시작되었습니다');
})

