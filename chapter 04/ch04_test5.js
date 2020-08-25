var fs = require('fs');

fs.writeFile('./output.txt', 'Hello World!', function(err) {
    if(err){
    console.log('Error : ' + err);
    }

console.log('output.txt 파일에 데이터 쓰기 완료');
});

fs.open('./output.txt', 'w', function(err, fd){ // 정상적으로 열리면 콜백 함수 실행
    if(err) throw err;

    var buf = new Buffer('안녕!\n');
    fs.write(fd,buf,0,buf.length,null,function(err, written, buffer){ // 쓰기가 정상적으로 되면 호출
        if(err) throw err;
        console.log(err, written, buffer);
        fs.close(fd, function() {
            console.log('파일 열고 데이터 쓰고 파일 닫기 완료');
        })
    });
});

