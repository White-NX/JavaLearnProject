# 开始入土：编写第一个Java程序

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
                value: [1, 1, 1, 1, 1, 1],
                name: '知识点六边形图'
            }
        ]
    }]
};

option && myChart.setOption(option);

</script>

在开始之前，我们需要了解一下Java的类，对象，方法和实例变量：

 - 对象：对象是类的一个"实例"，有状态和行为。例如，这里有一条狗，他的状态有："颜色"，"品种"；行为有："睡觉"，"摇尾巴"，"叫"等。

 - 类：类是一个"模板"，它描述对象的行为和状态。

 - 方法：方法就是行为，一个类可以有很多方法。逻辑运算、数据修改以及所有动作都是在方法中完成的。

 - 实例变量：每个对象都有独特的实例变量，对象的状态由这些实例变量的值决定。

 --------

## 第一个Java程序：

```Java
public class HelloWorld {
    /* 第一个Java程序
     * 它将打印字符串 Hello World
     */
    public static void main(String []args) {
        System.out.println("Hello World"); // 打印 Hello World
    }
}
```
随后保存文件，命名为`Helloworld.java`

使用`javac Helloworld.java`编译Java

再键入`Java Helloworld`即可运行程序

!!! warning "注意"
    Java娘对大小写很敏感！

### 代码解释

你在每个java源码中，应该总能找到类似的结构.....应该`(￣﹏￣)╯`

```java
public class HelloWorld{
    ...
}
```
这个结构叫做`类`，类名是`HelloWorld`。

`class`定义一个类，`public`代表这个类是公开的，`HelloWorld`是一个类名，按照习惯，首字母大写，当然你不大写也行，哼！

!!! warning "Java娘的小贴士"
    Master！我想告诉你几件事情(/ω＼)
    
    `public`以及`class`是java的关键字，是必须要大写哒！类名是可以随意命名的，当然， **类名不能是java关键词！java的`public`类名字必须要和文件名相同！**

聪明的你应该注意到了，我们定义了一个名为`main`的方法：

```java
    public static void main(String[] args) {
        ...
    }
```

方法是一个可执行的代码块，一个成熟的方法除了方法名`main`以外，还有几个被括号括起来的方法参数。

以上的`main`方法有一个参数，参数的类型是`String[]`，参数名是`args`，`void`则是参数的返回类型，而花括号之间就是方法的代码。方法的代码每一行用 **半角符号`;`结束。**

实际上，java的缩进是不必要的，但是它好看啊！(๑>؂<๑）

