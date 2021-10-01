import java.util.Scanner;

public class ArmstrongNumber {

  public static void main(String args[]) {
    int num, temp, digit, sum_cubes = 0;
    System.out.print("Enter the number : ");
    Scanner sc = new Scanner(System.in);
    num = sc.nextInt();
    temp = num;
    while (num != 0) {
      digit = num % 10;
      sum_cubes = sum_cubes + (digit * digit * digit);
      num = num / 10;
    }
    if (temp == sum_cubes) System.out.println(temp + " is a Armstrong Number"); else System.out.println(temp + " is not a Armstrong Number");
  }
}
