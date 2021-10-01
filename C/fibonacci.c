#include <stdio.h>
int main() {

  int i, n;
  int n1 = 0, n2 = 1;
  int nxtNumber = n1 + n2;
  printf("Enter the number of terms: ");
  scanf("%d", &n);

  printf("Fibonacci Series: %d, %d, ", n1, n2);

  for (i = 3; i <= n; ++i) {
    printf("%d, ", nxtNumber);
    n1 = n2;
    n2 = nxtNumber;
    nxtNumber = n1 + n2;
  }
   printf("%d.",nxtNumber);
   printf("\nThank you for your trying our feature.");
 

  return 0;
}
