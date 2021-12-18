#include<bits/stdc++.h>
using namespace std;
void BubbleSort(vector<int>& a, int n)
{
    for(int i=0;i<n;i++)
    {
        for(int j=i+1;j<n;j++)
        {
            if(a[j] < a[i])
            {
                int temp = a[j];
                a[j]= a[i];
                a[i] =temp;
            }
        }
    }
}
int main()
{
    int n;
    cin>>n;
    vector<int> a;
    for(int i=0;i<n;i++)
    {
        int x;
        cin>>x;
        a.push_back(x);
    }
    BubbleSort(a,n);
    for(int i=0;i<n;i++)
    {
        cout<<a[i]<<' ';
    }
    cout<<endl;
    return 0;
}

