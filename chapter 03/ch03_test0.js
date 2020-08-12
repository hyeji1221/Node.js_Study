var Person = {}; // 변수 선언, 변수에는 빈 객체가 하나 할당된다

Person['age'] = 21; // 속성추가
Person['name'] = '임혜지';
Person.mobile = '010-1234-5678';

console.log('나이 : %d', Person.age);
console.log('이름 : %s', Person.name);
console.log('전화 : %s', Person['mobile']);
// . 또는 대괄호를 이용해서 접근 가능