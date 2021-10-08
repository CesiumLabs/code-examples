#include <stdio.h>
#include <string.h>

int main() {
  //var initialization
  char op[9];
  double n1, n2;
  printf("Which operation would you like to perform: ");
  scanf("%s", &op);
  printf("Enter two numbers on which you would like to perform the operation: ");
  scanf("%lf %lf", &n1, &n2);

  if (!strcmp(op, "plus"))
    printf("%.1lf + %.1lf = %.1lf", n1, n2, n1 + n2);
  else if (!strcmp(op, "minus"))
    printf("%.1lf - %.1lf = %.1lf", n1, n2, n1 - n2);
  else if (!strcmp(op, "multiply"))
    printf("%.1lf * %.1lf = %.1lf", n1, n2, n1 * n2);
  else if (!strcmp(op, "divide"))
    printf("%.1lf / %.1lf = %.1lf", n1, n2, n1 / n2);
  else
    printf("You need to use either of these -  plus , minus multiply , divide");

  return 0;
}