import java.util.Scanner.*;
import java.util.regex.Pattern;

fun main(){

    val reg : Pattern = Pattern.compile("([+\\-]?[0-9]+[.]?[0-9]*)([C|F])?", Pattern.CASE_INSENSITIVE);
    print("Enter the temperature in following format 12 C or 12 F : ");
    val source: String = readLine()!!.toString();
    
    var matches = reg.matcher(source);
    if(!matches.find()){
        println("Invalid input");
        return;
    }
    var temp : Double = matches.group(1).toDouble();
    var unit : String = matches.group(2);
    if(unit.equals("C", true)){
        println("Fahrenheit : " + (temp * 9/5 + 32));
    }else{
        println("Celsius : " + (temp - 32) * 5/9);
    }
}