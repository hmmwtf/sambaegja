# SpringBoot를 이용한 웹사이트 제작

---


## 메인 페이지
![mainpage](https://github.com/hmmwtf/sambaegja/assets/88608418/0a0c9e8c-748c-4f09-888e-3be25cbe138c)
## 메인 페이지 : 글쓰기
![mainpage01_01](https://github.com/hmmwtf/sambaegja/assets/88608418/af7c548d-c7da-4317-bc03-eae476f60a58)
## 서브 페이지
![subpage01](https://github.com/hmmwtf/sambaegja/assets/88608418/75d82355-47ae-4231-a50f-fbc7639c044b)
## 서브 페이지 : 팝업
![subpage01_popup](https://github.com/hmmwtf/sambaegja/assets/88608418/b2bb64e5-2829-4e10-920f-4ece0a5a5ad4)



---
## 테이블구조
![ERD2](https://github.com/hmmwtf/sambaegja/assets/94499659/6118dc31-80e1-4c8a-8f6e-75cc42ac8e9f)

---

## 프로젝트 동작 흐름
![MVC](https://github.com/hmmwtf/sambaegja/assets/94499659/0e1216ad-8216-4fae-b015-34451c46b5ca)


---

## 개발 도구
  - Figma
  - Eclipse 
  - IntelliJ
  - Vscode
  - DBeaver
  - Mysql workbench 8.0

## 작업환경
#### SpringBoot
 - Java 1.8
 - Gradle
 - Mybatis 
 - SpringBoot 3.3.0  
 - Spring Data JPA
 - Spring Web MVC
 - Spring AOP
 - jdk 22

---
## 구현 순서

#### 1. 회원가입, 로그인 기능 구현
- 회원가입, 로그인 뷰 구현
- 회원가입, 로그인 API 통신 구현

#### 2. 로그아웃 구현
- 로그인 시 페이지 상단의 로그인, 회원가입을 로그아웃으로 변경

#### 3. 스토리 텔링 기능 구현
- 스토리 보드 구현(게시판)
- 페이지 형식 X, 댓글로 스토리를 이어가기 때문

#### 4. 댓글 기능 구현
- 로그인 한 유저가 댓글 달기
- 댓글 좋아요 기능 추가
- 하루(24시간) 기준으로 좋아요가 가장 많은 댓글이 그 당일의 스토리로 뽑아지며 뽑아진 댓글이 메인 스토리에 추가가 됩니다.

#### 5. 예전 스토리 보기 구현
- 이전에 다른 사람들(여러명 혹은 한명)이 쓴 스토리를 볼 수 있다.

**로그인 한 유저에 한해서 추가 가능**
- 댓글을 달 수 있다. 
- 본인이 과거에 썼던 글을 볼 수 있다.
- 좋아요를 누를 수 있다. 
