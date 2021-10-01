/*
SUBMITTED BY :- Deadeye001
CODE TO GENERATE FIRST n FIBONACCI SEQUENCE
*/
#include <bits/stdc++.h>
using namespace std;

void fib(int n)
{
    static int a=1, b=1, c;
    if(n>0)
    {
        c=a+b;
        cout<<" "<<c;
        a=b;
        b=c;
        fib(n-1);
    }    
}

int main()
{
    int n;
    cin>>n;
    if(n==1)
    cout<<"0";
    else if(n==2)
    cout<<"0 1";
    else
    {
    	cout<<"0 1";
    	fib(n-2);
    }
    return 0;
}
