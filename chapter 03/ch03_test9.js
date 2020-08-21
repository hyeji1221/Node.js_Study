function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.walk = function(speed) {
    console.log(speed + 'km 속도로 걸어갑니다');
}
var person1 = new Person('임혜지', 21);
var person2 = new Person('홍길동', 22);
console.log(person1.name + '객체의 walk(10)을 호출합니다');
person1.walk(10);