#include<stdio.h>

int get_operation(int *addr) {
    int temp;
    reset_label:
    printf("\nOperation Types:\n\
    1. Addition\n\
    2. Subtraction\n\
    3. Multiplication\n\
    4. Division\n\
    \n\rEnter operation type: ");

    scanf("%d", &temp);

    if (temp < 1 || temp > 4) {
        printf("\nInvalid operation type \"%d\", please try again!\n", temp);
        goto reset_label;
    }

    *addr = temp;
}

int calc(int opcode, int a, int b) {
    switch (opcode) {
        case 1:
            return a + b;
        case 2:
            return a - b;
        case 3:
            return a * b;
        case 4:
            return a / b;
        default:
            return 0;
    }
}

int main() {
    int op_type, matrix1[100][100], matrix2[100][100], row, col, idx = 0;
    get_operation(&op_type);

    max_item:
    printf("Enter the number of rows and columns (max 100):\n");
    scanf("%d %d", &row, &col);

    if ((row < 1 || row > 100) || (col < 1 || col > 100)) {
        printf("\nMatrix \"%dx%d\" is invalid, please try again!", row, col);
        goto max_item;
    }

    matrix_fill:
    if (idx == 0) {
        printf("\n\nEnter the values for first matrix:");
    } else {
        printf("\n\nEnter the values for second matrix:");
    }

    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            printf("\n[%d] Enter the value (Row: %d | Col: %d): ", i + j + 1, i + 1, j + 1);
            scanf("%d", idx == 0 ? &matrix1[i][j] : &matrix2[i][j]);
        }
    }

    // update the value after each loop
    idx++;

    if (idx == 1) goto matrix_fill;

    // calculate
    printf("\n\nResult:\n\n");
    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            int result = calc(op_type, matrix1[i][j], matrix2[i][j]);
            printf("%d\t", result);
        }

        printf("\n");
    }

    return 0;
}
