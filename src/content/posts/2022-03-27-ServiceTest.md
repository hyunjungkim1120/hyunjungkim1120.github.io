---
title: Service 테스트 @ExtendWith
template: blog-post
tags: [ springboot ]
date: 2022-03-27T05:25:44.226Z
slug: /ExtendWith
featuredImage: /assets/Spring/extendWith.jpg
description: Service 테스트 @ExtendWith
---



</br>

## 📋 Service 테스트 작성

@SpringBootTest는 application을 띄우기때문에 시간이 오래걸리고 무거워 단위테스트하는데는 알맞지 않다.  test안에서 어플리케이션의 모든 빈이 떠있기때문에 목객체를 만들지 않아도 service들을 @Autowired 로 사용가능 하지만 격리성이 떨어지고 DB에 데이터가 있어야지만 Test할 수 있으므로 아래와 같이 Mockito를 사용해서 Service 테스트를 작성해본다.



> JUnit 4에서 제공하던 @RunWith 를 사용했는데 JUnit5부터는 ExtendWith 사용!
>
> 참고 : https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.testing.spring-boot-applications

```java
@ExtendWith(MockitoExtension.class)
public class DmarkerServiceTest {
    
    @Mock
    private DeveloperRepository developerRepository;
    @Mock
    private RetireDeveloperRepository retireDeveloperRepository;

    @InjectMocks
    private DMakerService dMakerService;

    @Test
    public void testSomething() {
        //org.mockito import해서 given 사용
        //findByMemberId에 아무 문자열이나 주면 이런 응답을 주겠다고 Mocking을 설정
        given(developerRepository.findByMemberId(anyString()))
            .willReturn(Optinal.of(Developer.builder()
                                  .developerLevel(DeveloperLevel.SENIOR)
                                  .experienceYears(12)
                                  .statusCode(StatusCode.EMPLOYED)
                                  .name("name")
                                  .age(12)
                                  .build()));

        DeveloperDetailDto developerDetail = dMarkerService.getDeveloperDetail("memberId");

        assertEquals(SENIOR, developerDetail.getDeveloperLevel());
        assertEquals(12, developerDetail.getExperienceYears());

    }

    @Test
    void createDeveloperTest_success() {
        //given
        CreateDeveloper.Request request = CreateDeveloper.Request.builder()
            .developerLevel(DeveloperLevel.SENIOR)
                                  .experienceYears(12)
                                  .memberId("memberId")
                                  .name("name")
                                  .age(32)
                                  .build();
        given(developerRepository.findByMemberId(anyString()))
            .willReturn(Optinal.empty());

        ArgumentCaptor<Developer> captor = 
            ArgumentCaptor.forClass(Developer.class);

        //when
        CreateDeveloper.Response = dMarkerService.createDeveloper(request);

        //then
        verify(developerRepository, times(1))
            .save(captor.capture());
        Developer savedDeveloper = captor.getValue();
        assertEquals(SENIOR, savedDeveloper.getDeveloperLevel());
        assertEquals(12, savedDeveloper.getExperienceYears());
    }
}
```

💡 위의 코드와 같이 ArgumentCaptor 로 create하는 Data를 확인할 수 있다. 

</br>



**@Mock** : mock 객체를 만들어 반환(실제 인스턴스 없이 가상의 mock 인스턴스를 직접 만들어 사용)

**@Spy** : spy 객체를 만들어 반환(실제 인스턴스를 사용해서 mocking 함, Spy 객체는 행위를 지정하지 않으면 객체를 만들 때 사용한 실제 인스턴스의 메서드를 호출한다.) -> ARepository의 메소드 중 a함수는 return값을 만들어주고 b함수는 실제 기능을 그대로 사용하고 싶은 경우

**@InjectMocks** : @Mock이나 @Spy 객체를 자신의 멤버 클래스와 일치하면 주입

**@MockBean** : ApplicationContext에 mock객체를 추가*(org.springframework.boot.test.mock.mockito.MockBean)*

**@SpyBean** : ApplicationContext에 spy객체를 추가

</br>

##### @MockBean은 스프링 컨텍스트에 mock객체를 등록하게 되고 스프링 컨텍스트에 의해 @Autowired가 동작할 때 등록된 mock객체를 사용할 수 있도록 동작!

```java
@MockBean
private DeveloperRepository developerRepository;
@MockBean
private RetireDeveloperRepository retireDeveloperRepository;

@Autowired
private DMakerService dMakerService;
```

