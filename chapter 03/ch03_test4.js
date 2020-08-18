var Users = [{name:'임혜지', age : 21}, {name: '홍길동', age : 22}];
Users.push({name:'익명이', age:23}); // 배열에 새로운 객체 추가

console.log('사용자 수 : %d', Users.length); // 요소의 개수
console.log('첫 번째 사용자 이름 : %s', Users[0].name); 

// 변수에 함수 할당
var Users1 = [{name : '임혜지', age : 21}, {name : '홍길동', age : 22}];
var add = function(a,b) {
    return a + b;
};
Users1.push(add); // 배열 요소에 함수 할당
console.log('배열 요소의 수 : %d', Users1.length);
console.log('세 번째 요소로 추가된 함수 실행 : %d', Users1[2](10,10));