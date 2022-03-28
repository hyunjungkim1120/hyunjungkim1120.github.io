---
title: Controller 테스트 @WebMvcTest
template: blog-post
tags: [ springboot ]
date: 2022-03-28T05:25:44.226Z
slug: /webMvcTest
featuredImage: /assets/Spring/webMvcTest.jpg
description: Controller 테스트 @WebMvcTest 및 JPA metamodel must not be empty! 에러 해결기록

---



</br>

## 📋 Controller 테스트 작성

@WebMvcTest - MVC를 위한 테스트로 컨트롤러가 예상대로 동작하는지 테스트하는데 사용

> `@WebMvcTest`Spring MVC 인프라를 자동 구성하고 스캔된 빈을 `@Controller`, `@ControllerAdvice`, `@JsonComponent`, `Converter`, `GenericConverter`, `Filter`, `HandlerInterceptor`, `WebMvcConfigurer`, `WebMvcRegistrations`및 `HandlerMethodArgumentResolver`. 일반 `@Component`및 빈은 주석이 사용될 `@ConfigurationProperties`때 스캔되지 않습니다 . 
>
> 참고 : https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.testing

```java
@WebMvcTest(DMakerController.class)
class DMakerControllerTest {
    @Autowired
    private MockMvc mockMvc;
    
    @MockBean
    private DMakerService dMakerService;
    
    protected Mediatype contentType = 
        new MediaType(MediaType.APPLICATION_JSON.getType(),
                     MediaType.APPLICATION_JSON.getSubtype(),
                     StandardCharsets.UTF_8);
    
    @Test
    void getAllDevelopers() throws Exception {
        DeveloperDto juniorDeveloperDto = DeveloperDto.builder()
            .developerSkillType(DeveloperSkillType.BACK_END)
            .developerLevel(DeveloperLevel.JUNIOR)
            .memberId("memberId").build();
        DeveloperDto seniorDeveloperDto = DeveloperDto.builder()
            .developerSkillType(DeveloperSkillType.FRONT_END)
            .developerLevel(DeveloperLevel.SENIOR)
            .memberId("memberId").build();
        given(dMakerService.getAllEmployedDevelopers())
            .willReturn(Arrays.asList(juniorDeveloperDto, seniorDeveloperDto));
        
        
        mockMvc.perform(get("/developers").contentType(contentType))
            .andExpect(status().isOk())
            .andDo(print())
            .andExpect(
            	jsonPath("$.[0].developerSkillType",
                        is(DeveloperSkillType.BACK_END.name()))
            .andExpect(
            	jsonPath("$.[0].developerSkillType",
                        is(DeveloperLevel.JUNIOR.name()))
            .andExpect(
            	jsonPath("$.[1].developerSkillType",
                        is(DeveloperSkillType.FRONT_END.name()))
            .andExpect(
            	jsonPath("$.[1].developerSkillType",
                        is(DeveloperLevel.SENIOR.name()))
        )
    }
}
```



</br>

</br>

##### 테스트를 진행해 보다가 만난 .IllegalArtumentException : JPA metamodel must not be empty! 에러!

-> 아래 SpringBootApplication에서 EnableJpaAuditing를 통해 Auditig을 활성화해주고 BaseEntity*(abstract class)*를 만들어서 각 테이블에 중복되는 필드들 (수정자, 수정시간 등)을 만들어 각 Entity는 BaseEntity를 상속 받아 사용했었는데,

이와같이 Entity들의 생성 및 수정 LocalDateTime을 자동으로 관리해주는 Auditing 기능을 사용하기 위해 @EnableJpaAuditing를 @SpringBootApplication에 등록해놓은 것이 에러의 원인이였다.

@EnableJpaAuditing 때문에 모든 테스트들이 항상 JPA 관련 Bean들을 필요로 하기 때문.

</br>

##### 💡 해결방법 

1. **Configuration 분리**

   ```java
   //기존
   @EnableJpaAuditing
   @SpringBootApplication
   public class DmakerApplication {
   
       public static void main(String[] args) {
           SpringApplication.run(MyblogApplication.class, args);
       }
   }
   ```

   ```java
   //변경후
   @Configuration
   @EnableJpaAuditing
   public class JpaConfiguration {  
   }
   
   @SpringBootApplication
   public class DmakerApplication {
   
       public static void main(String[] args) {
           SpringApplication.run(MyblogApplication.class, args);
       }
   }
   ```

2. **MockBean 추가**

   ```java
   @WebMvcTest(DMakerController.class)
   @MockBean(JpaMetamodelMappingContext.class)
   ```

</br>

이와 같이 @WebMvcTest를 통해 Controller 테스트를 하면 통합 테스트를 진행하기 어려운 테스트(ex테스트로 호출해보기 우려운 API) 에서도 Mock을 통해 가짜 객체로 테스트도 가능하고 WebApplication 관련된 Bean들만 등록하기 때문에 통합 테스트보다 빠르다는 장점도 있지만

Mock기반으로 테스트를 진행하기 때문에 실제 환경에서 제대로 동작하지 않을 수도있다는 단점이 있다.



</br>

</br>

## 참고자료

- [갓대희의 작은공간](https://goddaehee.tistory.com/212)

- [Spring Boot 테스트 에러 : JPA metamodel must not be empty!](https://xlffm3.github.io/spring%20&%20spring%20boot/JPAError/)

