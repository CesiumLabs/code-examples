// Importing the Scanner class
import java.util.Scanner;

public class ISBNvalidator {

	public static void main(String[] args) {
		// Creating the scanner object to get the user input
		Scanner sc = new Scanner(System.in);

		// Asking than storing th ISBN code
		System.out.println("Input a code to check if it is a valid ISBN code");
		long n = sc.nextLong();

		// Variables
		long temp = n, sum = 0;

		// Getting the sum of digits
		for (int i = 1; temp > 0; i++) {
			long d = temp % 10;
			temp /= 10;

			sum += i * d;
		}

		// Printing the result
		if (sum % 11 == 0) System.out.println(n + " is a valid ISBN code"); else System.out.println(n + " is an invalid ISBN code");
	}
}
// A valid ISBN code's
