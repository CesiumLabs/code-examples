// WAP to find the sum to two matrices

#include<iostream>
using namespace std;
int main()
{
int i, j, a[10][10], m, n, b[10][10], sum[10][10];
cout<<"Enter the number of rows: ";
cin>>m;
cout<<"\nEnter the number of columns: ";
cin>>n;
cout<<"\nEnter the elements of matrix 1: ";
for(i=0;i<m;i++)
{
for(j=0;j<n;j++)
{
cin>>a[i][j];
}
}
cout<<"\nEnter the elements of matrix 2:  ";
for(i=0;i<m;i++)
{
for(j=0;j<n;j++)
{	
cin>>b[i][j];
}
}
cout<<"Sum of the matrices is: "<<endl;
for(i=0;i<m;i++)
{
for(j=0;j<n;j++)
{
sum[i][j]=a[i][j]+b[i][j];
cout<<"\t"<<sum[i][j];
}
cout<<"\n";
}
}
