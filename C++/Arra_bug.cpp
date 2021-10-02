#include <iostream>
#include<vector>

using namespace  std;

vector<int> rotateArray(vector<int> &A, int B) {

	vector<int> ret; 
	int j=0;

	B=B%(A.size());

	for (int i = 0; i < A.size(); ++i)
	{
	
			if((i+B)<A.size()){
				ret.push_back(A[i+B]);
			}
			else{
				ret.push_back(A[j]);
				j++;
		}
	}

	return ret;
	}


int main(){


	vector<int> A={2,3,5,1,1,5};

	int B=2;



	rotateArray(A,B);
	


return 0;

}