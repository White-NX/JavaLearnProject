# Java变量的声明和初始化&常量的声明


常量和变量是 Java 程序中最基础的两个元素。常量的值是不能被修改的，而变量的值在程序运行期间可以被修改。

## 声明变量

在 java 中用户可以通过指定数据类型和标识符来声明变量，其基本语法如下所示：

```Java
DataType identifier;
```

!!! tip "变量标识符的命名规范"

    - 首字符必须是字母、下划线（―）、美元符号（$）或者人民币符号（¥）。
    
    - 标识符由数字（0~9）、大写字母（A~Z）、小写字母（a~z）、下划线（―）、美元符号（$）、人民币符号（¥）以及所有在十六进制 0xc0 前的 ASCII 码组成。

    - 不能把关键字、保留字作为标识符。

    - 标识符的长度没有限制。
    
    - 标识符区分大小写。

在Java中，变量必须先定义后使用，在定义变量的时候，可以给它一个初始值。例如：

```Java
int x = 1;
```

上述语句定义了一个整型`int`类型的变量，名称为`x`，初始值为`1`。

也可以使用`int`定义多个变量，例如:

```Java
int a = 1, b = 3, c = 4;
```

变量也可以用于声明字符串，例如：

```Java
String j = "JavaLearnProject" //声明并初始化字符串变量JavaLearnProject
```

!!! question "Java支持的变量类型有"

    类变量：独立于方法之外的变量，用 static 修饰。

    实例变量：独立于方法之外的变量，不过没有 static 修饰。

    局部变量：类的方法中的变量。

举个栗子：

```Java
public class Variable{
    static int allClicks=0;    // 类变量
 
    String str="JavaLearn Project";  // 实例变量
 
    public void method(){
 
        int i =114514;  // 局部变量  (恶臭变量)
 
    }
}
```

!!! question "Java 中静态变量和实例变量区别"

    静态变量属于类，该类不生产对象，通过类名就可以调用静态变量。

    实例变量属于该类的对象，必须产生该类对象，才能调用实例变量。

??? success "您已经进入进阶环节"

    **why?**

    因为您已经学会了较难的`类`，以及分清楚了`静态变量`与`实例变量`的区别，接下来的教程难度肯定会大大增加.

## 局部变量

!!! question "局部变量"

    - 局部变量声明在方法、构造方法或者语句块中；

    - 局部变量在方法、构造方法、或者语句块被执行的时候创建，当它们执行完成后，变量将会被销毁；

    - 访问修饰符不能用于局部变量；

在以下实例中，age就是一个局部变量：

```Java
package javalearn.test;
 
public class Test{ 
   public void pupAge(){
      int age = 0;
      age = age + 7; //或者直接写为int age = 7;
      System.out.println("小狗的年龄是: " + age);
   }
   
   public static void main(String[] args){
      Test test = new Test();
      test.pupAge();
   }
}
```

编译结果如下：

```txt
小狗的年龄是: 7
```

## 实例变量

!!! question "实例变量？"

    - 实例变量声明在一个类中，但在方法、构造方法和语句块之外；
    
    - 当一个对象被实例化之后，每个实例变量的值就跟着确定；

    - 实例变量在对象创建的时候创建，在对象被销毁的时候销毁；

    - 实例变量的值应该至少被一个方法、构造方法或者语句块引用，使得外部能够通过这些方式获取实例变量信息；

举个栗子：

```Java
import java.io.*;
public class Employee{
   // 这个实例变量对子类可见
   public String name;
   // 私有变量，仅在该类可见
   private double salary;
   //在构造器中对name赋值
   public Employee (String empName){
      name = empName;
   }
   //设定salary的值
   public void setSalary(double empSal){
      salary = empSal;
   }  
   // 打印信息
   public void printEmp(){
      System.out.println("名字 : " + name );
      System.out.println("薪水 : " + salary);
   }
 
   public static void main(String[] args){
      Employee empOne = new Employee("You");
      empOne.setSalary(5000.0);
      empOne.printEmp();
   }
}
```

??? tip "编译结果"

    ```txt
    名字 : You
    薪水 : 5000.0
    ```

## 声明常量

定义变量的时候，如果加上final修饰符，这个变量就变成了常量：

比如说执行如下代码会报错：

```Java
final double PI = 3.14; // PI是一个常量
double r = 5.0;
double area = PI * r * r;
PI = 300; // compile error!
```

常量在定义时进行初始化后就不可再次赋值，再次赋值会导致编译错误。

常量的作用是用有意义的变量名来避免魔术数字（Magic number），例如，不要在代码中到处写3.14，而是定义一个常量。如果将来需要提高计算精度，我们只需要在常量的定义处修改，例如，改成3.1416，而不必在所有地方替换3.14。

!!! pen "根据习惯，常量名通常全部大写。"
