---
title: Spring RestAPI 기초
template: blog-post
tags: [ restapi ]
date: 2022-01-12T05:25:44.226Z
slug: /springrestapi
featuredImage: /assets/Spring/restapi.jpg
description: Spring RestAPI

---



</br>

### REST 구성

자원(resource): URI

행위(verb): HTTP Method

- 해당 자원에 대한 CRUD Operation을 적용하여 아래와 같이 사용.
  - Create: 데이터 생성 (POST)
  - Read: 데이터 조회 (GET)
  - Update: 데이터 수정 (PUT)
  - Delete: 데이터 삭제 (DELETE)

</br>

</br>

### GET

- 데이터를 조회 할떄 사용

name, itemNumber 변수가 있는 ItemDto를 GET해보자! 

```java
package com.example.api.controller;

import com.example.api.dto.ItemDto;
import com.example.api.dto.RequestDto;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("api")
public class ApiController {

    //1.Map Param값 받기
    @GetMapping(path="query-param-map")
    public String queryParam(@RequestParam Map<String, String> queryParam)
    {
        StringBuilder sb = new StringBuilder();

        queryParam.entrySet().forEach(entry -> {System.out.println(entry.getKey());
            System.out.println(entry.getValue());
            System.out.println("\n");
            sb.append(entry.getKey()+" = "+entry.getValue()+"\n");
        });
        return sb.toString();
    }

    //2.DTO로 값 받기
    @GetMapping(path="query-param-dto")
    public String queryParam03(ItemDto item)
    {
        System.out.println(item);
        return item.toString();
    }

    //3. 요소 하나씩 값 받기
    @GetMapping(path="query-param")
    public String queryParam02(@RequestParam String name, @RequestParam String itemNumber)
    {
        System.out.println("name : "+name+", itemNumber : "+ itemNumber);
        return "name : "+name+", itemNumber : "+ itemNumber;
    }
}

```

</br>

GET 응답 결과 확인하기

![get200](/assets/Spring/restapi/get200.PNG)



</br>

3번 변수명으로 하나씩 받는 경우 API요청시 **QUERY PARAMETERS** 에 일치하지않는 변수가 추가적으로 있는 경우는 해당변수를 제외하고 필요한 값만 받아온다. 하지만 필요한 RequestParam 을  **API QUERY PARAMETERS** 에 담아주지않았다면  400에러를 리턴한다.

![get400](/assets/Spring/restapi/get400.PNG)





</br>

</br>

### Post

- 데이터를 추가할떄 사용 **(Insert)**

컨트롤러에 아래코드를 추가해서 Post를 확인해보자

api 에서 Json 데이터를 body에 담아보내는 경우 변수명 표기법을 맞추기위해 (Json 에서는 Snake표기법 Java는 camel표기법)

Dto Class 위에 `@JsonNaming(value = PropertyNamingStrategy.SnakeCaseStrategy.class)` 를 사용하거나,

각 변수 위에 `@JsonProperty("phone_number")` 어노테이션 사용!

```java
/* RequestDto
private String name;
@JsonProperty("phone_number")
private String phoneNumber;
@JsonProperty("item_list")
private List<ItemDto> itemList;
*/

@PostMapping("/post-map")
public void postMap(@RequestBody Map<String, Object> requestData)
{
    requestData.forEach((key, value) -> {
        System.out.println("key : " + key);
        System.out.println("value : " + value);
    });
}

@PostMapping("/post")
public RequestDto post(@RequestBody RequestDto requestData)
{
    System.out.println(requestData);
    return requestData;
}
```



![postRequest](/assets/Spring/restapi/postRequest.PNG)

![post200](/assets/Spring/restapi/post200.PNG)



</br>

</br>

### Put

- 데이터를 수정할떄 사용**(Update)**

컨트롤러에 아래코드를 추가해서 Put를 확인해보자

```java
@PutMapping("/put")
public RequestDto put(@RequestBody RequestDto requestData)
{
    System.out.println(requestData);
    return requestData;
}

@PutMapping("/put/{userId}")
public RequestDto put(@RequestBody RequestDto requestData, @PathVariable(name = "userId") Long id)
{
    System.out.println("PathVariable userId : " + id);
    System.out.println(requestData);
    return requestData;
}
```

</br>

</br>

### DELETE

- 데이터를 삭제할때 사용**(delete)**

컨트롤러에 아래코드를 추가해서 delete를 확인해보자

```java
@DeleteMapping("/delete/{userId}")
public void delete(@PathVariable String userId, @RequestParam String name){
    System.out.println("userId : " + userId);
    System.out.println("name : " + name);
}
```



</br>

</br>

### 응답코드

- 100 번대 

​      100 :데이터의 일부를 서버가 받은 상태(처리중인 상태)

- 200 번대 상태코드 : 정상적인 처리 후 응답

​      200  :  OK , 정상처리

​      204  :  정상처리 되었으나, 서버에 보낼 데이터가 없음

- 300 번대(다른 URL 처리)

​      301: 요청한 URL이 새로 변경되었음.

​      304: 기존의 데이터와 변경된것이 없음

- 400번대 

​      400: 요청에 문제가 있기때문에 서버에서 인식할 수 없음

​      403: 서버에서 허락되지않음

​      404: 요청 URL을 찾을 수 없음

​      406: 전송 방식이 허락되지 않음(REST방식에서 자주 나타나는 상태코드)

- 500번대

​      500: 서버에서 처리시 문제가 발생(프로그램 내부적인 오류)

​      502: 게이트웨이, 프록시 상태의 문제(과부하)

​      503: 일시적인 서비스 중단 상태

​      504: 지정된 처리시간이 지나서 처리되지 못하는 경우
