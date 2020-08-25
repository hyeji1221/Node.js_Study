var fs = require('fs');
var inname = './output.txt';
var outname = './output2.txt';

fs.exists(outname, function(exists){
    if(exists) { //  기존에 만들어 놓은 output2.txt 파일이 있으면 중복 되기 때문에
        fs.unlink(outname, function(err){ // unlink를 이용하여 이전 파일을 삭제하도록 한다
            if(err) throw err;
            console.log('기존 파일 [' + outname + '] 삭제함.');
        });
    }
    var infile = fs.createReadStream(inname, {flags : 'r'});
    var outfile = fs.createWriteStream(outname, {flags : 'w'});
    infile.pipe(outfile); // pipe를 이용해 두 개의 스트림 객체를 연결
    console.log('파일 복사 [' + inname + '] -> [' + outname + ']');
});