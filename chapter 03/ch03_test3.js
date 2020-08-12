var Person = { // 자바스크립트의 객체는 중괄호를 이용
    age : 21, // 속성 이름과 속성 값은 콜론 : 을 이용하여 구분
    name : '임혜지', // 각각의 속성은 콤마, 로 구분
    add : function(a, b) {
        return a+b;
    }
};
console.log('더하기 : %d', Person.add(10,10));
