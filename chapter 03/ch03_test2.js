var Person={};
Person['age'] = 21;
Person['name'] = '임혜지';
Person.add = function(a, b) {
    return a + b;
};

console.log('더하기 : %d', Person.add(10,10));

//변수에 함수를 할당한 후 그 변수를 갹체의 속성으로 추가
var oper = function(a, b) {
    return a+b;
};
Person['add1'] = oper;