# Java娘的输入

请做好心理准备，输入可比输出难多了......

我们可以看一个从命令行读取整数和字符串的栗子：
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in); 
        System.out.print("输入你的名字"); 
        String name = scanner.nextLine();  
        System.out.print("输入你的年龄 "); 
        int age = scanner.nextInt(); 
        System.out.printf("你好, %s, 你的岁数为： %d\n", name, age); 
    }
}
```

聪明的你应该发现了，我们使用`import`导入了一个名为`java.util.Scanner`的包。

!!! info "啥是import"
    唔姆，在这里浅谈一下：`import`是一个用于导入类的语句，并且必须放在代码的开端。

!!! info "用Scanner干好事"
    使用Scanner可以轻松地使用`scanner.nextLine()`探测用户所输入的字符串；使用`scanner.nextInt()`则可以探测用户所输入的整数。
    使用`Scanner`会自动转换输入的数据类型。
    ~~这样的亮点是可以大大简化使用`System.in`所带来的麻烦，实现更加快捷的信息分发体系，实现与代码的深度共建，形成组合拳。更方便个人开发者赋能客户，增加横向不同场景价值并延长服务链路。并且可以方便地结束人类的年龄体系优势和自然势能，在多个年龄层面实现高度渗透。~~