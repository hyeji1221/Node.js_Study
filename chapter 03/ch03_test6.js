var Users = [{name:'임혜지', age : 21}, {name: '홍길동', age : 22}];
// push, pop 이용하기
console.log('push() 호출 전 배열 요소의 수 : %d', Users.length); // 2

Users.push({name : '익명이', age : 23});
console.log('push() 호출 후 배열 요소의 수 : %d', Users.length); // 3

Users.pop();
console.log('pop() 호출 후 배열 요소의 수 : %d', Users.length); // 2

// shift, unshift 이용하기
console.log('unshift() 호출 전 배열 요소의 수 %d', Users.length); // 2
Users.unshift({name: '익명이', age: 23});
console.log('unshift() 호출 후 배열 요소의 수 %d', Users.length); // 3
Users.shift();
console.log('shift() 호출 후 배열 요소의 수 %d', Users.length); // 2

// delete 이용하기
console.log('delete 키워드로 배열 요소 삭제 전 배열 요소의 수 %d', Users.length);
delete Users[1];
console.log('delete 키워드로 배열 요소 삭제 후');
console.dir(Users); // 빈 공간은 그대로 있고 내용만 삭제

// 요소를 담는 공간까지 없애기 위해서 splice() 메소드를 사용

Users.splice(1,0, {name : '익명이', age : 23});
console.log('splice() 요소로 인덱스 1에 추가한 후');
console.dir(Users);

Users.splice(1,1);
console.log('splice()로 인덱스 1의 요소를 1개 삭제한 후');
console.dir(Users);

//slice() 메소드 이용
var Users1 = [{name:'임혜지', age : 21}, {name: '홍길동', age : 22}, {name : '익명이', age : 23}, {name : '깡충이', age : 15}];
console.log('배열 요소의 수 : %d', Users.length);
console.log('원본 Users1');
console.dir(Users1);

var Users2 = Users1.slice(1,3);
console.log('slice()로 잘라낸 후 Users2');
console.dir(Users2); //1,2,3

var Users3 = Users2.slice(1);
console.log('slice()로 잘라낸 후 Users3');
console.dir(Users3); // 익명이