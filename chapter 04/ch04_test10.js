var winston = require('winston'); // 로그 처리 모듈
var winstonDaily = require('winston-daily-rotate-file'); // 로그 일별 처리 모듈
var moment = require('moment'); // 시간 처리 모듈
const { transport } = require('winston');

function timeStampFormat() {
    return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ');
    // ex) '2020-08-25 20:14:27.500 +0900'
};

var logger = winston.createLogger({
    transports: [
        new (winstonDaily)({
            name: 'info-file',
            filename: './log/server_%DATE%.log',
            datePattern: '_yyyy-MM-dd.log',
            colorize : false, // 색상
            maxsize: 50000000, // 파일의 최대 크기, 지정해 놓은 수보다 파일이 크면 분리하기
            maxFiles : 1000, // 파일의 수(분리된 파일)
            level : 'info',
            showLevel: true,
            json: false, // json으로 출력할 것인지
            timestamp : timeStampFormat
        }),
        new (winston, transport.Console)({
            name: 'debug-console',
            colorize: true,
            level: 'debug',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        })
    ],
    exceptionHandlers: [
        new (winstonDaily)({
            name: 'exception-file',
            filename: './log/exception',
            datePattern: '_yyyy-MM-dd.log',
            colorize: false,
            maxsize: 50000000,
            maxFiles:1000,
            level: 'error',
            showLevel: true,
            json:false,
            timestamp : timeStampFormat

        }),
        new (winston, transport.Console)({
            name: 'exception-console',
            colorize:true,
            level:'debug',
            showLevel :true,
            json : false,
            timestamp: timeStampFormat
        })
    ]
} ); 

logger.debug('디버깅 메시지 입니다');
logger.error('에러 메시지 입니다');