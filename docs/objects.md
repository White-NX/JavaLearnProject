# Java对象和类

在本节中，我们将重点研究对象的类和概念

!!! warning "警告：此篇章极其容易造成弃坑，请酌情阅读 **(但是你又不得不读)**"

定义：

- **对象**：对象是类的一个实例 **（不是现实生活中的对象）** ，有状态和行为，例如，这里有一条狗，狗是一个对象，它拥有以下状态：颜色，名字，品种，岁数；行为有：叫，吃，睡觉等。

- **类**：类是一个模板，它描述一类对象的行为和状态。

**您想象中的对象可能是:**

![テネブレア.png](https://i.loli.net/2020/06/25/ZesxRWl3NKDIoQ1.png)
© Pixiv@iren <https://www.pixiv.net/member_illust.php?mode=medium&illust_id=82432221>

![デイジー✿.png](https://i.loli.net/2020/06/25/rcGT56BwCdi41IS.png)
© Pixiv@Kinty <https://www.pixiv.net/member_illust.php?mode=medium&illust_id=82411936>

**版权警告：以上两张图片并不遵循CC BY-NC-SA 3.0许可协议转载。如果您是图片的原作者，并且想删除这些图片，请联系<sheepnx@gmail.com>，我们会在2个工作日内移除.请一定要发邮件，咱一定会删，不要起诉咱QAQ**

## Java中的对象

现在，让我们来深刻认识什么是对象 **(不是深刻认识现实生活中的对象)**

又双叒叕拿狗来举例，它拥有以下状态：颜色，名字，品种，岁数；行为有：叫，吃，睡觉等。

对比现实中的对象`狗`，它与软件中的对象非常相似。

软件对象也有自己的行为，行为通过方法体现。

在软件的开发中，方法操作对象的改变，对象的相互调用也是通过方法来完成

## Java中的类

类可以看作是创建Java对象时所使用的模板。

下面通过一个简单的例子来理解Java中类的定义

```Java
public class Dog{
    String breed;
    int age;
    String color;
    void barking(){

    }
    void eating(){

    }
    void sleeping(){

    }
}
```

## 类的构造方法

每个类都有构造方法。如果没有为类定义构造方法，Java编译器将会为该类提供一个默认构造方法。

下方是一个构造方法事例：

```Java
public class Dog{
    public Dog(){
    }
 
    public Dog(String name){
        // 这个构造器仅仅有一个name参数
    }
}
```

## 创建对象

对象是根据类创建的。

下方是一个创建对象的例子：

```Java
public class Dog{
    public Dog(String name){
        System.out.println("小狗的名字是 : " + name ); 
    }
    public static void main(String[] args){
        Dog myDog = new Dog( "doge" );
    }
}
```

上方的代码会打印出以下内容：

```txt
小狗的名字是：doge
```

### 访问实例变量和方法

```Java
/* 实例化对象 */
Object referenceVariable = new Constructor();
/* 访问类中的变量 */
referenceVariable.variableName;
/* 访问类中的方法 */
referenceVariable.methodName();
```

!!! tip "我滴妈呀！"

    什么？你看不懂？！......没关系，应该没人能看懂吧...
    以上内容并不要求完全理解

#### 举个栗子

以下程序解释了如何访问实例变量和调用成员方法

```Java
public class Puppy{
   int puppyAge;
   public Puppy(String name){
      // 这个构造器仅有一个参数：name
      System.out.println("小狗的名字是 : " + name ); 
   }
 
   public void setAge( int age ){
       puppyAge = age;
   }
 
   public int getAge( ){
       System.out.println("小狗的年龄为 : " + puppyAge ); 
       return puppyAge;
   }
 
   public static void main(String[] args){
      /* 创建对象 */
      Puppy myPuppy = new Puppy( "doge" );
      /* 通过方法来设定age */
      myPuppy.setAge( 2 );
      /* 调用另一个方法获取age */
      myPuppy.getAge( );
      /*你也可以像下面这样访问成员变量 */
      System.out.println("小狗的年龄为2 : " + myPuppy.puppyAge ); 
   }
}
```

上面的代码会打印出以下内容：

```txt
小狗的名字是 : doge
小狗的年龄为 : 2
小狗的年龄为2 : 2
```

在下个章节中，我们将学习源文件的命名方法，随后，我们的更新步伐将跟随主线。

!!! failure "此对象并不是'对象'"

    此章节中阐述的对象并不是现实生活中的对象，当然，如果你想做出一个"面向对象"的语言，我们随时恭候。
