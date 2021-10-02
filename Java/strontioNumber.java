// Importing the Scanner class
import java.util.Scanner;

public class strontioNumber {
    public static void main(String[] args) {
        // Creating the scanner object to get user input
        Scanner sc = new Scanner(System.in);

        // Getting the user input
        System.out.println("Input the number to check if it is a strontio number");
        // Storing the user input
        int n = sc.nextInt();

        // Declaring variables
        int temp = n * 2, tens = 0, hundreds = -1;

        // Checking for invalid values
        while (temp < 1000 || temp > 9999) {
            System.out.println("The number should be a 4 digit number\n\nSo please provided the number again");
            n = sc.nextInt();
            temp = n * 2;
        }

        // Getting the tens and hundreds digit
        for (int i = 0; i < 3; i++) {
            int d = temp % 10;
            temp = temp / 10;

            if (i == 1)
                tens = d;
            else if (i == 2)
                hundreds = d;
        }

        // Printing the result
        if (tens == hundreds)
            System.out.println(n + " is a strontio number");
        else
            System.out.println(n + " is not a strontio number");
    }
}

// Strontio number are those 4 digit numbers when multiplied by 2 gives the same
// digit at hundreds and tens place
// Example : 1386
// Proof : 1386 * 2 = 2772
// hundreds place = 7 , tens place = 7. both are equal.