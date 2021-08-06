# Java娘的输出

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
                value: [0, 0, 0, 0, 0, 2],
                name: '知识点六边形图'
            }
        ]
    }]
};

option && myChart.setOption(option);

</script>

Java娘作为一个编程语言，自然拥有输入和输出的能力哒！接下来就让我们来好♂好♂认♂识输入和输出！

## 输出

可以发现，在前面的代码中，我们总是使用`System.out.println()`来向屏幕输出内容。

实际上，`println`是`print line`的缩写，意思是"输出并换行"，如果你不想换行，可以使用`print`。

别做梦啦！即使你使用`print`，前面还是要加`system.out.`的！=v=

举个栗子：
```java
public class OutputTest{
    public static void main(String[] args){
        System.out.print("A,");
        System.out.print("B ");
        System.out.print("and C.");
        System.out.println();
        System.out.print("That's it.");
    }
}
```
编译得：
```
A,B and C.
That's it.
```

### 格式化输出

没~想~到~吧！Java娘输出的东西有时候你还看不懂，所以我们就需要格式化输出

在Java中，可以使用各种占位符来实现格式化输出，但不过要用`System.out.printf()`。

```java
public class Main {
    public static void main(String[] args) {
        double d = 3.1415926535;
        System.out.printf("%.2f\n", d); // 显示两位小数3.14
        System.out.printf("%.4f\n", d); // 显示4位小数3.1416（四舍五入）
    }
}

```

可以发现， **省略小数位是会四舍五入的！**

Java娘的格式化功能提供了多种占位符下表就是：

| 占位符 | 解释 |
|----|----|
| `%d` | 格式化输出整数 |
| `%s` | 格式化字符串 |
| `%x` | 格式化输出16进制整数 |
| `%f` | 格式化输出浮点数 |
| `%e` | 格式化输出使用科学记数法的整数 |

!!! warning "Java娘的小贴士"
    由于`%`被用于占位符，所以，`%%`表示`%`本身。