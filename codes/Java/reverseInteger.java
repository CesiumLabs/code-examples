// Importing the Scanner class
import java.util.Scanner;

public class reverseInteger {

  public static void main(String[] args) {
    // Creating the scanner object to get user's input
    Scanner sc = new Scanner(System.in);

    // Asking for the integer to reverse
    System.out.println("Input a integer to reverse it");
    // Storing the integer
    int n = sc.nextInt();

    // Declaring the required variables
    int temp = n, rev = 0;

    // Reversing the number
    while (temp > 0) {
      // Getting the digit
      int d = temp % 10;
      temp = temp / 10;

      // Adding the digit to the number
      rev = (rev * 10) + d;
    }

    System.out.println(n + "'s Revesed : " + rev);
  }
}
