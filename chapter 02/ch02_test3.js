var calc = {};
calc.add = function(a,b) {
    return a + b;
}
console.log('모듈로 분리하기 전 - calc.add 함수 호출 결과 : %d', calc.add(10, 10));
// calc 객체를 하나 만든 후 그 객체에 add 속성을 추가하여 더하기 함수 할당

var calc = require('./calc'); // calc.js 파일을 모듈로 불러오기 위해 require()함수 호출
console.log('모듈로 분리한 후 - cal.add 함수 호출 결과 : %d', calc.add(10,10));
// calc 변수가 모듈 파일에서 사용한 exports 객체와 같다
// 이렇게 하면 exports.add로 추가한 add 속성을 메인 파일의 calc 객체에서 접근할 수 있으므로 calc.add() 코드로 함수 호출 가능

var calc2 = require('./calc2');
console.log('모듈로 분리한 후 - cal2.add 함수 호출 결과 : %d', calc2.add(10,10));
// module.exports 이용
// calc2 변수에 module.exports에 할당했던 객체가 그대로 할당