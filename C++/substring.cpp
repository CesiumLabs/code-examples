#include <bits/stdc++.h>
using namespace  std;

int main(){

	string s="na";
	string t="apna collegena";
	int S=s.size(),T=t.size();
	for (int i = 0; i <= T-S  ; ++i)
	{
		if(t.substr(i,S)==s){
			cout<<"Index is founded "<<i<<endl;
		}
	}
	return 0;
}