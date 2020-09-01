var http = require('http');

var server = http.createServer(); // 웹 서버 객체 만들기
var port = 3000; // 웹 서버를 시작하여 3000번 포트에서 대기하기
server.listen(port, function(){ // 반환한 서버객체의 listen() 메소드를 호추하면 웹서버 시작
    // 두 번째로 전달하는 파라미터는 콜백함수로 웹 서버가 시작되면 호출
    console.log('웹 서버가 시작되었습니다, : %d', port);
});
// cmd창으로 웹 서버 시작된후 ctrl+c 누르면 종료

// 웹 서버를 시작하여 192.168.0.5 IP와 3000번 포트에서 대기하도록 설정한다
var host = '192.168.0.3'; // 자신의 pc가 인터넷에 연결되었을 때의 IP로 바꾸어 지정해야 한다.
var port = 3000;
server.listen(port, host, function() {
    console.log('웹 서버가 시작되었습니다 : %s, %d', host, port);
});