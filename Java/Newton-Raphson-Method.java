import java.util.*;

public class Main {

	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);  // taking input from user
		double n = in.nextDouble();
    double root = sqrt(n);    // calling sqrt function
    
		System.out.println("The root of " + n + "is: " + root);
	}
  
  static double sqrt(double n){
    double x = n;
    double root;
    while(true){
      root = 0.5 * (x + (n/x));    //  Formula to find root using Newton-Raphson-Method
      if(Math.abs(root-x) < 0.5){
        break;    // break if precision of error is less than 0.5
      }
      x = root;
    }
    return root;
  }
  
}
