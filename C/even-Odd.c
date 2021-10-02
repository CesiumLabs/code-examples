//finding the number is even or odd
#include <stdio.h>
int main() {
    int num;
    printf("Enter an integer: ");
    scanf("%d", &num);
    
    // true if num is perfectly divisible by 2
    if(num % 2 == 0)
        printf("%d is even number.", num);
    else
        printf("%d is odd number.", num);
    
    return 0;
}
