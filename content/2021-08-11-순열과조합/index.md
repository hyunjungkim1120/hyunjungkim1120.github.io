---
title: 순열과 조합 알고리즘 Java
tags: [ algorithm ]
date: 2021-08-11T05:25:44.226Z
path: blog/perm-comb
cover: ./combperm.png
excerpt: 순열, 중복순열, 조합, 중복조합 알고리즘은 응용해서 많은 문제가 나온다. 정확히 이해하고 넘어가자
---



**목차**

------

[TOC]

**간단 예시**

------

**순서를 정해서나열하는 순열** example

- 순열 - 5명의 학생중 반장, 부반장, 선도를 뽑는 경우 (단, 한 사람은 하나의 직책만 맡을 수 있다)

- 중복순열 - 5명의 학생중 반장, 부반장, 선도를 뽑는 경우 (단, 한 사람이 여러개 직책을 맡을 수 있다. 혼자 반장, 부반장, 선도 가능)

**순서를 고려하지않고 뽑는 조합** example

- 조합 - 5명의 학생중 햄버거 먹을 사람 3명 뽑는 경우 (단, 1인 1햄버거)
- 중복조합 - 5명의 학생중 햄버거 먹을 사람 3명 뽑는 경우 (단, 혼자 햄버거 여러개 먹기 가능)

## 순열 _ (Permutation)

순열이란 서로 다른 n개 중 r개를 골라 순서를 고려해 나열한 경우의 수를 말한다.

**nPr  = n!(n-r)!** 



예를들어 3명의 학생이 등교하는 순서대로 줄을 선다고 생각해보자

```
[1,2,3]
```



```
[
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1]
]
```



1번학생 -> 2번학생->3번학생

1번학생 -> 3번학생->2번학생

2번학생 -> 1번학생->3번학생

3번학생 -> 1번학생->2번학생

3번학생 -> 2번학생->1번학생

​				=총 6가지경우의 수가 생긴다.



이젠 3명의 학생중 두명까지만 줄을 선다고 생각해보자

```
[1,2,3]
```



```
[
    [1, 2],
    [1, 3],
    [2, 1],
    [2, 3],
    [3, 1],
    [3, 2]
]
```

​			=총 6가지경우의 수가 생긴다.



이젠 Java 로 해당 알고리즘을 생각하면서 구현해보자. 이해가 어렵다면 중복순열부터 보고오면 이해가 쉽다.

```java
import java.util.Arrays;

public class 순열 {

    public static void main(String[] args) {
        // TODO Auto-generated method stub
        int r = 3; //뽑을 갯수
        int[] arr = {1, 2, 3};
        int[] output = new int[r];
        boolean[] visited = new boolean[arr.length];
        perm(arr, output, visited, 0, r);
    }

    //(배열, 결과배열, 방문체크배열, 현재인덱스, 최종적으로뽑을갯수)
    static void perm(int[] arr, int[] output, boolean[] visited, int depth, int r) {
        if (depth == r) {
            System.out.println(Arrays.toString(output));
            return;
        }

        for (int i = 0; i < arr.length; i++) {
            if (visited[i] != true) {
                visited[i] = true;
                output[depth] = arr[i];
                perm(arr, output, visited, depth + 1, r);
                visited[i] = false;
            }
        }
    }
}
```

[1, 2, 3] 배열에서 순열로 3개를 뽑는 경우

맨처음 main에서 perm을 호출하면 for문에서 1자리에 방문체크하고 1을 뽑는다. 

인덱스를 +1 하여 다시 perm 호출하면 0부터 진행하는 for문에서 1은 방문체크가 true로 이전에 되어있으므로 2를 방문체크하고 2를 뽑는다.

인덱스를 +1 하여 다시 perm 호출하면 0부터 진행하는 for문에서 1과 2는 방문체크가 true로 이전에 되어있으므로 3를 방문체크하고 3를 뽑는다.

인덱스를 +1 하여 다시 perm 호출하면 if(depth == r) 조건에 걸리므로 ``[1, 2, 3]``을 출력하고 return

perm이 끝나서 인덱스2(i=2)의 방문상태를 false로 변경

for문이끝나서 현재 perm이끝나고 이번엔 인덱스 1(i=1)의 방문상태를 false로 변경

현재 output은 [1, , ]상태이며 for문 i=2 시작

3을 방문체크하고 뽑는다   

인덱스를 +1 하여 다시 perm 호출하면 1 ,3 은 방문체크 true이므로 ``[1, 3, 2]`` 를 출력하고 return 

이런식으로 DFS를 돌면서 모든 인덱스를 방문하는 형식이다.





## 중복순열_ (rePermutation)

중복순열은 중복을 허락하여 순서대로 뽑는 경우의 수 이다.



예를들어 3명의 학생중 반장 부반장 선도를 뽑는 경우의 수를 생각해보다. 단 한사람이 반장도하고 선도도하고 부반장도할 수 있다.

```
[1,2,3]
```



```
[
    [1, 1, 1],
    [1, 1, 2],
    [1, 1, 3],
    [1, 2, 1],
    [1, 2, 2],
    [1, 2, 3],
    [1, 3, 1],
    [1, 3, 2],
    [1, 3, 3],
    [2, 1, 1],
    [2, 1, 2],
    [2, 1, 3],
    [2, 2, 1],
    [2, 2, 2],
    [2, 2, 3],
    [2, 3, 1],
    [2, 3, 2],
    [2, 3, 3],
    [3, 1, 1],
    [3, 1, 2],
    [3, 1, 3],
    [3, 2, 1],
    [3, 2, 2],
    [3, 2, 3],
    [3, 3, 1],
    [3, 3, 2],
    [3, 3, 3]
]
```

​				=총 27지경우의 수가 생긴다. (n개중r개를 중복순열하면 n의 r 제곱)



이젠 Java 로 해당 알고리즘을 생각하면서 구현해보자. 

```java
import java.util.Arrays;

public class 중복순열 {

    public static void main(String[] args) {
        // TODO Auto-generated method stub
        int r = 3; //뽑을 갯수
        int[] arr = {1, 2, 3};
        int[] output = new int[r];
        reperm(arr, output, 0, r);
    }
    //(배열, 결과배열, 현재인덱스, 최종적으로뽑을갯수)
    static void reperm(int[] arr, int[] output, int depth, int r) {
        if (depth == r) {
            System.out.println(Arrays.toString(output));
            return;
        }

        for (int i=0; i<arr.length; i++) {
            output[depth] = arr[i];
            reperm(arr, output, depth + 1, r);
        }
    }
}
```

[1,1,1]을 뽑고 

perm을 나오면 depth가 2인상태에서 for문 i=1을 돌면 [1,1,2]를 뽑고 

다시 perm을 나오면 depth가 2인상태에서 for문 i=2을 돌면 [1,1,3]을뽑고 

perm을 나오면 depth가 2인상태에서 다음 for문 조건에 불충족하여 

또한번 perm을 끝내면 depth가 1인상태로 [1, 2, ] 뽑기부터 시작......계속 반복한다.



## 조합_(Combination)

조합은 n개의 수 중 순서에 상관없이 중복하지않고 r개를 뽑는 것이다. 



예를들어 4명의 학생중 3개밖에 없는 햄버거를 먹을수있는 3명을 뽑는 경우의 수 생각해보자

```
[1,2,3,4]
```



1,2,3과 1,3,2 은 같은 결과로 친다.

```
[
    [1, 2, 3],
    [1, 2, 4],
    [1, 3, 4],
    [2, 3, 4]
]
```



```java
import java.util.Arrays;

public class 조합 {

  public static void main(String[] args) {
    // TODO Auto-generated method stub
    int r = 3; //뽑을 갯수
    int[] arr = {1, 2, 3, 4};
    int[] output = new int[r];  
    comb(arr, output, 3, 0, 0);
  }
    
  static void comb(int[] arr, int[] output, int r, int depth, int target) {
        if (depth == r) {
            for(int i : output){
                System.out.print(i+" ");
            }
            System.out.println();
            return;
        }
        if(target == arr.length)return;
         
        output[depth] = arr[target];
        comb(arr, output, r, depth+1, target+1);//뽑는경우
        comb(arr, output, r, depth, target+1);//안뽑는경우
    }
}
```





## 중복조합_(reCombination)

중복조합은 n개의 수 중 순서에 상관없이 중복상관없이 r개를 뽑는 것이다. 

**nHr**

예를들어 4명의 학생중 3개밖에 없는 햄버거를 먹을수있는 3명을 뽑는 경우의 수 생각해보자

1명이 햄버거를 3개 다 먹어도된다.

```
[1,2,3,4]
```



1,2,3과 1,3,2 은 같은 결과로 친다.

```
[
    [1, 1, 1],
    [1, 1, 2],
    [1, 1, 3],
    [1, 1, 4],
    [1, 2, 2],
    [1, 2, 3],
    [1, 2, 4],
    [1, 3, 3],
    [1, 3, 4],
    [1, 4, 4],
    [2, 2, 2],
    [2, 2, 3],
    [2, 2, 4],
    [2, 3, 3],
    [2, 3, 4],
    [2, 4, 4],
    [3, 3, 3],
    [3, 3, 4],
    [3, 4, 4],
    [4, 4, 4]    
]
```



조합과 코드 상 다른 점은 뽑는 경우에 target을 그대로 다음 comb로 넘겨준다 (또 뽑아야하기때문!)

```java
import java.util.Arrays;

public class 중복조합 {

  public static void main(String[] args) {
    // TODO Auto-generated method stub
    int r = 3; //뽑을 갯수
    int[] arr = {1, 2, 3, 4};
    int[] output = new int[r];  
    comb(arr, output, 3, 0, 0);
  }
    
  static void comb(int[] arr, int[] output, int r, int depth, int target) {
        if (depth == r) {
            for(int i : output){
                System.out.print(i+" ");
            }
            System.out.println();
            return;
        }
        if(target == arr.length)return;
         
        output[depth] = arr[target];
        comb(arr, output, r, depth+1, target);//뽑는경우
        comb(arr, output, r, depth, target+1);//안뽑는경우
    }
}
```



