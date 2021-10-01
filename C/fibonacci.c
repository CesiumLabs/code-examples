#include<stdio.h>

int main() {
    int a = 0, b = 1, c = 0, terms;

    printf("\nEnter the number of terms: ");
    scanf("%d", &terms);

    for (int i = 0; i < terms; i++) {
        c = a + b;
        b = a;
        a = c;

        printf("%d ", b);
    }
    printf("\nThank you for trying our beautiful version");

    return 0;
}
