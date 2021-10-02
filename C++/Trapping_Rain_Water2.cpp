#include <iostream>

using namespace std;

int rainwater(int arr[],int n){

	int left[n];
	int right[n];


	left[0]=arr[0];

	for (int i = 1; i <n; ++i)
	{
		left[i]=max(arr[i],left[i-1]);
	}


	right[n-1]=arr[n-1];

	for (int i = n-2; i >=0; i--)
	{
		right[i]=max(arr[i],right[i+1]);
	}


	int ans=0;


	for (int i = 0; i <n; ++i)
	{
			
		ans+=min(left[i],right[i])-arr[i];	

	}


	return ans;

}

int main(){

		 int a[]={0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1};
  		cout<<rainwater(a,12)<<endl;


	return 0;
}