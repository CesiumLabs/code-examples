#include <iostream>
#include<vector>

using namespace  std;


vector<int> plusOne(vector<int> &A){


	int n=A.size();
	int carry=0;

	vector<int> res;

	res.push_back(1+A[n-1]%10);
	carry=(1+A[n-1])/10;

	for (int i = n-2; i >=0; i--)
	{
		res.push_back((carry+A[i])%10);
		carry=(carry+A[i])/10;	
	}

	if(carry){
		res.push_back(carry);
	}

	int x=res.size();
	for(int i=0;i<=x/2;i++){
		swap(res[i],res[x-i-1]);
	}

	while(res[0]==0){
		res.erase(res.begin());
	}

	for (int i = 0; i < res.size(); ++i)
	{
		cout<<res[i]<<" ";
	}
	cout<<endl;
	return res;
}

int main(){

	vector<int> A={1, 2, 3};

	plusOne(A);


}
