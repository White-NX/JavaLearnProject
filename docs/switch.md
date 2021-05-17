# Switch多重选择

欸，你想，如果我想要有很多的选择，用`if`语句是不是太麻烦了？没错，所以我们今天就来学习`switch语句`。

一个基本的`Switch`语句长这样
```java
switch(表达式){
    case 值 :
       代码块
       break; //中断（可选）
    case 值 :
       代码块
       break; //中断（可选）
    //case语句的数量理论上是无限的
    default : //默认（可选）
       代码块
}
```
`Switch`语句通过`#!java switch(表达式)`的结果，跳转到与表达式之匹配的`case`上执行，再 **通过判断有无break来决定是否结束执行。**

###举个栗子

我们来看一个简单的栗子

```java hl_lines="3"
public class Tea {
    public static void main(String[] args) {
        int clock = 2;
        switch (clock) {
        case 2:
            System.out.println("1点钟，是时候睡觉了(¦3[▓▓]");
            break;
        case 3:
            System.out.println("三点钟了，饮茶先啦");
            break;
        case 4:
            System.out.println("四点钟了，是时候吃两面包夹芝士");
            break;
            
        default:
        
        System.out.println("这什么乱七八糟的");
        break;
        }
    }
}

```

修改高亮语句的数字为`2`，`3`，`4`，`114514`后依次观察，可以发现，如果`clock`的值不符合任何一个`case`，那么就会执行`default`内的代码块。

!!! warning "switch语句具有穿透性"
    使用`switch()`语句时，一定注意不要漏写break，否则`switch()`语句将会在找到表达式对应的`case`后直接无视表达式的值，向下执行所有`case`内的代码块。

!!! tip "case语句可以使用字符串进行匹配。"

!!! note "在Java12中的case"
    在Java12中，由于不写`break;`将会带来严重的逻辑错误且不易被发现，故`case`多了一种形式：表达式形式。
    
    长这样：
    ```java
    public class Main {
    public static void main(String[] args) {
        String fruit = "apple";
        switch (fruit) {
        case "apple" -> System.out.println("选择 apple");
        case "pear" -> System.out.println("选择 pear");
        case "mango" -> {
            System.out.println("选择 mango");
        }
        default -> System.out.println("欸，还没选呢，就是玩");
        }
    }
}

    ```