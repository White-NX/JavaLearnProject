# 命名规则
 
在本节，我们将学习源文件的声明规则。

!!! tip "使用import语句和package语句时，要特别注意这些规则："

    - 一个源文件中只能有一个public类

    - 一个源文件可以有多个非public类

    - 源文件的名称应该和public类的类名保持一致。例如：源文件中public类的类名是Test，那么源文件应该命名为Test.java。

    - 如果一个类定义在某个包中，那么package语句应该在源文件的首行。

    - 如果源文件包含import语句，那么应该放在package语句和类定义之间。如果没有package语句，那么import语句应该在源文件中最前面。

    - import语句和package语句对源文件中定义的所有类都有效。在同一源文件中，不能给不同的类不同的包声明。

类有若干种访问级别，并且类也分不同的类型：抽象类和final类等。这些将在之后介绍。

除了上面提到的几种类型，Java还有一些特殊的类，如：内部类、匿名类。这些会在之后介绍。

## Java包

包主要用来对类和接口进行分类。当开发Java程序时，可能编写成百上千的类，因此很有必要对类和接口进行分类。

## Import语句

在Java中，如果给出一个完整的限定名，包括包名、类名，那么Java编译器就可以很容易地定位到源代码或者类。Import语句就是用来提供一个合理的路径，使得编译器可以找到某个类。

例如，下面的命令将会要求编译器载入所有处于java_installation/java/io里的类

### 举个栗子

在该例子中，我们创建两个类：Employee 和 EmployeeTest。

首先打开VS Code，把下面的代码粘贴进去。注意将文件保存为 Employee.java。

```Java

import java.io.*;
 
public class Employee{
   String name;
   int age;
   String designation;
   double salary;
   // Employee 类的构造器
   public Employee(String name){
      this.name = name;
   }
   // 设置age的值
   public void empAge(int empAge){
      age =  empAge;
   }
   /* 设置designation的值*/
   public void empDesignation(String empDesig){
      designation = empDesig;
   }
   /* 设置salary的值*/
   public void empSalary(double empSalary){
      salary = empSalary;
   }
   /* 打印信息 */
   public void printEmployee(){
      System.out.println("名字:"+ name );
      System.out.println("年龄:" + age );
      System.out.println("职位:" + designation );
      System.out.println("薪水:" + salary);
   }
}
```

将下面的代码保存在 EmployeeTest.java文件中。

```Java
import java.io.*;
public class EmployeeTest{
 
   public static void main(String[] args){
      /* 使用构造器创建两个对象 */
      Employee empOne = new Employee("张三");
      Employee empTwo = new Employee("李四");
 
      // 调用这两个对象的成员方法
      empOne.empAge(26);
      empOne.empDesignation("Giao级别程序员");
      empOne.empSalary(1000);
      empOne.printEmployee();
 
      empTwo.empAge(21);
      empTwo.empDesignation("垃圾程序员");
      empTwo.empSalary(500);
      empTwo.printEmployee();
   }
}
```

编译这两个文件并且运行 EmployeeTest 类，可以看到如下结果：

```bash
$ javac EmployeeTest.java
$ java EmployeeTest 
```

```txt
名字:张三
年龄:26
职位:Giao级程序员
薪水:1000.0
名字:李四
年龄:21
职位:垃圾程序员
薪水:500.0

```

!!! question "编译出现问题？"

    每个人都会在编写代码时犯下一些错误，不过没关系，编译器会帮你找出错误并让你加以改正，当然，最好不要太过于依赖编译器中的纠错。
