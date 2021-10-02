#include <bits/stdc++.h>
using namespace std;

vector<int> performOps(vector<int> A) {
    vector<int> B(2 * A.size(), 0);
    for (int i = 0; i < A.size(); i++) {
        B[i] = A[i];
        B[i + A.size()] = A[(A.size() - i) % A.size()];
    }
    return B;
}


int main() {
		vector<int> A={5, 10, 2, 1};
vector<int> B = performOps(A);
for (int i = 0; i < B.size(); i++) {
    cout<<B[i]<<" ";
}
	return 0;
}