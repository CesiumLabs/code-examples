import java.util.Scanner.*;
fun main() {
    val num:Int = readLine()!!.toInt();
    var fact:Int = 1;
    for (i in 1..num){
        fact*=i;
    }
    println("Factorial of " + num + " is " + fact);
}