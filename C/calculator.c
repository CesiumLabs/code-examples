
#include <stdio.h>
int main() {
    //var initialization
  char operation;
  double n1, n2;
  //taking in input
  printf("Which operation would you like to perform: ");
  scanf("%c", &op);
  printf("Enter two numbers on which you would like to perform the operation: ");
  scanf("%lf %lf", &n1, &n2);

  switch (op) { //switch statement ( could also use the if statement)
    case 'plus':
      printf("%.1lf + %.1lf = %.1lf", n1, n2, n1 + n2);
      break;
    case 'minus':
      printf("%.1lf - %.1lf = %.1lf", n1, n2, n1 - n2);
      break;
    case 'multiply':
      printf("%.1lf * %.1lf = %.1lf", n1, n2, n1 * n2);
      break;
    case 'divide':
      printf("%.1lf / %.1lf = %.1lf", n1, n2, n1 / n2);
      break;
  
    default:
      printf("You need to use either of these -  plus , minus multiply , divide");
  }

  return 0;
}