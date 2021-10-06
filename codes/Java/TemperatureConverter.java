import java.util.Scanner;
import java.util.regex.Pattern;

public class TemperatureConverter {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter the temperature in following format 12 C or 12 F : ");
        String source = input.nextLine();
        Pattern reg = Pattern.compile("([+\\-]?[0-9]+[.]?[0-9]*)([C|F])?");
        var matches = reg.matcher(source);
        if (!matches.find()) {
            System.out.println("Invalid input");
            return;
        }
        var temp = Double.parseDouble(matches.group(1));
        var unit = matches.group(2);
        if (unit == null) {
            System.out.println("Invalid input");
            return;
        }
        if (unit.equals("C")) {
            System.out.println(temp + " C is " + (temp * 9 / 5 + 32) + " F");
        } else if (unit.equals("F")) {
            System.out.println(temp + " F is " + (temp - 32) * 5 / 9 + " C");
        } else {
            System.out.println("Invalid input");
        }
    }
}
