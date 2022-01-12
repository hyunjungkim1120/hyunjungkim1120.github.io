---
title: MySQL 서버 기초
template: blog-post
tags: [ mysql ]
date: 2022-01-12T05:25:44.226Z
slug: /mysqlengines
featuredImage: /assets/Mysql/mysql.jpg
description: MySQL 서버에 대해 알고 넘어가자

---

</br>

💡MySQL 서버는 MySQL 엔진, 스토리지엔진으로 구분!

**<MySQL 엔진>**

- 파서(Parsor) -  DB에 존재하는 테이블 대상으로 SQL문을 작성했는지와 같은 세부사항을 다양한 문법 및 구문으로 검사
- 옵티마이저(Optimizer) -  사용자가 요청한 데이터를 빠르고 효율적으로 찾아가는 전략적 계획 수립 

-> 이계획을 토대로 스토리지 엔진에 위치한 데이터를 MySQL 엔진으로 전달
-> MySQL 엔진은 전달된 데이터의 불필요한 부분을 필터링 하고 사용자에게 최종 결과 전달

</br>

</br>

**<스토리지 엔진>**

물리적 저장장치의 데이터에 접근하는 실질적인 데이터 저장 및 조회 

MySQL/MariaDB에는 다양한 스토리지 엔진이 존재하고 가장 많이 사용한다고 알려진 엔진에는 MyISAM 와 InnoDB 가 있다.  (MySQL 5.5부터는 InnoDB가 기본)

</br>

1. 각 테이블에 적용된 엔진 확인

```mysql
show table STATUS;
```

</br>

2. DBMS에서 지원하는 엔진 종류 확인

```mysql
show ENGINES;
```

MariaDb 10.6.3 에서 해당 show ENGINES;을 실행한 결과

<img src="C:\Users\hyunjung\Desktop\현정\showENGINES.JPG" alt="showENGINES" style="zoom:80%;" />



</br>

MySQL 5.5 이전에서는 MyISAM이 기본이었지만 5.5 이후 InnoDB가 기본으로 사용되고 있다.  MyISAM과 유사한 면이 있지만 보다 많은 기능을 제공한다.

</br>

InnoDB는 다수의 사용자가 동시 접속을 할 수 있고, 대용량의 데이터를 처리할 수 있는 등 우수한 성능을 자랑하지만 Deadlock 발생, 많은 자원소모 등 단점도 있다.

</br>

**오라클**에서는 중첩루프조인(nested loop join) 뿐아니라 정렬 병합 조인(sort merge join), 해시조인(hash join) 방식도 제공하지만 **MySQL/MariaDB**의 경우 대부분 중첩루프조인으로 풀린다. 또한 상용DBMS와는 다르게 수행 쿼리 결과를 메모리에 적재하는 부분에 한계가 있어 일반적 튜닝이 통하지않는 경우도 존재한다고 한다.
그렇기 때문에 DBMS 제공기능을 잘 인지하고 실행계획을 항상 확인하여 쿼리를 효율적으로 작성하는 습관이 중요하다.

다음엔 튜닝에 대해서 게시글을 쓸 예정이다 :)
