# Java的基本数据类型
!!! tip "本章节WhiteNX并没有参与审核，所以不保证会出现正常的东西。"

Java作为一种编程语言，当然有最基本的东西"变量"啦！

!!! note "非常抱歉"
	这个章节的东西应该与变量章节并在一起.....		但是我觉得还是先了解变量基本的使用方式比较好。

变量的本质就是申请内存用于存储数值。也就是说，当创建变量的时候，要在内存中申请空间啦！

也就是说，当你打出下面这串代码的时候
```java
int x=114;
int y=514;
```
会发生这些事：

Java娘：歪？内存？帮忙弄两块空间，x=114，y=514，昂！

内存：好嘞！

!!! warning "这并不是真正的申请内存方式，请不要坚信，也不要尝试与内存条对话！"

可惜，计算机太笨了，它需要你告诉它要存储的是 **整数，小数还是字符** 。

Java的数据类型还分有两个，分别是 **引用数据类型和内置数据类型** ，接下来我们就来好好介绍下。

## 内置数据类型

Java娘为我们提供了八种基本 *后宫（划掉* 类型，分别有 **六种数字类型（四个整数型，两个浮点型），一种字符类型，还有一种布尔型。** 。

!!! warning "注意，是布尔型，不是法布尔型！"

接下来，我们就来好好认识这几个数字类型。

### Byte酱！
- Byte数据类型是8位，有符号的，且以二进制补码表形式表示的整数。
- 最小值：`-128`，也就是`(-2^7)`；
- 最大值：`127`，也就是`(2^7-1)`；
- 默认值：`0`，也就是.....没有也就是好吗！
- byte 类型用在大型数组中节约空间，主要代替整数，因为 byte 变量占用的空间只有 int 类型的1/4；
- 举个栗子：`byte a=100;`

### short酱！
- short整数类型是16位，有符号的，且以二进制补码表形式表示的整数。 *(我怎么感觉我说过类似的台词......)*
- 最小值：`-32768`，也就是`(-2^31)`；
- 最大值：`32767`，也就是`(2^15-1)`； *(这就是为什么我的世界Java版的最高附魔等级不能超过32767)*
- 默认值：`0`，也就是......拜托，你很机车耶；￣へ￣
- short数据类型也可以像byte那样节省空间。一个short变量是int型变量所占空间的1/2； *int酱：.....为什么每次都拿我比*
- 举个栗子：`short x=1000;`

### 每次都被当做比较对象的int酱！
- int整数类型是32位，有符号的，且以二进制补码形式表示的整数。 *(我绝对说了三次)*
- 最小值是`-2,147,483,648`，也就是`(-2^31)`；
- 最大值是`2,147,483,647`，也就是`(2^31-1)`；
- 默认值是`0`，也就是`(2-2)`，爽了吧，哼！
- 一般的变量类型是int *整数变量界的正宫（不是*
- 举个栗子：`int x=114514;`

### 超大的long酱
- long整数类型是64位，有符号的，且以二进制补码形式表示的整数。 *(我发誓，下面绝对没有类似的句子了)*
- 最小值是`-9,223,372,036,854,775,808`，也就是`(-2^64)`；
- 最大值是`9,223,372,036,854,775,808`，也就是`(2^64-1)`；
- 默认值是`0L`；
- 主要使用在较大整数上； *所以说超大嘛，你到底在想什么=v=*
- 举个栗子：`long a=1145141919810L;`

### float酱
- float数据类型是单精度，32位且符合IEEE 754标准的 **浮点数**。 *出现了！野生的浮点！*
- 默认值是`0.0f`；
- 浮点数不能用于表示精确的值，如货币。
- 举个栗子：`float f1=12.1f;`

### double酱

!!! warning "请勿双杀。"

- double数据类型是双精度，64位，切腹喝IEEE 754标准的浮点数。 *好，又是这个该死的重复*
- 默认值是`0.0d`；
- double是浮点数的默认类型。 *浮点变量界的正宫*
- 不能用于表示精确的值；
- 举个栗子：`double d1=114.5d;`

### 专一的boolean酱
- boolean数据类型只表示一位的信息；
- 只取两个数值，`true/false`；
- 默认值是`false`，也就是`true`的反义词（划掉
- 举个栗子：`boolean iLoveMisaka = true;`

### 不同的char酱
- char类型是一个单一的16位Unicode字符。
- 最小值是`\u000`，也就是`0`； *出现了！看不懂的字*
- 最大值是`\uffff`，也就是`65,535`；
- 没有默认值！
- char可以存储任何字符， **但是要加引号**
- 举个栗子：`char iLove='Misaka';`

### 被藏起来的void酱
- 无法被直接操作；
- 未知，但存在。

## 实例

实际上，上面的东西根本不用死记，因为这些小可爱们的 ~~三围~~ 数据已经被以常量的形式定义了。

```java
public class PrimitiveTypeTest {  
    public static void main(String[] args) {  
        // byte  
        System.out.println("基本类型：byte 二进制位数：" + Byte.SIZE);  
        System.out.println("包装类：java.lang.Byte");  
        System.out.println("最小值：Byte.MIN_VALUE=" + Byte.MIN_VALUE);  
        System.out.println("最大值：Byte.MAX_VALUE=" + Byte.MAX_VALUE);  
        System.out.println();  
  
        // short  
        System.out.println("基本类型：short 二进制位数：" + Short.SIZE);  
        System.out.println("包装类：java.lang.Short");  
        System.out.println("最小值：Short.MIN_VALUE=" + Short.MIN_VALUE);  
        System.out.println("最大值：Short.MAX_VALUE=" + Short.MAX_VALUE);  
        System.out.println();  
  
        // int  
        System.out.println("基本类型：int 二进制位数：" + Integer.SIZE);  
        System.out.println("包装类：java.lang.Integer");  
        System.out.println("最小值：Integer.MIN_VALUE=" + Integer.MIN_VALUE);  
        System.out.println("最大值：Integer.MAX_VALUE=" + Integer.MAX_VALUE);  
        System.out.println();  
  
        // long  
        System.out.println("基本类型：long 二进制位数：" + Long.SIZE);  
        System.out.println("包装类：java.lang.Long");  
        System.out.println("最小值：Long.MIN_VALUE=" + Long.MIN_VALUE);  
        System.out.println("最大值：Long.MAX_VALUE=" + Long.MAX_VALUE);  
        System.out.println();  
  
        // float  
        System.out.println("基本类型：float 二进制位数：" + Float.SIZE);  
        System.out.println("包装类：java.lang.Float");  
        System.out.println("最小值：Float.MIN_VALUE=" + Float.MIN_VALUE);  
        System.out.println("最大值：Float.MAX_VALUE=" + Float.MAX_VALUE);  
        System.out.println();  
  
        // double  
        System.out.println("基本类型：double 二进制位数：" + Double.SIZE);  
        System.out.println("包装类：java.lang.Double");  
        System.out.println("最小值：Double.MIN_VALUE=" + Double.MIN_VALUE);  
        System.out.println("最大值：Double.MAX_VALUE=" + Double.MAX_VALUE);  
        System.out.println();  
  
        // char  
        System.out.println("基本类型：char 二进制位数：" + Character.SIZE);  
        System.out.println("包装类：java.lang.Character");  
        // 以数值形式而不是字符形式将Character.MIN_VALUE输出到控制台  
        System.out.println("最小值：Character.MIN_VALUE="  
                + (int) Character.MIN_VALUE);  
        // 以数值形式而不是字符形式将Character.MAX_VALUE输出到控制台  
        System.out.println("最大值：Character.MAX_VALUE="  
                + (int) Character.MAX_VALUE);  
    }  
}
```
自己编译咯，我不把把结果列出来啦~

甚至连默认值都是早已被定义好的常量！

```java
public class Test {
    static boolean bool;
    static byte by;
    static char ch;
    static double d;
    static float f;
    static int i;
    static long l;
    static short sh;
    static String str;
 
    public static void main(String[] args) {
        System.out.println("Bool :" + bool);
        System.out.println("Byte :" + by);
        System.out.println("Character:" + ch);
        System.out.println("Double :" + d);
        System.out.println("Float :" + f);
        System.out.println("Integer :" + i);
        System.out.println("Long :" + l);
        System.out.println("Short :" + sh);
        System.out.println("String :" + str);
    }
}
```
一样，请自行编译=v=

## 引用类型酱
- 在Java中，引用类型的变量与C/C++的指针非常相似，连难度都差不多。引用类型指向一个对象，指向对象的变量是引用变量。这些变量在声明时被指定为一个特定的类型，比如 `Employee`、`Puppy` 等。变量一旦声明后，类型就不能被改变了。
- 对象、数组都是引用数据类型。
- 所有引用类型的默认值都是`null`。
- 一个引用变量可以用来引用任何与之兼容的类型。
- 举个栗子：Site site = new Site("WhiteNX")。

简单来说，引用数据类型就是除内置数据类型以外的所有数据。两者的语法区别很大，且有完全不同的行为。

我们在这先浅谈，之后再继♂续♂深♂入♂。

Java娘：.....你想干什么？！

Java娘支持一些特殊的转义字符序列：

符号 | 字符含义
----- | -----
\n | 	换行 (0x0a)
\r | 	回车 (0x0d)
\f | 	换页符(0x0c)
\b | 	退格 (0x08)
\0 | 	空字符 (0x0)
\s | 	空格 (0x20)
\t | 	制表符
\" | 	双引号
\' | 	单引号
\\ | 	反斜杠
\ddd | 	八进制字符 (ddd)
\uxxxx | 	16进制Unicode字符 (xxxx)

## 自动类型转换
Java娘：我会帮您解决类型的转换，my master.

整型、实型（常量）、字符型数据实际上是可以混合运算的。运算中，不同类型的数据先转化为同一类型，然后进行运算。（好麻烦

转换是从低级到高级哒

`byte,short,char—> int —> long—> float —> double `

但是，这还是有规则的！

- 休想对boolean类型进行类型转换！
- 不能把对象类型转换成不相关类的对象！（不能有小三（不是）
- 在把容量大的类型转换为容量小的类型时必须使用强制类型转换！
- 转换过程中可能导致溢出或损失精度！
- 浮点数到整数的转换是通过舍弃小数得到，而不是四舍五入！

反面教材：
```java
int i =128;   
byte b = (byte)i;
```
byte酱的最大值是127，但`i`的值是128，这就会导致溢出。

### 实例
```java
public class ZiDongLeiZhuan{
        public static void main(String[] args){
            char c1='a';//定义一个char类型
            int i1 = c1;//char自动类型转换为int
            System.out.println("char自动类型转换为int后的值等于"+i1);
            char c2 = 'A';//定义一个char类型
            int i2 = c2+1;//char 类型和 int 类型计算
            System.out.println("char类型和int计算后的值等于"+i2);
        }
}
```
编译得：
```
char自动类型转换为int后的值等于97
char类型和int计算后的值等于66
```

!!! queastion "wtf"
	你可能会疑惑，为什么a会等于97？.....我哪知道，我唯一知道的是，在ASCII码中，a就是97，A是65，所以`i2`=65+1=66。

## 强制类型转换
Java娘：Master偶尔也有强硬的一面呢

1. 条件是转换的数据类型必须是兼容的。
2. 格式：(type)value type是要强制类型转换后的数据类型

举个栗子：
```java
public class QiangZhiZhuanHuan{
    public static void main(String[] args){
        int i1 = 123;
        byte b = (byte)i1;//强制类型转换为byte
        System.out.println("int强制类型转换为byte后的值等于"+b);
    }
}
```
编译结果：
```
int强制类型转换为byte后的值等于123
```