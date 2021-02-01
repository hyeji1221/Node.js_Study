var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(express.static('public')); // 정적인 파일이 위치할 디렉토리 -> url 입력시 /public 안써도 됨 (http://localhost:3000/test.txt)
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({extended: false})) // post 방식으로 데이터를 받기 위해

app.get('/form', function(req, res){
    res.render('form');
});
app.get('/form_receiver', function(req, res){ // get방식으로 데이터 받는법
    var title = req.query.title;
    var des = req.query.description;
    res.send(title+','+des);
});
app.post('/form_receiver', function(req, res){ // post방식으로 데이터 받는법
    var title = req.body.title;
    var des = req.body.description;
    res.send(title+','+des);
});

app.get('/topic/:id', function(req, res){ // 시멘틱 url -> http://localhost:3000/topic/0
    var topics = [
        'Javascript is...',
        'Nodejs is...',
        'Express is...'
    ];
    var output = `
        <a href="topic?id=0">JavaScript<a><br>
        <a href="topic?id=1">Nodejs<a><br>
        <a href="topic?id=2">Express<a><br>
        ${topics[req.params.id]}
    `
    res.send(output); // 
});

app.get('/topic/:id/:mode', function(req, res){ // http://localhost:3000/topic/1/edit
    res.send(req.params.id+','+req.params.mode)
});

app.get('/topic1', function(req, res){ // query 
    res.send(req.query.name); // http://localhost:3000/topic?name=10000 -> 10000 출력
});
app.get('/topic2', function(req, res){ // query 
    res.send(req.query.id+','+req.query.name); // http://localhost:3000/topic?id=1&name=hello -> 1,hello 출력
});
app.get('/topic3', function(req, res){ // query 
    var topics = [
        'Javascript is...',
        'Nodejs is...',
        'Express is...'
    ];
    var output = `
        <a href="topic?id=0">JavaScript<a><br>
        <a href="topic?id=1">Nodejs<a><br>
        <a href="topic?id=2">Express<a><br>
        ${topics[req.query.id]}
    `
    res.send(output); // 
});

app.get('/', function(req, res) {
    res.send('Hello home page');
});
app.get('/login', function(rea, res) {
    res.send('<h1>Login please</h1>');
});
app.get('/dynamic', function(req,res){
    var time = Date();
    var lis = '';
    for (var i = 0; i<5; i++) {
        lis = lis + '<li>coding</li>'
    }
    var output = `
    <!DOCTYPE html>
<html>
    <head>
        <meta charset = "utf-8">
        <title></title>

    </head>
    <body>
        Hello, dynamic
        <ul>
        ${lis}
        </ul>
        ${time}
    </body>
</html>`;
    res.send(output);
});

app.listen(3000, function() {
    console.log('Connected 3000 port');
});  