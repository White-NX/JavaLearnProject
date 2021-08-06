# Java娘的循环

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
                value: [1, 0, 0, 0, 1, 1],
                name: '知识点六边形图'
            }
        ]
    }]
};

option && myChart.setOption(option);

</script>

!!! tip "WhiteNX并没有直接参与审核，所以不保证会出现正常的内容。"

Java娘作为一个 ~~萌娘~~ 成熟的编程语言，当然有循环这种东西。 **循环就是让计算姬做有条件的循环计算，条件不满足时一直计算，满足时停止。**

循环酱可以用来解决一些问题，比如：计算1~100的和。

Master可能会认为该这么写：
```java
int i = 1 + 2 + 3 + 4 + ... + 100;
```
不！不要这么做Kora！

Master可以使用最基本的`while`循环来解决问题。


## while循环酱

while循环酱在每次循环前都会检查是否满足条件，若结果为`true`，则会执行一边她体内[^1]的代码，若结果为`false`，则会执行循环的末尾代码，并继续往下执行。

[^1]: 也就是循环体

举个栗子，顺便解决之前的问题：
```java
public class Main {
    public static void main(String[] args) {
        int sum = 0; // 累加的和，初始化为0
        int n = 1;
        while (n <= 100) { // 循环条件是n <= 100
            sum = sum + n; // 把n累加到sum中
            n++; // n自身加1
        }
        System.out.println(sum);
    }
}
```
编译得：
```
5050
```
可以发现，while循环酱是先检查条件，再做循环。**这可能会导致一次循环也不做。**

此外，若条件一直达成，循环就会一直继续，，形成死循环。死循环的后果严重，会导致CPU娘占用率到达100%！！CPU娘会累死的！

反向栗子：

```java
public class Main{
    public static void main(String[] args) {
        int i = 0;
        long sum = 0L;
        while ( i < 0){
            sum++;
        }
        System.out.println(sum);
    }
}
```
我们不难发现，上面所述的循环永远不会结束，是一个死循环。

!!! warning "Java娘的警告"
    Master！尽力避免死循环啊Kora！

!!! pen "逝世看"
    Master可以试试做一下以下的习题：
    
    求：-10到500的和。

## do while循环酱
do while循环酱与while循环酱除了语法有一些区别以外就只剩判断循环条件的顺序的区别了。 **do while酱是先执行循环，再判断循环条件。** 所以她至少会执行一次循环。

!!! pen "do while酱的语法结构"
    ```java
    do{
        循环语句
    }while(循环条件)
    ```
我们用do while酱将开头的问题重新解决一下
```java
public class Main {
    public static void main(String[] args) {
        int sum = 0;
        int n = 1;
        do {
            sum = sum + n;
            n ++;
        } while (n <= 100);
        System.out.println(sum);
    }
}
```
!!! 逝世看
    Master可以试试做一下以下的习题：
    
    用do while酱求200到500的和。

## for循环酱
Java娘除了上述的两个循环以外还有一个最受欢迎的循环：for循环酱！

for循环与上述两种循环的不同之处在于，她使用计数器实现循环。

!!! pen "for酱的语法结构"
    ```java
    for(初始条件;循环检测条件;计数器默认值){
      循环内容  
    }
    ```
    不难发现，这种循环相较于前面两种循环简洁了一些。

我们使用for循环娘再解决一次开头的问题：
```java
public class Main {
    public static void main(String[] args) {
        int sum = 0;
        for (int i=1; i<=100; i++) {
            sum = sum + i;
        }
        System.out.println(sum);
    }
}
```

可以发现，for循环娘在执行循环前，先会执行初始化语句`int i=1;`。然后检查循环条件`i<=100;`，循环后自动执行一遍`i++`。

!!! warning "Java娘的警告"
    因为更新计数器的语句已经写到了for循环内，**所以Master，千万不要在循环体内更新变量i** 。

!!! pen "逝世看"
    Master可以试试做一下以下的习题：
    
    用for循环娘求50到500的和。