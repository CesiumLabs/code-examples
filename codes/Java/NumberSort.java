import java.util.Arrays;

public class NumberSort {

  public static void main(String[] args) {
    int[] numbers = { 10, 8, 3, 4, 5, 6, 54, 21, 9, 11 };
    Arrays.sort(numbers);
    for (int i : numbers) {
      System.out.println(i);
    }
  }
}
