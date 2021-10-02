import java.util.Scanner;

public class ISBNvalidator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Input a code to check if it is a valid ISBN code");
        long n = sc.nextInt();

        long temp = n, sum = 0;

        for (int i = 1; temp > 0; i++) {
            long d = temp % 10;
            temp /= 10;

            sum += i * d;
        }

        if (sum % 11 == 0)
            System.out.println(n + " is a valid ISBN code");
        else
            System.out.println(n + " is an invalid ISBN code");
    }
}
