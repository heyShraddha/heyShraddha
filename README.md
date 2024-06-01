### 1. Machine Level Language

**Definition:**
Machine level language, also known as machine code or machine language, is the lowest-level programming language. It consists of binary digits (0s and 1s) and is directly executed by the computer's central processing unit (CPU). Each type of CPU has its own specific machine language. Writing programs in machine language is complex and error-prone because it involves managing the exact memory addresses and hardware functions of the CPU.

**Example:**
A binary instruction for an Intel CPU might look like this:
```
10110000 01100001
```
**Diagram:**
```
| Instruction | Operand |
|-------------|---------|
|  10110000   | 01100001|
```

---

### 2. Assembly Language

**Definition:**
Assembly language is a low-level programming language that uses symbolic names (mnemonics) instead of binary code, making it easier to read and write than machine language. Each assembly language instruction corresponds closely to a machine language instruction, but it uses human-readable codes. Assembly language requires an assembler to translate it into machine code. It provides more control over hardware and is often used in system programming and for writing performance-critical code.

**Example:**
```
MOV AL, 61h
```
This command moves the hexadecimal value 61 into the register AL.

**Diagram:**
```
+------+-------+
| MOV  | AL, 61h |
+------+-------+
```

---

### 3. High-Level Language

**Definition:**
High-level languages are programming languages that are more abstract, easier to learn, and closer to human languages than low-level languages. They allow programmers to write instructions using words and symbols that are easy to understand. High-level languages are platform-independent and need to be translated into machine code using a compiler or an interpreter. Examples include Python, Java, C++, and JavaScript. These languages help programmers write more complex programs with less effort.

**Example:**
```python
print("Hello, World!")
```
In Python, this command prints "Hello, World!" to the screen.

**Diagram:**
```
+--------------------+
| print("Hello, World!") |
+--------------------+
```

---

### 4. Object-Oriented Programming (OOP)

**Definition:**
Object-Oriented Programming (OOP) is a programming paradigm that uses "objects" to represent data and methods. An object is an instance of a class, which can contain attributes (data) and methods (functions). OOP helps organize complex programs by grouping related properties and behaviors into objects. It promotes code reusability and modularity, making it easier to maintain and expand.

**Example:**
```python
class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        print("Woof!")

my_dog = Dog("Buddy")
my_dog.bark()
```

**Diagram:**
```
Class: Dog
Attributes: name
Methods: __init__, bark

Object: my_dog
Attributes: name = "Buddy"
```

---

### 5. Four Principles of OOP

**1. Encapsulation:**
**Definition:**
Encapsulation is the concept of wrapping data (attributes) and methods (functions) that operate on the data into a single unit, called a class. It restricts direct access to some of the object's components, which helps prevent accidental interference and misuse. Encapsulation is achieved by using access specifiers like private, protected, and public.

**Example:**
```python
class Car:
    def __init__(self, make, model):
        self.__make = make
        self.__model = model

    def get_info(self):
        return f"{self.__make} {self.__model}"
```
**Diagram:**
```
| Class: Car       |
|------------------|
| Attributes:      |
|  - __make        |
|  - __model       |
| Methods:         |
|  - get_info()    |
```

**2. Abstraction:**
**Definition:**
Abstraction involves hiding the complex implementation details of a system and exposing only the necessary parts. It simplifies programming by allowing the programmer to focus on what an object does instead of how it does it. Abstraction can be achieved through abstract classes and interfaces.

**Example:**
```python
class Phone:
    def call(self):
        print("Calling...")

phone = Phone()
phone.call()
```
**Diagram:**
```
| Class: Phone      |
|-------------------|
| Methods:          |
|  - call()         |
```

**3. Inheritance:**
**Definition:**
Inheritance is a mechanism where a new class (derived class) inherits attributes and methods from an existing class (base class). This allows for code reusability and the creation of a hierarchical relationship between classes. Inheritance supports the concept of "is-a" relationships.

**Example:**
```python
class Animal:
    def eat(self):
        print("Eating...")

class Dog(Animal):
    def bark(self):
        print("Barking...")

dog = Dog()
dog.eat()
dog.bark()
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
Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables a single interface to be used for different data types, allowing methods to perform differently based on the object that invokes them. Polymorphism is achieved through method overriding and method overloading.

**Example:**
```python
class Cat:
    def sound(self):
        print("Meow")

class Dog:
    def sound(self):
        print("Bark")

def make_sound(animal):
    animal.sound()

cat = Cat()
dog = Dog()
make_sound(cat)
make_sound(dog)
```
**Diagram:**
```
Function: make_sound(animal)
Behavior changes based on: 
- Cat: Meow
- Dog: Bark
```

---

### 6. Java Virtual Machine (JVM)

**Definition:**
The Java Virtual Machine (JVM) is a virtual machine that enables a computer to run Java programs. It converts Java bytecode (compiled Java code) into machine code that the computer's hardware can execute. The JVM provides a platform-independent environment, meaning Java programs can run on any device with a JVM installed. It also manages system memory and provides security and robustness features.

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
A compiler is a software program that translates source code written in a high-level programming language into machine code, which can be executed by a computer's CPU. The compiler performs this translation in multiple stages, including lexical analysis, syntax analysis, semantic analysis, optimization, and code generation. The result is an executable program or an intermediate form, such as bytecode.

**Example:**
Converting C++ code into machine code:
```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!";
    return 0;
}
```

**Diagram:**
```
Source Code -> Compiler -> Machine Code
```

---

### 8. Class and Object

**Class:**
**Definition:**
A class is a blueprint for creating objects in object-oriented programming. It defines the attributes (data) and methods (functions) that the objects created from the class will have. A class encapsulates data for the object and provides the methods to manipulate that data.

**Object:**
**Definition:**
An object is an instance of a class. It is created based on the structure defined by the class and can hold specific data (attributes) and use the methods defined in the class. Each object can have different values for its attributes.

**Example:**
```python
class Car:
    def __init__(self, model):
        self.model = model

my_car = Car("Toyota")
```

**Diagram:**
```
Class: Car
Attributes: model
Object: my_car
Attributes: model = "Toyota"
```

---

### 9. Java Applications and Applets

**Java Applications:**
**Definition:**
Java applications are standalone programs that run directly on the Java platform using the Java Virtual Machine (JVM). They are typically used for desktop or server-side applications and can be executed on any system with a JVM installed. Java applications have a main method as their entry point.

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
        g.drawString("This is a Java applet.", 20, 20);
    }
}
```

**Diagram:**
```
Applications: Run on JVM
Applets: Run in Browser
```

---

### 10. Source Code and Object Code

**Source Code:**
**Definition:**
Source code is the original code written by a programmer in a high-level programming language. It

 is human-readable and contains the instructions that define what the program does. Source code must be compiled or interpreted to be executed by a computer.

**Example:**
```python
print("Hello, World!")
```

**Object Code:**
**Definition:**
Object code is the machine-readable code generated by a compiler from the source code. It is in binary form and can be directly executed by the computer's CPU. Object code is typically stored in files with extensions like .obj or .o.

**Diagram:**
```
Source Code -> Compiler -> Object Code
```
