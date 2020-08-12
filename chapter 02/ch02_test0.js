console.log('숫자 보여주기: %d', 10);
console.log('문자열 보여주기: %s', '안녕하세요');
console.log('JSON 객체 보여주기: %j', {name: '이름'});
//JSON 포맷은 자바스크립트의 객체 포맷으로 단말끼리 데이터를 주고받을 때 많이 사용한다.
// 중괄호를 이용해 객체를 만들 수 있으며 그 안에 키와 값으로 구성된 속성들은 콤마로 구성한다.

var result = 0;
console.time('duration_sum');

for (var i = 1; i<=1000;i++){
    result += i; //1부터 1000까지 더한 수를 result에 저장
}
console.timeEnd('duration_sum'); // 시가닝 얼마나 지났는지 체크
console.log("1부터 1000까지 더한 결과물 : %d", result);
// console 객체에는 자바 스크립트를 한꺼번에 출력해주는 dir()메소드, 코드 실행 시간을 측정할 수 있는 time()과 timeEnd() 메소드 등이 들어있다.

console.log("현재 실행한 파일의 이름 : %s", __filename);
console.log('현재 실행한 파일의 패스 : %s', __dirname);
//__filename(파일 전체 패스가 출력)과 __dirname(폴더의 전체 패스가 출력) 변수를 전역변수라고 부른다.

var Person = {name:"이름", age : 21};
console.dir(Person);
// dir() 메소드를 호출하면 그 객체 안에 들어있는 모든 속성이 콘솔에 출력된다.
// dir() 메소드는 log() 메소드와 함께 객체의 속성을 확인할 때 자주 사용한다.