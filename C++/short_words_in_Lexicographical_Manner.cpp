// Sort Words in Dictionary Order

#include <iostream>
using namespace std;

int main()
{
    int n;
    cout<<"Enter how many words you have: ";
    cin>>n;
    string Words[n], temp;

    cout << "Enter words: " << endl;
    for(int i = 0; i < n; i++)
    {
      getline(cin, Words[i]);
    }

    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (Words[j] > Words[j + 1]) {
                temp = Words[j];
                Words[j] = Words[j + 1];
                Words[j + 1] = temp;
            }
        }
    }

    cout << "In lexicographical order: " << endl;

    for(int i = 0; i < n; i++)
    {
       cout << Words[i] << endl;
    }
    return 0;
}
