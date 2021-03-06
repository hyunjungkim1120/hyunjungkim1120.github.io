---
title: Spring RestAPI ๊ธฐ์ด
template: blog-post
tags: [ springboot ]
date: 2022-01-12T05:25:44.226Z
slug: /springrestapi
featuredImage: /assets/Spring/restapi.jpg
description: Spring RestAPI

---



</br>

### ๐ REST ๊ตฌ์ฑ

์์(resource): URI

ํ์(verb): HTTP Method

- ํด๋น ์์์ ๋ํ CRUD Operation์ ์ ์ฉํ์ฌ ์๋์ ๊ฐ์ด ์ฌ์ฉ.
  - Create: ๋ฐ์ดํฐ ์์ฑ (POST)
  - Read: ๋ฐ์ดํฐ ์กฐํ (GET)
  - Update: ๋ฐ์ดํฐ ์์  (PUT)
  - Delete: ๋ฐ์ดํฐ ์ญ์  (DELETE)

</br>

</br>

### GET

- ๋ฐ์ดํฐ๋ฅผ ์กฐํ ํ ๋ ์ฌ์ฉ

name, itemNumber ๋ณ์๊ฐ ์๋ ItemDto๋ฅผ GETํด๋ณด์! 

```java:title=Controller
@RestControllerAdvice
package com.example.api.controller;

import com.example.api.dto.ItemDto;
import com.example.api.dto.RequestDto;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("api")
public class ApiController {

    //1.Map Param๊ฐ ๋ฐ๊ธฐ
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

    //2.DTO๋ก ๊ฐ ๋ฐ๊ธฐ
    @GetMapping(path="query-param-dto")
    public String queryParam03(ItemDto item)
    {
        System.out.println(item);
        return item.toString();
    }

    //3. ์์ ํ๋์ฉ ๊ฐ ๋ฐ๊ธฐ
    @GetMapping(path="query-param")
    public String queryParam02(@RequestParam String name, @RequestParam String itemNumber)
    {
        System.out.println("name : "+name+", itemNumber : "+ itemNumber);
        return "name : "+name+", itemNumber : "+ itemNumber;
    }
}

```

</br>

GET ์๋ต ๊ฒฐ๊ณผ ํ์ธํ๊ธฐ

![get200](/assets/Spring/restapi/get200.PNG)



</br>

3๋ฒ ๋ณ์๋ช์ผ๋ก ํ๋์ฉ ๋ฐ๋ ๊ฒฝ์ฐ API์์ฒญ์ **QUERY PARAMETERS** ์ ์ผ์นํ์ง์๋ ๋ณ์๊ฐ ์ถ๊ฐ์ ์ผ๋ก ์๋ ๊ฒฝ์ฐ๋ ํด๋น๋ณ์๋ฅผ ์ ์ธํ๊ณ  ํ์ํ ๊ฐ๋ง ๋ฐ์์จ๋ค. ํ์ง๋ง ํ์ํ RequestParam ์  **API QUERY PARAMETERS** ์ ๋ด์์ฃผ์ง์์๋ค๋ฉด  400์๋ฌ๋ฅผ ๋ฆฌํดํ๋ค.

![get400](/assets/Spring/restapi/get400.PNG)





</br>

</br>

### Post

- ๋ฐ์ดํฐ๋ฅผ ์ถ๊ฐํ ๋ ์ฌ์ฉ **(Insert)**

์ปจํธ๋กค๋ฌ์ ์๋์ฝ๋๋ฅผ ์ถ๊ฐํด์ Post๋ฅผ ํ์ธํด๋ณด์

api ์์ Json ๋ฐ์ดํฐ๋ฅผ body์ ๋ด์๋ณด๋ด๋ ๊ฒฝ์ฐ ๋ณ์๋ช ํ๊ธฐ๋ฒ์ ๋ง์ถ๊ธฐ์ํด (Json ์์๋ Snakeํ๊ธฐ๋ฒ Java๋ camelํ๊ธฐ๋ฒ)

Dto Class ์์ `@JsonNaming(value = PropertyNamingStrategy.SnakeCaseStrategy.class)` ๋ฅผ ์ฌ์ฉํ๊ฑฐ๋,

๊ฐ ๋ณ์ ์์ `@JsonProperty("phone_number")` ์ด๋ธํ์ด์ ์ฌ์ฉ!

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

- ๋ฐ์ดํฐ๋ฅผ ์์ ํ ๋ ์ฌ์ฉ**(Update)**

์ปจํธ๋กค๋ฌ์ ์๋์ฝ๋๋ฅผ ์ถ๊ฐํด์ Put๋ฅผ ํ์ธํด๋ณด์

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

- ๋ฐ์ดํฐ๋ฅผ ์ญ์ ํ ๋ ์ฌ์ฉ**(delete)**

์ปจํธ๋กค๋ฌ์ ์๋์ฝ๋๋ฅผ ์ถ๊ฐํด์ delete๋ฅผ ํ์ธํด๋ณด์

```java
@DeleteMapping("/delete/{userId}")
public void delete(@PathVariable String userId, @RequestParam String name){
    System.out.println("userId : " + userId);
    System.out.println("name : " + name);
}
```



</br>

</br>

### ๐ก ์๋ต์ฝ๋

- 100 ๋ฒ๋ 

โ      100 :๋ฐ์ดํฐ์ ์ผ๋ถ๋ฅผ ์๋ฒ๊ฐ ๋ฐ์ ์ํ(์ฒ๋ฆฌ์ค์ธ ์ํ)

- 200 ๋ฒ๋ ์ํ์ฝ๋ : ์ ์์ ์ธ ์ฒ๋ฆฌ ํ ์๋ต

โ      200  :  OK , ์ ์์ฒ๋ฆฌ

โ      204  :  ์ ์์ฒ๋ฆฌ ๋์์ผ๋, ์๋ฒ์ ๋ณด๋ผ ๋ฐ์ดํฐ๊ฐ ์์

- 300 ๋ฒ๋(๋ค๋ฅธ URL ์ฒ๋ฆฌ)

โ      301: ์์ฒญํ URL์ด ์๋ก ๋ณ๊ฒฝ๋์์.

โ      304: ๊ธฐ์กด์ ๋ฐ์ดํฐ์ ๋ณ๊ฒฝ๋๊ฒ์ด ์์

- 400๋ฒ๋ 

โ      400: ์์ฒญ์ ๋ฌธ์ ๊ฐ ์๊ธฐ๋๋ฌธ์ ์๋ฒ์์ ์ธ์ํ  ์ ์์

โ      403: ์๋ฒ์์ ํ๋ฝ๋์ง์์

โ      404: ์์ฒญ URL์ ์ฐพ์ ์ ์์

โ      406: ์ ์ก ๋ฐฉ์์ด ํ๋ฝ๋์ง ์์(REST๋ฐฉ์์์ ์์ฃผ ๋ํ๋๋ ์ํ์ฝ๋)

- 500๋ฒ๋

โ      500: ์๋ฒ์์ ์ฒ๋ฆฌ์ ๋ฌธ์ ๊ฐ ๋ฐ์(ํ๋ก๊ทธ๋จ ๋ด๋ถ์ ์ธ ์ค๋ฅ)

โ      502: ๊ฒ์ดํธ์จ์ด, ํ๋ก์ ์ํ์ ๋ฌธ์ (๊ณผ๋ถํ)

โ      503: ์ผ์์ ์ธ ์๋น์ค ์ค๋จ ์ํ

โ      504: ์ง์ ๋ ์ฒ๋ฆฌ์๊ฐ์ด ์ง๋์ ์ฒ๋ฆฌ๋์ง ๋ชปํ๋ ๊ฒฝ์ฐ
