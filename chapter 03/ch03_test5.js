var Users = [{name:'임혜지', age : 21}, {name: '홍길동', age : 22}, {name : '익명이', age : 23}];
console.log('배열 요소의 수 : %d', Users.length);
for (var i = 0; i<Users.length; i++){ 
    console.log('배열 요소 #' + i + ': %s', Users[i].name);
}

console.log('\nforEach 구문 이용하기');
Users.forEach(function(item, index){ // 배열의 각 요소, 인덱스 값
    console.log('배열 요소 #', index, ' : %s', item.name);
});