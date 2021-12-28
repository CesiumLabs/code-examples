#include<bits/stdc++.h>
using namespace std;
void bubbleSort(vector<int>& a, int n)
{
    for(int i=0;i<n-1;i++)
    {
        for(int j=i+1;j<n;j++)
        {
            if(a[j] < a[i])
            {
                int temp =a[j];
                a[j] =a[i];
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
    bubbleSort(a,n);
    for(int i=0;i<n;i++)
    {
        cout<<a[i]<<" ";
    }
    cout<<endl;
    return 0;
}

/*OUTPUT
5
1 5 2 7 8
1 2 5 7 8 
*/