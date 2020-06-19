# 开始入土：编写第一个Java程序


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

### 代码解释

` public static void main(String []args) ` 是一切Java的开端

` System.out.println` 用于输出字符串。
