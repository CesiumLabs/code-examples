import java.util.Scanner.*;
fun main() {
    print("Enter the number : ")
    val num:Int = readLine()!!.toInt();
    var fact:Int = 1;
    for (i in 1..num){
        fact*=i;
    }
    println("Factorial of " + num + " is " + fact);
}