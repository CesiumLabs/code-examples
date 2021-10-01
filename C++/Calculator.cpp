//calculator

#include <iostream>
#include <math.h>
#include <algorithm>
using namespace std;

void Addition()
{
    int n, sum = 0, number;
    cout << "How many numbers are there: ";
    cin >> n;

    cout << "Enter numbers: " << endl;
    for (int i = 0; i < n; i++)
    {
        cin >> number;
        sum += number;
    }

    cout << "Summation is: " << sum << endl;
}

void Subtraction()
{
    int a, b;
    cout << "Enter two number to subtract: ";
    cin >> a >> b;

    cout << "Subtraction of two number is: " << (a - b);
}

void Multiplication()
{
    int n, mul = 1, number;
    cout << "How many numbers are there: ";
    cin >> n;

    cout << "Enter numbers: " << endl;
    for (int i = 0; i < n; i++)
    {
        cin >> number;
        mul *= number;
    }

    cout << "Multiplication is: " << mul << endl;
}

void Division()
{
    int a, b;
    cout << "Enter two number: ";
    cin >> a >> b;

    cout << "Division of two number is: " <<( a / b);
}

void Modulo()
{
    int a, b;
    cout << "Enter two number: ";
    cin >> a >> b;

    cout << "Modulo of two number is: " << (a % b);
}

void SqareRoot()
{
    int n;
    cout << "Enter number: ";
    cin >> n;
    cout << "Sqare root of a number is: " << sqrt(n);
}

void Power()
{
    int base, exp;
    cout << "Enter base number : ";
    cin >> base;
    cout << "Enter exponent number:";
    cin >> exp;
    cout << "Power of a number is: " << pow(base, exp);
}

void Summation()
{
    int n1, n2, sum = 0;
    cout << "Enter first number and last number: ";
    cin >> n1 >> n2;

    for (int i = n1; i <= n2; i++)
    {
        sum += i;
    }
    cout << "Summation from " << n1 << " to " << n2 << " is " << sum;
}

void Factorial()
{
    int n, fact = 1;
    cout<<"Enter number: ";
    cin>>n;
    if (n == 1 || n == 0)
    {
        cout << "Factorial of a number is: 1";
    }
    else
    {
        for (int i = 1; i <= n; i++)
        {
            fact *= i;
        }
        cout << "Factorial of a number is: " << fact;
    }
}

void PrimeOrNot()
{
    int n, i;
    cout<<"Enter number: ";
    cin>>n;

    for (i = 2; i < n; i++)
    {
        if (n % i == 0)
            break;
    }

    if (i == n)
    {
        cout << "Number is Prime number";
    }
    else
    {
        cout << "Number is not prime number";
    }
}

void Fibonacci()
{
    int n, a = 0, b = 1, c;
    cout << "Enter how many number you have to print: ";
    cin >> n;

    cout << "Fibonacci serise is: ";
    for (int i = 1; i <= n; i++)
    {
        c = a + b;
        cout << b << ", ";
        a = b;
        b = c;
    }
}

void Factor()
{
    int n;
    cout << "Enter a number: ";
    cin >> n;

    cout << "Factors of a number are: ";
    for(int i = 1; i <= n; ++i) {
        if(n % i == 0)
            cout << i << " ";
    }
}

void GCD()
{
    int n1, n2;
    cout << "Enter two numbers: ";
    cin >> n1, n2;

    cout << "GCD of these two numbers is: " << __gcd(n1, n2);
}

void MaxMin()
{
    int n, number;
    cout << "Enter how many numbers you have to compare: ";
    cin >> n;

    int min = INT_MAX;
    int max = INT_MIN;

    cout << "Enter numbers to calculate maximum and minimum: ";
    for (int i = 1; i <= n; i++)
    {
        cin >> number;
        if (number > max)
        {
            max = number;
        }
        if (number < min)
        {
            min = number;
        }
    }
    cout << "maximum number is: " << max << " and minimum number is: " << min;
}

void Armstrong()
{
    int n, sum = 0;
    cout << "Enter a number to check: ";
    cin >> n;
    int temp = n;

    while (temp)
    {
        int rem = temp % 10;
        sum += rem * rem * rem;
        temp /= 10;
    }
    if (sum == n)
    {
        cout << "Number is armstrong a number " << endl;
    }
    else
    {
        cout << "Number is not armstrong a number" << endl;
    }
}

int CalculateOrCallDifferentFunctions()
{
    int choice;
    cout << "Enter your choice: " << endl;
    cout << "1. Addition (for infinite numbers)" << endl;
    cout << "2. Subtraction(for two numbers)" << endl;
    cout << "3. Multiplicaiton (for infinite numbers)" << endl;
    cout << "4. Division (for two numbers)" << endl;
    cout << "5. modulo (for two numbers)" << endl;
    cout << "6. square root (of one number)" << endl;
    cout << "7. power (of one number)" << endl;
    cout << "8. summation of specific number to specific number" << endl;
    cout << "9. factorial of a number" << endl;
    cout << "10. Number is Prime or not" << endl;
    cout << "11. Fibonacci series" << endl;
    cout << "12. Factor of a number" << endl;
    cout << "13. GCD" << endl;
    cout << "14. Maximum-Minimum (for infinite number)" << endl;
    cout << "15. Armstrong number" << endl;

ReEnterChoice:
    cin >> choice;

    switch (choice)
    {
    case 1:
        Addition();
        break;
    case 2:
        Subtraction();
        break;
    case 3:
        Multiplication();
        break;
    case 4:
        Division();
        break;
    case 5:
        Modulo();
        break;
    case 6:
        SqareRoot();
        break;
    case 7:
        Power();
        break;
    case 8:
        Summation();
        break;
    case 9:
        Factorial();
        break;
    case 10:
        PrimeOrNot();
        break;
    case 11:
        Fibonacci();
        break;
    case 12:
        Factor();
        break;
    case 13:
        GCD();
        break;
    case 14:
        MaxMin();
        break;
    case 15:
        Armstrong();
        break;

    default:
        cout << "Wrong choice please enter valid number: ";
        goto ReEnterChoice;
        break;
    }
    return 0;
}


int main()
{
    CalculateOrCallDifferentFunctions();
    return 0;
}
