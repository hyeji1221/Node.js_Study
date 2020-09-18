var express = require('express'), http = require('http'), path = require('path');

var bodyParser = require('body-parser'), static = require('serve-static'), errorHandler = require('express-error-handler');
var fs = require('fs');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var multer = require('multer');

var app = express();
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressSession({
    secret:'my key',
    resave:true,
    saveUninitialized:true
}));
app.use(cors());
app.use('/public',static(path.join(__dirname, 'public')));
app.use('/uploads', static(path.join(__dirname, 'uploads')));
var express = require('express'), http = require('http'), path = require('path');
var router = express.Router();
var bodyParser = require('body-parser'), static = require('serve-static');
var storage = multer.diskStorage({
    destination : function(req, file, callback) {
        callback(null, 'uploads')
    },
    filename: function(req, file, callback) {
        callback(null, file.originalname, Date.now())
    }
});
var upload = multer({
    storage: storage,
    limits: { files: 10, fileSize : 1024 * 1024 * 1024}
});
router.route('/process/mymemo').post(upload.array('photo',1), function(req, res){
    console.log('process/mymemo 호출됨');
    try{
        var files = req.files;

        console.dir(req.files[0]);
        var originalname = '',
        filename ='', mimetype='', size =0;

        if (Array.isArray(files)){
            console.log('배열에 들어있는 퍄일 갯수 : %d', files.length);

            for (var index = 0; index <files.length; index++) {
                originalname = files[index].originalname;
                filename = files[index].filename;
                mimetype = files[index].mimetype;
                size = files[index].size;
            }
        } else {
            console.log('파일 갯수 : 1');
            originalname = files[index].originalname;
            filename = files[index].filename;
            mimetype = files[index].mimetype;
            size = files[index].size;

        }
        res.writeHead('200', {'Content-Type': 'text/html;charset=utf8'});
        res.write('<h3>메모에 저장되었습니다</h3>');
        res.write('<h3>서버에 저장된 사진</h3>');
        res.write('<p>'+originalname+'</p>');
        res.end();

    } catch(err) {
        console.log(err.stack);
    }
    
});
/*
router.route('/process/mymemo').post(function(req,res){
    res.writeHead('200', {'Content-Type': 'text/html;charset=utf8'});
    console.log('/process/mymemo 처리함');
    res.write('<h1>메모가 저장되었습니다. </h1>' );
    res.write("<br><br><a href='/public/memo.html'>다시 작성</a>");
    res.end();
   // res.redirect('./public/memofinish.html');
    
});
*/

app.use('/', router);

http.createServer(app).listen(app.get('port'), function() {
    console.log('3000번 포트에서 시작함'+app.get('port'));
});