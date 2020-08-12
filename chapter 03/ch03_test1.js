function add(a, b){
    return a + b;
}
var result = add(10,10);
console.log('더하기 (10,10) : %d', result);

// 익명 함수
var add1 = function(a, b) { // 변수에 함수 할당
    return a+b;
}; // 표현식이 되므로 세미콜론 붙여주는 것이 좋다.
var result1 = add(20,20);
console.log('더하기 (20,20) : %d', result1);