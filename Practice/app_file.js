var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({extended: false}))
app.set('views', './views_file');
var fs = require('fs');


app.get('/topic/new', function(req, res){
    fs.readdir('data', function(err, files){
        if(err){
            console.log('err');
        }
        res.render('new', {topics:files});
    });    
    
})
app.get(['/topic', '/topic/:id'], function(req, res){ // 글 목록 보여주기
    fs.readdir('data', function(err, files){
        if(err){
            console.log('err');
        }
        var id = req.params.id;
        if(id) {
            // id값이 있을 때
            fs.readFile('data/'+id, 'utf-8', function(err, data){
                if (err){
                    console.log('err');
                }
                res.render('view', {topics:files, title:id, description:data});
            });
        }
        else {
            // id 값이 없을 때
            res.render('view', {topics:files, title:'Weocome', description: 'Hello, server'});
        }
        
        
    });
    
});

app.post('/topic', function(req, res){  // 제출 버튼 클릭했을 때
    var title = req.body.title;
    var des = req.body.description;
    fs.writeFile('data/'+title,des, function(err){
        if(err){
            res.status(500).send('Internal Server Error');
        }
        res.redirect('/topic/'+title); // 이 링크로 보내기
    });
});
app.listen(3000, function(){
    console.log('Connected, 3000 port!')
})