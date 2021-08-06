# 数组

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
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        data: [
            {
                value: [0, 1, 0, 1, 1, 0],
                name: '知识点六边形图'
            }
        ]
    }]
};

option && myChart.setOption(option);

</script>

数组，顾名思义，就是一堆数字的组合[^1]，也就是解决人类麻烦的产物，使用数组`numbers[100]`可以代替大量的类似于`numbers1，numbers2...`的变量。

## 举个栗子

假设我们一组相同类型的变量，例如5位同学的名字，我们可以这么写：
```java
public class Main {
    public static void main(String[] args) {
        // 5位同学的名字
        int n1 = '希耶丝塔';
        int n2 = '迷迭香';
        int n3 = '波特';
        int n4 = 'Nymph';
        int n5 = '御坂';
    }
}
```
[^2]
[^3]

!!! note "数组可以存储字符串"

欧，我亲爱的老伙计，这也太麻烦了吧，能不能简单点？

当然能。

```java
public class Main {
    public static void main(String[] args) {
        // 5位同学的名字
        int[] ns = new int[5];
        ns[0] = '希耶丝塔';
        ns[1] = '迷迭香';
        ns[2] = '波特';
        ns[3] = 'Nymph';
        ns[4] = '御坂';
    }
}
```
## 详解数组

定义一个数组的 [类型](/vara/#_1) ，可以使用`类型[]`，就比如我们需要一个`int`类型的数组，就使用`int[]`。

!!! note "数组的特点"
    数组的初始化默认值：整形都为`0`，浮点都为`0.0`，布朗都为`false`。
    
    数组创建后，大小不可改变，当然，你也可以不指定数组大小直接定义，例如：
    ```java
    int[] ns = new int[] {'希耶丝塔', '迷迭香', '波特', 'Nymph', '御坂'};
    System.out.println(ns.lengh); //自动推断长度
    ```
    如果你还嫌麻烦，也可以简写为：
    ```java
    int[] ns = {'希耶丝塔', '迷迭香', '波特', 'Nymph', '御坂'};
    ```

若要访问数组中的一串数据，则要使用索引，索引由`0`开始。例如，一个长度为`6`的数组，索引范围就是`0`到`5`。

数组可以使用赋值语句进行赋值，即可以使用`ns[1] = 114514;`等类似的赋值语句。

可以使用`数组名称.length`来获取数组的长度，举个栗子：
```java
public class Main {
    public static void main(String[] args) {
        // 5位同学的名字
        int[] ns = new int[5];
        System.out.println(ns.length);
    }
}
```
输出结果为：
```
5
```
当然，如果索引超出范围，会报错。

!!! danger "不可以直接将`数组名称.length`直接作为数组索引，在使用前必须`-1`"

举个反向栗子：

```java hl_lines="6"
public class Main {
    public static void main(String[] args) {
        // 5位同学的名字
        int[] ns = new int[5];
        n = ns.length;
        System.out.println(ns[n]);
    }
}
```
在执行高亮语句时，会报错，也就是超出了索引。



[^1]: 该定义具有片面性。
[^2]: 【希耶丝塔】出自番剧《侦探已死》; 【迷迭香】出自游戏《明日方舟》; 【波特】出自小说《哈利波特》; 【Nymph】出自番剧《天降之物》; 【御坂】出自番剧《某科学的超电磁炮》。
[^3]: 上述人物，波特除外，都是我的老婆，不接受反驳和PR。