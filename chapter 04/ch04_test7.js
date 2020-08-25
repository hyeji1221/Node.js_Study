// 버퍼 객체를 크기만 지정하여 만든 후 문자열 쓰기
var output = '안녕 1!';
var buffer1 = new Buffer(10);
var len = buffer1.write(output, 'utf8'); // buffer1에 output 쓰기
console.log('첫 번째 버퍼의 문자열 : %s', buffer1.toString());

// 버퍼 객체를 문자열을 이용해 만들기
var buffer2 = new Buffer('안녕 2!', 'utf8');
console.log('두 번째 버퍼의 문자열 : %s', buffer2.toString());
console.log('버퍼 객체의 타입 : %s', Buffer.isBuffer(buffer1)); // 타입 확인

// 버퍼 객체에 들어 있는 문자열 데이터를 문자열 변수로 만들기
var byteLen = Buffer.byteLength(output);
var str1 = buffer1.toString('utf8', 0, byteLen);
var str2 = buffer2.toString('utf8');

// 첫 번째 버퍼 객체의 문자열을 두 번째 버퍼 객체로 복사
buffer1.copy(buffer2, 0, 0, len); // len은 buffer1의 크기
console.log('두 번째 버퍼에 복사한 후의 문자열 : %s', buffer2.toString('utf8'));

// 두 개의 버퍼를 붙여주기
var buffer3 = Buffer.concat([buffer1], [buffer2]);
console.log('두 개의 버퍼를 붙인 후의 문자열 : %s', buffer3.toString('utf8'));