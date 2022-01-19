---
title: Spring Boot Validation
template: blog-post
tags: [ springboot ]
date: 2022-01-16T05:25:44.226Z
slug: /springbootvalidation
featuredImage: /assets/Spring/validation.jpg
description: Spring RestAPI

---



</br>

### 유효성체크 | Spring Boot

💡 Spring Boot 에서 유효성 체크를 하는 방법중 `spring-boot-starter-validation` 을 사용하여 유효성을 검증해보자

</br>

spring boot 2.3 version 이상부터는 `spring-boot-starter-web` 의존성 내부에 있던 **validation**이 분리되었다.

그러므로 사용하는 spring boot version이 2.3 이상이라면 validation 의존성을 따로 추가해야한다.

</br>

</br>

```java:title=build.gradle
//Gradle
implementation 'org.springframework.boot:spring-boot-starter-validation'
    
    
//Maven
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
    <version>2.5.2</version>
</dependency>    
```

</br>

아래는 Gradle 에 의존성 추가를 하는 화면이다.

![dependencies](/assets/Spring/dependencies.png)



</br>

📋  **자주 사용하는 Validation 어노테이션**

- **@NotNull** : 해당 값에 Null을 허용하지 않음

- **@NotBlank** : Null을 허용하지 않으며 문자가 한 개 이상 포함되어야 함 (공백 제외)

- **@NotEmpty** : Null을 허용하지 않으며 공백 문자열을 허용하지 않음

- **@AssertTrue** : true인지 확인

- **@Min** : 값이 Min보다 작은지 확인 

- **@Max** : 값이 Max보다 큰지 확인

- **@Size** : 값이 min과 max사이에 해당하는지 확인 (CharSequence, Collection, Map, Array에 해당)

  ...등 다양한 어노테이션을 사용하여 유효성을 검증해보자!

</br>

### Annotation 을 사용한 Validation검증

```java:title=User
package com.example.validation.dto;

import javax.validation.Valid;
import javax.validation.constraints.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

public class User {

    @NotBlank
    private String name;
    @Max(value = 60)
    private  int age;
    @Pattern(regexp = "^\\d{2,3}-\\d{3,4}-\\d{4}$", message = "핸드폰 번호의 양식 불일치")
    private String phoneNumber;
    @Size(min = 6, max = 6)
    private String birthDate;

    @Valid
    private List<Item> items;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

    @AssertTrue
    public boolean isBirthDateValidation(){
        try{
            LocalDate localDate = LocalDate.parse(this.birthDate + "01", DateTimeFormatter.ofPattern("yyyyMMdd"));
        }catch (Exception e){
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", birthDate='" + birthDate + '\'' +
                ", items=" + items +
                '}';
    }
}

```

</br>

User 는 여러 Item을 가지므로 `List<Item> items` 를 추가한다면 **@Valid**  을 달아주어야 Item class에서 설정한 Validation 이 적용된다.

**@Pattern** 을 통해 표현식으로 다양한 유효성을 검증할 수도 있고 **@Max** **@Size** 등 다양한 어노테이션을 사용할 수 있다.

또한 **@AssertTrue** 을 통해 원하는 검증 로직을 직점 커스텀 할수도 있다. 하지만 이 방법은 동일한 validation을 적용하려는 다른 class에도 반복되는 코드를 적어야하는 재사용성 측면에서 단점을 가지고있다.

아래 유효성을 커스텀하는 다른 방법을 살펴볼 예정이니 우선 가볍게 넘어가자.


```java:title=Item
package com.example.validation.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotBlank;

public class Item {

    private String name;

    @NotBlank
    @JsonProperty("TYPE")
    private String type;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "Item{" +
                "name='" + name + '\'' +
                ", Type='" + type + '\'' +
                '}';
    }
}

```


</br>

```java:title=Controller
package com.example.validation.controller;

import com.example.validation.dto.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class ApiController {

    @PostMapping("/user")
    public ResponseEntity user(@Valid @RequestBody User user, BindingResult bindingResult){
        System.out.println(user);

        if(bindingResult.hasErrors()){
            StringBuilder sb = new StringBuilder();
            bindingResult.getAllErrors().forEach(objectError -> {
                FieldError field = (FieldError)objectError;
                String message = objectError.getDefaultMessage();

                System.out.println("field : " + field.getField());
                System.out.println(message);

                sb.append("field : " + field.getField());
                sb.append("message : " + message);
            });
            return  ResponseEntity.status(HttpStatus.BAD_REQUEST).body(sb.toString());
        }

        return ResponseEntity.ok(user);
    }
}

```

응답 확인하기

![200](/assets/Spring/validation/200.PNG)

![200response](/assets/Spring/validation/200response.PNG)

</br>

age를 65 로 바꿔서 요청해보면

![400response](/assets/Spring/validation/400response.PNG)

age 는 60 이하여야한다는 메세지를 확인할 수 있다.



유효성을 검증하는 어노테이션을 직접 만들어서 반복 사용할 수 있도록 코드를 구현해보자.

</br>

```java:title=DatePattern
package com.example.validation.annotation;

import com.example.validation.validator.DateValidator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.*;
import static java.lang.annotation.ElementType.TYPE_USE;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

@Constraint(validatedBy = {DateValidator.class})
@Target({ METHOD, FIELD, ANNOTATION_TYPE, CONSTRUCTOR, PARAMETER, TYPE_USE })
@Retention(RUNTIME)
public @interface DatePattern {

    String message() default "날짜 유효성 검증 실패";

    Class<?>[] groups() default { };

    Class<? extends Payload>[] payload() default { };

    String pattern() default "yyyyMMdd";

}

```



</br>

```java:title=DateValidator
package com.example.validation.validator;

import com.example.validation.annotation.DatePattern;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class DateValidator implements ConstraintValidator<DatePattern, String> {

    private String datePattern;

    @Override
    public void initialize(DatePattern constraintAnnotation) {
        this.datePattern = constraintAnnotation.pattern();
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        try{
            if(this.datePattern.equals("yyyyMM"))
            {
                value = value + "01";
            }
            if(value.length() != 6) return false;
            LocalDate localDate = LocalDate.parse(value+"01", DateTimeFormatter.ofPattern(this.datePattern));

        }catch (Exception e){
            return false;
        }
        return true;
    }
}
```

이전에 만들었던 User class 에서@AssertTrue 를 달았던 isBirthDateValidation 메서드를 제거하고

```java
@DatePattern(pattern = "yyyyMM")
private String birthDate;
```

birthDate 필드에 커스텀한 어노테이션 을 달아주자

`pattern = "yyyyMM"` 으로 설정하였기 때문에 Body에서 날짜를 20220117 혹은 aaaa 등과같이 **yyyyMM** 을 지키지 않으면 **날짜 유효성 검증 실패** 메세지를 Return 한다.

