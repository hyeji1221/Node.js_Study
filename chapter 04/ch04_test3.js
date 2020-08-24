var Calc = require('./calc3');
var calc = new Calc();
calc.emit('stop'); // stop이라고 입력안하면 전달안됨

console.log('calc에 stop 이벤트 전달함.');