
// Importing the Scanner class
import java.util.Scanner;

public class factorial {
    public static void main(String[] args) {
        // Creating the scanner object to get user's input
        Scanner sc = new Scanner(System.in);

        // Asking for the integer.
        System.out.println("Input a number to get its factorial");
        // Storing the integer
        int n = sc.nextInt();

        // Declaring the required variables
        int factorial = 1, number = n;

        // Getting the factorial
        while (n > 0) {
            factorial *= n;
            n--;
        }

        System.out.println("Factorial of " + number + " is : " + factorial);
    }
}
