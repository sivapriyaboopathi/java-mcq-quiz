const quizData = [
{
question:"Which keyword is used to define a class in Java?",
options:["class","Class","define","new"],
answer:0,
explanation:"The 'class' keyword is used to define a class in Java."
},

{
question:"Which method is the entry point of a Java program?",
options:["start()","run()","main()","init()"],
answer:2,
explanation:"The main() method is the entry point of a Java application."
},

{
question:"Java is a?",
options:["Platform Dependent","Platform Independent","Database","OS"],
answer:1,
explanation:"Java is platform independent because it runs on the JVM."
},

{
question:"Which symbol is used to end a statement in Java?",
options:[":",".",";","/"],
answer:2,
explanation:"Every Java statement usually ends with a semicolon (;)."
},

{
question:"Which package is imported by default?",
options:["java.io","java.lang","java.util","java.net"],
answer:1,
explanation:"java.lang package is imported automatically."
},

{
question:"Which data type stores whole numbers?",
options:["float","char","int","boolean"],
answer:2,
explanation:"int is used to store integer values."
},

{
question:"Which keyword creates an object?",
options:["class","new","object","create"],
answer:1,
explanation:"The new keyword creates objects in Java."
},

{
question:"Which operator is used for comparison?",
options:["=","==","+","&&"],
answer:1,
explanation:"== compares two values."
},

{
question:"Which loop executes at least once?",
options:["for","while","do-while","foreach"],
answer:2,
explanation:"do-while executes the body before checking the condition."
},

{
question:"Which keyword is used for inheritance?",
options:["extends","implements","inherits","super"],
answer:0,
explanation:"extends keyword is used for class inheritance."
},

{
question:"Which keyword refers to current object?",
options:["super","this","self","object"],
answer:1,
explanation:"this refers to the current object."
},

{
question:"Which keyword refers to parent class?",
options:["this","base","parent","super"],
answer:3,
explanation:"super refers to parent class members."
},

{
question:"Which access modifier is most restrictive?",
options:["public","protected","private","default"],
answer:2,
explanation:"private members are accessible only within the same class."
},

{
question:"Which access modifier is accessible everywhere?",
options:["public","private","protected","default"],
answer:0,
explanation:"public members can be accessed from anywhere."
},

{
question:"Which keyword prevents inheritance?",
options:["stop","static","final","const"],
answer:2,
explanation:"A final class cannot be inherited."
},

{
question:"Which keyword is used for constants?",
options:["static","const","final","fixed"],
answer:2,
explanation:"final is used to create constants."
},

{
question:"Java supports?",
options:["Single Inheritance","Multiple Inheritance with Classes","No Inheritance","Only Hybrid"],
answer:0,
explanation:"Java supports single inheritance through classes."
},

{
question:"Which interface is implemented for threads?",
options:["Runnable","Threadable","Run","Executor"],
answer:0,
explanation:"Runnable interface is commonly implemented to create threads."
},

{
question:"Which class is used to create threads?",
options:["Runnable","Thread","Process","Task"],
answer:1,
explanation:"Thread class is used to create and manage threads."
},

{
question:"Which collection stores unique values?",
options:["List","ArrayList","Set","Vector"],
answer:2,
explanation:"Set does not allow duplicate elements."
},

{
question:"Which collection allows duplicate values?",
options:["Set","HashSet","List","TreeSet"],
answer:2,
explanation:"List allows duplicate elements."
},

{
question:"Which exception occurs when dividing by zero?",
options:["IOException","ArithmeticException","NullPointerException","ArrayException"],
answer:1,
explanation:"ArithmeticException occurs during illegal arithmetic operations."
},

{
question:"Which keyword handles exceptions?",
options:["catch","throw","error","handle"],
answer:0,
explanation:"catch block handles exceptions."
},

{
question:"Which keyword is used to throw an exception?",
options:["catch","throw","throws","exception"],
answer:2,
explanation:"throws declares exceptions that may occur."
},

{
question:"Which block always executes?",
options:["try","catch","throw","finally"],
answer:3,
explanation:"finally block executes whether an exception occurs or not."
},

{
question:"Which keyword is used to create a subclass?",
options:["extends","implements","inherits","super"],
answer:0,
explanation:"The extends keyword is used to inherit a class."
},

{
question:"Which keyword is used to implement an interface?",
options:["extends","implements","interface","inherit"],
answer:1,
explanation:"Interfaces are implemented using the implements keyword."
},

{
question:"Which company originally developed Java?",
options:["Microsoft","Sun Microsystems","Google","IBM"],
answer:1,
explanation:"Java was originally developed by Sun Microsystems."
},

{
question:"What is JVM?",
options:[
"Java Variable Method",
"Java Virtual Machine",
"Java Visual Machine",
"Java Vendor Model"
],
answer:1,
explanation:"JVM stands for Java Virtual Machine."
},

{
question:"What is JDK?",
options:[
"Java Development Kit",
"Java Deployment Kit",
"Java Design Kit",
"Java Data Kit"
],
answer:0,
explanation:"JDK contains tools needed to develop Java applications."
},

{
question:"What is JRE?",
options:[
"Java Runtime Environment",
"Java Resource Engine",
"Java Runtime Editor",
"Java Read Environment"
],
answer:0,
explanation:"JRE provides the environment to run Java programs."
},

{
question:"Which data type stores true/false values?",
options:["int","char","boolean","float"],
answer:2,
explanation:"boolean stores true or false."
},

{
question:"Size of int in Java?",
options:["2 bytes","4 bytes","8 bytes","1 byte"],
answer:1,
explanation:"int occupies 4 bytes."
},

{
question:"Which keyword is used for decision making?",
options:["if","loop","case","goto"],
answer:0,
explanation:"if is used for conditional execution."
},

{
question:"Which statement is used for multiple conditions?",
options:["for","switch","while","break"],
answer:1,
explanation:"switch handles multiple conditions."
},

{
question:"Which keyword is used to stop a loop?",
options:["exit","break","stop","return"],
answer:1,
explanation:"break is used to terminate a loop."
},

{
question:"Which keyword skips the current iteration?",
options:["skip","continue","break","pass"],
answer:1,
explanation:"continue skips the current iteration."
},

{
question:"Which operator is used for logical AND?",
options:["&","&&","||","!"],
answer:1,
explanation:"&& is the logical AND operator."
},

{
question:"Which operator is used for logical OR?",
options:["&&","||","&","!"],
answer:1,
explanation:"|| is the logical OR operator."
},

{
question:"Which operator is used for logical NOT?",
options:["!","~","NOT","!="],
answer:0,
explanation:"! is the logical NOT operator."
},

{
question:"Which class is the parent of all classes?",
options:["Object","Main","Class","Parent"],
answer:0,
explanation:"Object class is the root class in Java."
},

{
question:"Java supports polymorphism?",
options:["Yes","No","Sometimes","Only Interfaces"],
answer:0,
explanation:"Java fully supports polymorphism."
},

{
question:"Method overloading occurs in?",
options:["Same Class","Different Class","Package","Interface"],
answer:0,
explanation:"Method overloading occurs in the same class."
},

{
question:"Method overriding requires?",
options:["Inheritance","Constructor","Loop","Package"],
answer:0,
explanation:"Overriding requires inheritance."
},

{
question:"Constructor name should be?",
options:["Any Name","Class Name","Object Name","Method Name"],
answer:1,
explanation:"Constructor name must match class name."
},

{
question:"Can constructors have return type?",
options:["Yes","No","Sometimes","Only int"],
answer:1,
explanation:"Constructors do not have return types."
},

{
question:"Which keyword is used for abstraction?",
options:["abstract","hidden","void","extends"],
answer:0,
explanation:"abstract is used for abstraction."
},

{
question:"Can abstract class have constructors?",
options:["Yes","No","Only Static","Only Final"],
answer:0,
explanation:"Abstract classes can have constructors."
},

{
question:"Can interfaces have methods?",
options:["Yes","No","Only Main","Only Static"],
answer:0,
explanation:"Interfaces contain methods."
},

{
question:"Which collection is dynamic array?",
options:["HashSet","ArrayList","TreeSet","Map"],
answer:1,
explanation:"ArrayList is a dynamic array."
},

{
question:"Which collection stores key-value pairs?",
options:["Set","List","Map","Queue"],
answer:2,
explanation:"Map stores key-value pairs."
},

{
question:"Which Map implementation is most used?",
options:["HashMap","TreeMap","LinkedList","Vector"],
answer:0,
explanation:"HashMap is widely used."
},

{
question:"Which collection follows FIFO?",
options:["Stack","Queue","Set","Map"],
answer:1,
explanation:"Queue follows FIFO."
},

{
question:"Which collection follows LIFO?",
options:["Queue","List","Stack","Set"],
answer:2,
explanation:"Stack follows LIFO."
},

{
question:"Which exception occurs when object is null?",
options:["IOException","NullPointerException","ArithmeticException","ClassException"],
answer:1,
explanation:"NullPointerException occurs when accessing a null object."
},

{
question:"Which package contains Scanner class?",
options:["java.io","java.util","java.net","java.sql"],
answer:1,
explanation:"Scanner belongs to java.util package."
},

{
question:"Which method reads user input?",
options:["next()","read()","input()","scan()"],
answer:0,
explanation:"Scanner.next() reads input."
},

{
question:"Which keyword creates a thread?",
options:["new","thread","start","run"],
answer:0,
explanation:"new Thread() creates a thread object."
},

{
question:"Which method starts a thread?",
options:["run()","start()","begin()","execute()"],
answer:1,
explanation:"start() begins thread execution."
},

{
question:"Java supports multithreading?",
options:["Yes","No","Limited","Only JDK"],
answer:0,
explanation:"Java supports multithreading."
},

{
question:"Which keyword is used for synchronization?",
options:["sync","synchronized","lock","thread"],
answer:1,
explanation:"synchronized provides thread safety."
},

{
question:"Which package is used for database connectivity?",
options:["java.sql","java.db","java.connect","java.jdbc"],
answer:0,
explanation:"java.sql package supports JDBC."
},

{
question:"JDBC stands for?",
options:["Java Database Connectivity","Java Data Connection","Java Dynamic Connectivity","Java Direct Connectivity"],
answer:0,
explanation:"JDBC means Java Database Connectivity."
},

{
question:"Which statement executes SQL query?",
options:["Execute","Statement","Query","Result"],
answer:1,
explanation:"Statement is used to execute SQL queries."
},

{
question:"Which object stores query result?",
options:["Connection","Statement","ResultSet","Driver"],
answer:2,
explanation:"ResultSet stores retrieved records."
},

{
question:"Which keyword is used to inherit interfaces?",
options:["extends","implements","inherits","super"],
answer:1,
explanation:"implements is used for interfaces."
},

{
question:"Which keyword prevents method overriding?",
options:["static","private","final","const"],
answer:2,
explanation:"final methods cannot be overridden."
},

{
question:"Can static methods be overridden?",
options:["Yes","No","Sometimes","Only Protected"],
answer:1,
explanation:"Static methods cannot be overridden."
},

{
question:"Which access modifier is package-private?",
options:["public","private","default","protected"],
answer:2,
explanation:"Default access is package-private."
},

{
question:"Which class is used for strings?",
options:["Text","String","Char","Words"],
answer:1,
explanation:"String class handles text."
},

{
question:"Are strings immutable?",
options:["Yes","No","Sometimes","Only Final"],
answer:0,
explanation:"Strings are immutable in Java."
},

{
question:"Which class provides mutable strings?",
options:["String","StringBuilder","Text","StringArray"],
answer:1,
explanation:"StringBuilder is mutable."
},

{
question:"Which method returns string length?",
options:["size()","count()","length()","len()"],
answer:2,
explanation:"length() returns string length."
},

{
question:"Which keyword is used for packages?",
options:["package","import","include","library"],
answer:0,
explanation:"package defines a package."
},

{
question:"Which keyword imports packages?",
options:["package","import","include","using"],
answer:1,
explanation:"import is used to include packages."
},

{
question:"Can Java support multiple inheritance through interfaces?",
options:["Yes","No","Limited","Never"],
answer:0,
explanation:"Java supports multiple inheritance through interfaces."
},

{
question:"Which keyword refers to superclass constructor?",
options:["this()","super()","parent()","base()"],
answer:1,
explanation:"super() calls parent constructor."
},

{
question:"Which method converts string to integer?",
options:["parseInt()","toInt()","value()","convert()"],
answer:0,
explanation:"Integer.parseInt() converts string to int."
},

{
question:"Which class wraps int primitive?",
options:["Integer","Int","Number","Wrapper"],
answer:0,
explanation:"Integer is the wrapper class for int."
},

{
question:"What is Java bytecode executed by?",
options:["Compiler","JVM","JDK","JRE"],
answer:1,
explanation:"JVM executes Java bytecode."
},

{
question:"Which keyword is used for exception handling block?",
options:["try","test","error","check"],
answer:0,
explanation:"try block contains risky code."
},

{
question:"Can finally execute without catch?",
options:["Yes","No","Sometimes","Only Runtime"],
answer:0,
explanation:"finally can exist with try alone."
},

{
question:"Which Java version introduced lambda expressions?",
options:["Java 6","Java 7","Java 8","Java 11"],
answer:2,
explanation:"Lambda expressions were introduced in Java 8."
},

{
question:"Java is developed and maintained by?",
options:["Google","Oracle","Microsoft","IBM"],
answer:1,
explanation:"Oracle currently maintains Java."
},

,
{
question:"Which keyword is used to inherit a class in Java?",
options:["extends","implements","inherit","super"],
answer:0,
explanation:"The 'extends' keyword is used to inherit a class."
},

{
question:"Which keyword is used to implement an interface?",
options:["implements","extends","interface","import"],
answer:0,
explanation:"The 'implements' keyword is used to implement an interface."
},

{
question:"Which method is called automatically when an object is created?",
options:["main()","constructor","start()","run()"],
answer:1,
explanation:"A constructor is called automatically when an object is created."
},

{
question:"Which keyword is used to create an object?",
options:["class","object","new","this"],
answer:2,
explanation:"The 'new' keyword is used to create objects."
},

{
question:"Which class is used to take user input?",
options:["Input","Scanner","Reader","Console"],
answer:1,
explanation:"Scanner class is used to read user input."
},

{
question:"Which package contains the Scanner class?",
options:["java.io","java.util","java.net","java.sql"],
answer:1,
explanation:"Scanner belongs to the java.util package."
},

{
question:"Which keyword is used to define an interface?",
options:["class","interface","implements","extends"],
answer:1,
explanation:"The 'interface' keyword defines an interface."
},

{
question:"Which collection allows duplicate elements?",
options:["Set","Map","List","HashSet"],
answer:2,
explanation:"List allows duplicate values."
},

{
question:"Which collection does not allow duplicate elements?",
options:["ArrayList","Vector","Set","LinkedList"],
answer:2,
explanation:"Set stores only unique elements."
},

{
question:"Which method is used to print output?",
options:["print()","println()","echo()","display()"],
answer:1,
explanation:"System.out.println() prints output with a new line."
},

{
question:"Which exception occurs when dividing by zero?",
options:["NullPointerException","ArithmeticException","IOException","ArrayIndexOutOfBoundsException"],
answer:1,
explanation:"ArithmeticException occurs during illegal arithmetic operations."
},

{
question:"Which keyword is used to handle exceptions?",
options:["throw","try","catch","handle"],
answer:2,
explanation:"The catch block handles exceptions."
},

{
question:"Which block always executes in exception handling?",
options:["try","catch","finally","throw"],
answer:2,
explanation:"The finally block always executes."
},

{
question:"Which operator is used for logical AND?",
options:["&","&&","||","!"],
answer:1,
explanation:"&& is the logical AND operator."
},

{
question:"Which operator is used for logical OR?",
options:["&&","||","&","!"],
answer:1,
explanation:"|| is the logical OR operator."
}




];