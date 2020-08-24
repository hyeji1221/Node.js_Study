// 동기식 IO
var fs = require('fs'); // file system의 줄임말

var data = fs.readFileSync('./package.json', 'utf8');
console.log(data);

// 비동기식 IO
var fs1 = require('fs');
fs1.readFile = ('./package.json', 'utf8', function(err, data) {
    // err와 data를 전달 받아서 오류가 발생했는지 재대로 실행되었는지 확인
    // 오류가 발생하면 err에 오류 데이터가 들어가고 그렇지 않으면 null이 된다. 따라서 err가 null인지 체크하여 문제 없으면 파일 읽기 성공
    // 세 번째 파라미터로 전달된 함수는 파일을 읽어 들이는 작업이 끝났을 때 호출 (콜백 함수)
    console.log(data);
});
console.log('프로젝트 폴더 안의 package.json 파일을 읽도록 요청함.');