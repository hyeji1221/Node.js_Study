process.on('exit', function() { // process 객체는 내부적으로 EventEmitter를 상속하도록 되어 있어 on()과 emit() 메소드를 바로 사용 가능하다.
    console.log('exit 이벤트 발생함');
});
setTimeout(function() { // setTimeout을 이용하여 2초 후 프로그램을 끝낸다
    console.log('2초 후에 시스템 종료 시도함.');
    process.exit(); // process 객체의 on()을 호출하면서 이벤트 이름을 exit으로 지정하면 끝날 때를 알 수 있다.
}, 2000);
