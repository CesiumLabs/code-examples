/*
SUBMITTED BY: Deadeye001
THIS CODE CHECKS IF AN ENTERED NUMBER IS PALINDROME NUMBER OR NOT
DATE:01/10/2021
*/

#include <bits/stdc++.h>
using namespace std;

int checkpal(int n)
{
  //function to check if no. is palindrome or not
	int a=n;
	int sum=0;
	while(a!=0)
	{
		int d=a%10;
		sum=(sum*10)+d;
		a=a/10;
	}
	if(sum==n)
	return 1;
	else
	return 0;
}

int main()
{
  //driver function
	int n;
	cin>>n;
	if(checkpal(n))
	cout<<n<<" is a Palindrome number";
	else
	cout<<n<<" is NOT a Palindrome number";
	return 0;
}
