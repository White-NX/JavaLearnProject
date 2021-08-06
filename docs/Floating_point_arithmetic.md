# 不精确的浮点运算娘

!!! note "本章评级"
    <div id="diff" style="width: 300px;height:300px;"></div>

<script>
var chartDom = document.getElementById('diff');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: 'LEVEL'
    },
    legend: {
        data: ['知识点六边形图']
    },
    radar: {
        // shape: 'circle',
        indicator: [
            { name: '掌握', max: 6},
            { name: '使用', max: 6},
            { name: '复杂', max: 6},
            { name: '查错', max: 6},
            { name: '认知', max: 6},
            { name: '记忆', max: 6}
        ]
    },
    series: [{
        name: '知识点难易度',
        type: 'radar',
        data: [
            {
                value: [2, 1, 2, 2, 1, 1],
                name: '知识点六边形图'
            }
        ]
    }]
};

option && myChart.setOption(option);

</script>


浮点运算娘和整数运算娘相比，只能进行加减乘除等计算，不能做位运算和移位运算。

浮点运算娘的表示范围虽然很大，但是往往是不精确哒！

!!! question "为什么不精确？"
    我们先认为有一个浮点数`0.1`，这个浮点数事实上在计算姬内并不能准确表示，因为十进制的`0.1`换算成二进制是一个无限循环的小数。
    显而易见的是，使用`double`和`float`都只能存储`0.1`的近似值。
    但是，`0.5`可以精确地表示。

浮点运算会产生误差，举个栗子：
```java
public class Main {
    public static void main(String[] args) {
        double x = 1.0 / 10;
        double y = 1 - 9.0 / 10;
        // 观察x和y是否相等:
        System.out.println(x);
        System.out.println(y);
    }
}
```
实际上，它们应该是相等的，1.0/10等于0.1，1-9.0/10也等于0.1。但是我们无法使用常规的比较方式判断他们是否相等，因为上述代码编译得：

```
0.1
0.09999999999999998
```
Java娘&计算姬：我就是分不清嘛...QAQ

由于浮点运算娘存在误差，所以我们要用一些非常规的技巧来判断他们是否相等
```java
// 比较x和y是否相等，先计算其差的绝对值:
double r = Math.abs(x - y);
// 再判断绝对值是否足够小:
if (r < 0.00001) {
    // 唔姆...勉强可以认为相等
} else {
    // 不相等
}
```

!!! pen "拓展：Math.abs()"
    `Math.abs()`函数酱会返回指定数的绝对值。
    
    举个栗子：
    ```java
    int i = Math.abs(-1); //i=1
    int i = Math.abs(1); //i=1
    ```
    当Master试图使用Math.abs求一个不是整数的绝对值时，她会给你一个`NaN`。
    
## 类型提升！

如果与浮点数参与运算的数中有一个整数，那么这个整数会自动提升为浮点数。~~全自动不精确化~~

举个栗子：
```java
public class Test {
    public static void main(String[] args) {
        int n = 5;
        double d = 1.2 + 24.0 / n; // 6.0
        System.out.println(d);
    }
}
```

## 溢出

浮点娘：我....我被填满了....

整数运算娘在除数为零的时候会报错，但是浮点娘不会！只是会返回一些奇怪的结果罢了。

```java
double d1 = 0.0 / 0; // NaN
double d2 = 1.0 / 0; // Infinity
double d3 = -1.0 / 0; // -Infinity
```

!!! tip "Java娘的提示"
    Master！为什么master总是搞出一些奇怪的结果.....我来解释一下吧
    
    - `NaN`的全称是Not a number，也就是不是数字的意思。
    - `Infinity`的意思是正无穷
    - `-Infinity`的意思是负无穷

## 强制转换

Java娘：Master好强硬啊！

浮点数娘可以强制转换为整数娘，举个栗子：
```java
int n1 = (int) 12.3; // 12
int n2 = (int) 12.7; // 12
int n2 = (int) -12.7; // -12
int n3 = (int) (12.7 + 0.5); // 13
int n4 = (int) 1.2e20; // 2147483647
```
可以发现，在转型时，末尾的小数点会被丢掉。如果转型的数字超过了整数能表示的最大范围，就会返回整数能表示的最大数。

若要进行四舍五入，可以加上0.5后再转型。