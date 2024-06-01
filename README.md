
---

### 1. Machine Level Language

**Definition:**
Machine level language, or machine code, is the lowest-level programming language composed of binary digits (0s and 1s) that the computer's CPU can directly execute. Java source code is not written in machine code, but it gets converted into machine code by the Java Virtual Machine (JVM) at runtime.

**Example:**
Java does not use machine code directly. However, a Java command like `System.out.println("Hello, World!");` will eventually be translated into machine code that the CPU understands.

**Diagram:**
```
Java Source Code -> Compiler -> Bytecode -> JVM -> Machine Code
```

---

### 2. Assembly Language

**Definition:**
Assembly language is a low-level programming language that uses symbolic names instead of binary code. Java code is not written in assembly language but is compiled into Java bytecode, which is then interpreted by the JVM.

**Example:**
Java code:
```java
System.out.println("Hello, World!");
```
This Java code is compiled into bytecode, not assembly language. However, the JVM interprets or just-in-time (JIT) compiles this bytecode into machine code.

**Diagram:**
```
Java Source Code -> Compiler -> Bytecode -> JVM -> Machine Code
```

---

### 3. High-Level Language

**Definition:**
High-level languages are more abstract and easier to use than low-level languages. They are closer to human languages and further from machine code. Java is a high-level language, which allows developers to write complex programs more easily.

**Example:**
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```
This Java program prints "Hello, World!" to the screen.

**Diagram:**
```
+----------------------------+
| public class HelloWorld {  |
|     public static void     |
|     main(String[] args) {  |
|         System.out.println(|
|         "Hello, World!");  |
|     }                      |
| }                          |
+----------------------------+
```

---

### 4. Object-Oriented Programming (OOP)

**Definition:**
Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects," which are instances of classes. Objects can contain data (attributes) and code (methods). Java is an object-oriented language.

**Example:**
```java
public class Dog {
    String name;

    public Dog(String name) {
        this.name = name;
    }

    public void bark() {
        System.out.println("Woof!");
    }

    public static void main(String[] args) {
        Dog myDog = new Dog("Buddy");
        myDog.bark();
    }
}
```

**Diagram:**
```
Class: Dog
Attributes: name
Methods: Dog(String name), bark()

Object: myDog
Attributes: name = "Buddy"
```

---

### 5. Four Principles of OOP

**1. Encapsulation:**
**Definition:**
Encapsulation is the concept of wrapping data (attributes) and methods (functions) that operate on the data into a single unit or class. It restricts direct access to some of the object's components.

**Example:**
```java
public class Car {
    private String make;
    private String model;

    public Car(String make, String model) {
        this.make = make;
        this.model = model;
    }

    public String getInfo() {
        return make + " " + model;
    }
}
```
**Diagram:**
```
| Class: Car       |
|------------------|
| Attributes:      |
|  - make          |
|  - model         |
| Methods:         |
|  - getInfo()     |
```

**2. Abstraction:**
**Definition:**
Abstraction involves hiding complex implementation details and exposing only the necessary parts. It simplifies programming by allowing the programmer to focus on what an object does instead of how it does it.

**Example:**
```java
public abstract class Phone {
    public abstract void call();

    public void ring() {
        System.out.println("Ringing...");
    }
}

public class Smartphone extends Phone {
    @Override
    public void call() {
        System.out.println("Calling...");
    }

    public static void main(String[] args) {
        Smartphone phone = new Smartphone();
        phone.call();
        phone.ring();
    }
}
```
**Diagram:**
```
| Abstract Class: Phone      |
|----------------------------|
| Methods:                   |
|  - call() (abstract)       |
|  - ring()                  |
```

**3. Inheritance:**
**Definition:**
Inheritance allows a class (subclass) to inherit attributes and methods from another class (superclass). This promotes code reusability and hierarchical classification.

**Example:**
```java
public class Animal {
    public void eat() {
        System.out.println("Eating...");
    }
}

public class Dog extends Animal {
    public void bark() {
        System.out.println("Barking...");
    }

    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();
        dog.bark();
    }
}
```
**Diagram:**
```
Class: Animal
Methods: eat()

Class: Dog (inherits Animal)
Methods: bark()
```

**4. Polymorphism:**
**Definition:**
Polymorphism allows methods to do different things based on the object it is acting upon. It allows objects of different classes to be treated as objects of a common superclass.

**Example:**
```java
public class Cat {
    public void sound() {
        System.out.println("Meow");
    }
}

public class Dog {
    public void sound() {
        System.out.println("Bark");
    }
}

public class TestAnimal {
    public static void main(String[] args) {
        Cat cat = new Cat();
        Dog dog = new Dog();
        makeSound(cat);
        makeSound(dog);
    }

    public static void makeSound(Object animal) {
        if (animal instanceof Cat) {
            ((Cat) animal).sound();
        } else if (animal instanceof Dog) {
            ((Dog) animal).sound();
        }
    }
}
```
**Diagram:**
```
Function: makeSound(animal)
Behavior changes based on: 
- Cat: Meow
- Dog: Bark
```

---

### 6. Java Virtual Machine (JVM)

**Definition:**
The Java Virtual Machine (JVM) is a virtual machine that runs Java bytecode. It allows Java programs to run on any device or operating system with a JVM installed. The JVM converts Java bytecode into machine code that the computer's hardware can execute, providing platform independence.

**Example:**
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

**Diagram:**
```
Java Source Code -> Compiler -> Bytecode -> JVM -> Execution
```

---

### 7. Compiler

**Definition:**
A compiler is a software program that translates source code written in a high-level programming language into machine code. In Java, the compiler translates source code into Java bytecode, which can be executed by the JVM.

**Example:**
Java source code:
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```
The `javac` compiler converts this code into bytecode stored in a `.class` file.

**Diagram:**
```
Source Code (HelloWorld.java) -> Compiler (javac) -> Bytecode (HelloWorld.class)
```

---

### 8. Class and Object

**Class:**
**Definition:**
A class in Java is a blueprint for creating objects. It defines attributes (fields) and methods (functions) that the objects created from the class will have.

**Object:**
**Definition:**
An object is an instance of a class. It is created based on the structure defined by the class and can hold specific data (attributes) and use the methods defined in the class.

**Example:**
```java
public class Car {
    String model;

    public Car(String model) {
        this.model = model;
    }

    public void displayModel() {
        System.out.println("Car model: " + model);
    }

    public static void main(String[] args) {
        Car myCar = new Car("Toyota");
        myCar.displayModel();
    }
}
```

**Diagram:**
```
Class: Car
Attributes: model
Methods: Car(String model), displayModel()

Object: myCar
Attributes: model = "Toyota"
```

---

### 9. Java Applications and Applets

**Java Applications:**
**Definition:**
Java applications are standalone programs that run directly on the Java platform using the JVM. They are typically used for desktop or server-side applications and can be executed on any system with a JVM installed. Java applications have a main method as their entry point.

**Example:**
```java
public class MyApp {
    public static void main(String[] args) {
        System.out.println("This is a Java application.");
    }
}
```

**Java Applets:**
**Definition:**
Java applets are small applications designed to be embedded in web pages and run in a web browser. They require a Java-enabled browser or a Java plugin to execute. Applets are less commonly used today due to security concerns and the rise of other web technologies.

**Example:**
```java
import java.applet.Applet;
import java.awt.Graphics;

public class MyApplet extends Applet {
    public void paint(Graphics g) {
        g.draw
