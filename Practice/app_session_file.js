var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var FileStore = require('session-file-store')(session);
var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    secret: 'a;lsdk@fj2kl3jrlk',
    resave: false, // 접속할 때 마다 세션 아이디를 새롭게 발급받을 것인지
    saveUninitialized: true,
    store: new FileStore() // 이곳에 저장
}));

app.get('/count', function(req, res){
    if(req.session.count) {
        req.session.count++;
    } else {
        req.session.count = 1;
    }

    res.send('count : ' +req.session.count);
});

app.get('/auth/login', function(req, res){
    var output = `
    <h1>Login</h1>
    <form action="/auth/login" method="post">
        <p>
            <input type="text" name="username"  placeholder="username">
        </p>
        <p>    
            <input type="password" name = "password" placeholder="password">
        </p>
        <p>
            <input type = "submit">
        </p>
    </form>
    `
    res.send(output);
});

app.post('/auth/login', function(req, res){
    var user = {
        username:'hyeji',
        password:'111',
        displayName: 'Hyeji' // 닉네임
    };

    var name = req.body.username;
    var pwd= req.body.password;

    if(name === user.username && pwd === user.password) {
        req.session.displayName = user.displayName;
        res.redirect('/welcome');
    } else{
        res.send('Who are you? <a href="/auth/login">login</a>');
    }
});

app.get('/welcome', function(req, res){
    if(req.session.displayName) {
        res.send(`
        <h1>Hello, ${req.session.displayName}</h1>
        <a href="/auth/logout">Logout</a>
        `);
    } else {
        res.send(`
        <h1>Welcome</h1>
        <a href="/auth/login">Login</a>
        `);
    }
    
});

app.get('/auth/logout', function(req, res){
    delete req.session.displayName
    res.redirect('/welcome');
});

app.listen(3000, function() {
    console.log('Connected 3000 Port!');
});