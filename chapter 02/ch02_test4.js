var nconf = require('nconf'); // nconf가 모듈로 만들어져 있으므로 require() 함수를 호출하여 불러온다.
nconf.env(); // nconf 모듈은 그 모듈 안에 정의한 env() 함수를 호출하면 환경 변수에 대한 정보를 가져와서 속성으로 보관한다. 
// npm install nconf 패키지 설치
console.log('OS 환경 변수의 값 : %s', nconf.get('OS'));