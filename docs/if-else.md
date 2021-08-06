# Java的条件语句

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
                value: [0, 0, 0, 0, 0, 0],
                name: '知识点六边形图'
            }
        ]
    }]
};

option && myChart.setOption(option);

</script>
## if语句

Java娘作为一个成熟的语言，当然会有一套属于自己的条件语句，那就是大名鼎鼎的`if-else`

一个`if`语句的格式通常长这样：
```java
if (布尔表达式){
代码块
}
```
如果布尔表达式的值为`true`，那么`if`语句中的代码块就会被执行，反之则会跳过if语句。

### 举个栗子

我们用Java娘来写一段栗子，长这样：
```java
public class IfTest {
	public static void main(String args[]){
	int x = 100;
	
	if (x < 200){
		System.out.println("x的值小于200");
		}
	}
}
```
编译结果：
```
x的值小于200
```

那问题来了，欸，如果我想要当布尔表达式为`false`时执行另一套块该怎么做呢？

~~三点钟啦，饮茶先啦~~[^1]

## 真-奥义-ifelse语句完整体

没错，if语句后面实际上还可以跟一个else语句，没想到吧~

一个`if-else`语句通常长这样：
```java
if (布尔表达式){

代码块

}else{

代码块

}
```

### 举个栗子

```java
public class IfTest {
	public static void main(String args[]){
	int clock = 4;
	
	if (clock == 3){
		System.out.println("三点钟啦，饮茶先啦");
		}else{
		System.out.println("三点还没到啦，饮你妹啊");
		}
	}
}
```
编译得：
```
三点还没打啦，饮你妹啊
```

[^1]: 饮茶梗：网友Bernard tee2020年在facebook上发了一段狂躁版提醒大家赶紧喝茶，憋干活了的视频。在视频中，那个人说了："三点多了，做，做什么做！先喝茶啦！做这么多有什么用啊！你老板又不会关心你！先喝茶啦！三点多了，做个寄吧啊做。"

## 无限套娃之-if-elseif语句

欸，没想到吧，爷还能套娃。

使用这种语句可以判断多种可能的情况， ~~妈妈再也不用担心探测不到啦~~。

!!! warning "使用该语句必须注意的情况"
	- `if`语句至少要有一个else语句，且该`else`语句放在所有`else-if`之后
	- `if`语句可以有无限个`elseif`语句，但它们必须得放在`else`之前
	- 一旦其中有任意一个`elseif`语句的布尔表达式值为`true`，那么其他的`elseif`语句就不会被执行。

if-elseif的结构长这样：
```java

if(布尔表达式 1){
   //如果布尔表达式 1的值为true执行代码
}else if(布尔表达式 2){
   //如果布尔表达式 2的值为true执行代码
}else if(布尔表达式 3){
   //如果布尔表达式 3的值为true执行代码
}else {
   //如果以上布尔表达式都不为true执行代码
}
```

### 举个栗子
```java
   public static void main(String args[]){
      int clock = 3;
 
      if( clock == 3){
         System.out.print("三点钟啦，饮茶先啦");
      }else if( clock == 4 ){
         System.out.print("四点钟啦，饮你妹啊");
      }else if( clock == 30 ){
         System.out.print("你不讲武德，一天有30小时");
      }else{
         System.out.print("这是 else 语句");
      }
   }
}
```
编译得：
```
三点钟啦，饮茶先啦
```