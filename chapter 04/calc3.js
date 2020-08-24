var util = require('util'); // prototype 객체를 쉽게 상속하도록 만들어줌
var EventEmitter = require('events').EventEmitter; // EventeEmitter 상속을 위한 불러오기 (EventEmitter는 events모듈 안에 정의되어 있음)

var Calc = function() {
    var self = this;

    this.on('stop', function() { // on을 이용하여 이벤트 등록
        console.log('Calc에 stop 이벤트 전달됨');
    });
};

util.inherits(Calc, EventEmitter); // 두번 째 인자가인 EventEmitter가 부모

Calc.prototype.add = function(a,b){
    return a+b;
};

module.exports = Calc;
//module.exports.title = 'calculator';