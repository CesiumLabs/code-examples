#include <iostream>
#include <cstring>

using namespace std;

int stringToNumber(char input[], int last)
{
    if (last == 0)
    {
        return input[last];
    }
    const int smallAns = stringToNumber(input, last - 1);
    return smallAns * 10 + input[last];
}

int stringToNumber(char input[])
{
    return stringToNumber(input, strlen(input) - 1);
}


int main() {
    char input[50];
    cin >> input;
    cout << stringToNumber(input) << endl;
}