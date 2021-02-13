var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var sha256 = require('sha256');
var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    secret: 'a;lsdk@fj2kl3jrlk',
    resave: false, // 접속할 때 마다 세션 아이디를 새롭게 발급받을 것인지
    saveUninitialized: true
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

//var salt = '@#$@#asdfasdf234'; // md5(pwd+salt);
var user = [
{
    username:'hyeji',
    password: '05b7a44e9cec244cdecef796d31128b1ed45d927f31d559eba28fc62fa6ae01b', // function enc(pwd, salt){return sha256(pwd+salt);}
    salt:'!@#234234',
    displayName: 'Hyeji' // 닉네임
},
{
    username:'hi',
    password: 'de83e8805b5dcbdddfc205bff398f314d60339585db0b7bf50b79999033fc0aa', 
    salt:'^@$%@#234234',
    displayName: 'hello' // 닉네임
}];

app.post('/auth/login', function(req, res){


    var name = req.body.username;
    var pwd= req.body.password;

    if(name === user.username && sha256(pwd+user.salt) === user.password) {
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