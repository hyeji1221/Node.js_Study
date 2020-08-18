function add(a,b,callback){
    var result = a+b; // 더하기 연산을 한 값을 파라미터로 전달된 콜백 함수를 호출하면서 전달
    callback(result);
}
add(10, 10, function(result) { // 콜백함수는 미리 변수에 할당해 두었다가 파라미터로 전달할 수 있지만 익명함수를 통해 전달 가능
    console.log('파라미터로 전달된 콜백 함수 호출됨');
    console.log('더하기 (10, 10)의 결과 : %d', result);
})

// 더하기 함수를 만들었을 때 그 기록을 남겨 두었다가 출력하기
function add1(a,b,callback1){ // add 함수 호출 시 콜백 함수 호출 뿐만 아니라 함수 객체 새로 만들어서 반환
    var result1 = a +b;
    callback1(result1);

    var history = function() {
        return a + '+' +b+'='+result1;
    };
    return history; // 어떤 연산이 수행되었는지 문자열로 알려주는 함수
}

var add_history = add1(10,10, function(result1){
    console.log('파라미터로 전달된 콜백 함수 호출됨.');
    console.log('더하기 (10,10)의 결과 : %d', result1);
});

console.log('결과 값으로 받은 함수 실행 결과 : ' + add_history());