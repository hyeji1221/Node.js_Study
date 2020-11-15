# Error: ER_ACCESS_DENIED_ERROR 오류발생시 해결방법

### 1. DB 로그인

### 2. select host, user from mysql.user; // mysql에 있는 host와 user 정보 가져오기

### 3. create user '유저명'@'%' identified by '비밀번호'; // 유저명과 비밀번호를 설정

### 4. grant all privileges on DB명.* to '사용자명'@'%'; // 사용자명은 위의 사용자명으로

### 5. flush privileges; // 설정한 접근권한을 저장

### 이후 다시 select host, user from mysql.user; 확인해보면 추가되어있는것 확인 가능

# MYSQL 사용자 삭제 방법

### drop user '유저이름'@'설정한 호스트'; // 위의 방법으로 설정한 호스트는 %

https://www.youtube.com/watch?v=bOkqOJbWPLM
