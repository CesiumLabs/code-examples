#include <bits/stdc++.h>
using namespace std;


bool com(string a,string b){

	string ab=a.append(b);
	string ba=b.append(a);

	return ab.compare(ba)>0?true:false;
}

string largestNumber(vector<int> &A){

	vector<string> Ans;
	string s="";
	int i,c=0;
	for (int i = 0; i < A.size(); ++i)
	{
		Ans.push_back(to_string(A[i]));

		if(A[i]==0){
			c++;
		}
	}
	if(A.size()==c){
		return "0";
	}

	sort(Ans.begin(),Ans.end(),com);

	for (int i = 0; i <Ans.size(); i++)
	{
		s+=Ans[i];
		

	}

	cout<<s<<endl;

	return s;
}

int main(){


vector<int> A={3, 30, 34, 5, 9};

largestNumber(A);


}