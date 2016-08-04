import java.lang.System;

public class HelloWorld extends Object {
	public static void main(String[] args) {
		
		System.out.println("Hello, world!"); // just type 'sout'
		for( int i = 0; i < args.length; i++ ) {
			System.out.println(args[i]);
		}
	}
	
	// javac HelloWorld.java
	// java -cp . HelloWorld
	// "C:\Program Files\Java\jdk1.8.0_102\bin\javac" HelloWorld.java
}