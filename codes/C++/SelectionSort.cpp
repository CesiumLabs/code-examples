#include<bits/stdc++.h>
using namespace std;
void selectionsort(vector<int> &a, int n)
{
    for(int i=0;i<n;i++)
    {
      int minimum_index =i;
      for(int j=i+1;j<n;j++)
      {
          if(a[j] < a[minimum_index])
          {
              minimum_index =j;
          }
      }
      swap(a[i],a[minimum_index]);
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
    selectionsort(a,n);
    for(int i=0;i<n;i++)
    {
        cout<<a[i]<<" ";
    }
    cout<<endl;
    return 0;
}