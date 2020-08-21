var url = require('url'); // url 모듈 로딩

// 주소 문자열을 URL 객체로 만들기
var curURL = url.parse('https://m.search.naver.com/search.naver?query=steve+jpbs&where=m&sm=mtp_hty');

// URL 객체를 주소 문자열로 만들기
var curStr = url.format(curURL);
console.log('주소 문자열 : %s', curStr);
console.dir(curURL);

// 요청 파라미터 구분하기
var querystring = require('querystring');
var param = querystring.parse(curURL.query);

console.log('요청 파라미터 중 query의 값 : %s', param.query); // steve jpbs
// stringify는 객체 안에 들어있는 요청 파라미터를 다시 하나의 문자열로 바꿀 때 사용
console.log('원본 요청 파라미터 : %s', querystring.stringify(param)); // query=steve%20jpbs&where=m&sm=mtp_hty
