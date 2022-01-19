---
title: RestControllerAdvice 예외처리
template: blog-post
tags: [ springboot ]
date: 2022-01-19T05:25:44.226Z
slug: /restControllerAdvice
featuredImage: /assets/Spring/restControllerAdvice.jpg
description: spring boot 에서 @RestControllerAdvice로 전역에서 예외를 처리하기

---



</br>

## @RestControllerAdvice

**전역적으로 예외처리하기**

</br>

`@ExceptionHandler`, `@ModelAttribute`, `@InitBinder` 가 적용된 메서드들에 `AOP`를 적용해 `Controller` 단에 적용하기 위해 고안된 어노테이션이라고 한다.
클래스에 선언하면 되며, 모든 `@Controller`에 대한, 전역적으로 발생할 수 있는 예외를 잡아서 처리할 수 있다.

</br>

💡 **@RestControllerAdvice  = @ControllerAdvice + @ResponseBody**

`@RestControllerAdvice` 는`@ControllerAdvice`와 동일한 역할을 수행하고, 추가적으로 `@ResponseBody`를 통해 객체를 리턴할 수도 있다.

</br>

</br>

Try Catch를 여기저기 사용해서 중복코드를 늘리지 않고도 전역적으로 예외를 처리하여보자.

</br>



```java:title=Controller
@RestController
@RequestMapping("/test")
public class RestControllerAdviceSample {

    @GetMapping("/hello")
	public String Hello() {
		throw new Exception("Exception in Hello api!");
	}
    
    @GetMapping("/bye")
	public String Bye() {
		throw new Exception("Exception in Bye api!");
	}
}
```

</br>

Exception에서 상속받고 있는 Throwable 클래스에 정의되어있는 getLocalizedMessage  를 사용해서 에러 메세지를  출력하고 ResponseEntity로 응답해보자.

</br>



```java:title=GlobalControllerAdvice.java
@RestControllerAdvice
public class GlobalControllerAdvice {

	@ExceptionHandler(IllegalArgumentException.class)
	public ResponseEntity exception(Exception e) {
		System.out.println(e.getLocalizedMessage());
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("");
	}

}
```

</br>

📋 @RestControllerAdvice 에서 자주쓰이는 속성들

| 상황                                                 | code                                                         |
| ---------------------------------------------------- | ------------------------------------------------------------ |
| 해당 패키지 Exception 처리<br />(basePackages)       | @RestControllerAdvice(basePackages = "com.example")          |
| 해당 클래스 Exception 처리<br />(basePackageClasses) | @RestControllerAdvice(basePackageClasses = MyController.class) |
| anotation Exception처리<br />(annotations)           | @RestControllerAdvice(annotations = RestController.class)    |

</br>

이밖에도 @ExceptionHandler에 value를 통해 어떤 Exception을 처리할 것인지 지정할 수 있다. value가 여러개라면 value = { , , } 로 처리

- @ExceptionHandler(value = MethodArgumentNotValidException.class)

</br>

</br>



## 참고자료

- [@RestControllerAdvice 를 이용해서 예외 처리하기](https://javachoi.tistory.com/253)

- [ResponseEntity는 왜 사용하는 것이며 @RestControllerAdvice는 무엇일까.](https://woodcock.tistory.com/19)

- [Spring Boot Reference Documentation](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#web.servlet.spring-mvc.error-handling)

- [@RestControllerAdvice를 사용해보자](https://velog.io/@banjjoknim/RestControllerAdvice)

