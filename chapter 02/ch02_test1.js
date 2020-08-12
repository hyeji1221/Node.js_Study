console.log('argv 속성의 파라미터 수 : ' + process.argv.length);
console.dir(process.argv); //dir매소드를 이용하여 객체가 가지고 있는 속성을 그대로 출력
// process 객체는 프로그램을 실헹했을 때 만들어지는 프로세스 정보를 다루는 객체이다.
// 주요 속성으로는 argv : 프로세스를 실행할 때 전달되는 매개변수 정보, env : 환경변수 정보, exit() : 프로세스를 끝내는 메소드

// node.exe 파일의 이름이 첫번째 파라미터, 자바스크립트 파일의 패스가 두 번째 파라미터
//파일을 실행할 때 파라미터를 더 넣어주면 argv 속성에 그 파라미터가 추가된다. 

if (prpocess.argv.length >2) {
    console.log('세 번째 파라미터의 값 : %s', process.argv[2]); // 세번째 파라미터 값 확인
}
process.argv.forEach(function(item, index) { //forEach를 이용해서 argv 속성에 들어있는 모든 값을 하나씩 출력
    // forEach() 메소드는 배열 안에 들어 있는 각 아이템 값과 인덱스를 함께 전달하므로 배열 객체에 들어 있는 값들을 하나씩 확인하기 좋다.
    console.log(index + ':',item);
});