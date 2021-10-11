#include <bits/stdc++.h>

#define FI(i,a,b) for(int i=(a);i<=(b);i++)
#define FD(i,a,b) for(int i=(a);i>=(b);i--)

#define LL long long
#define Ldouble long double
#define PI 3.1415926535897932384626

#define PII pair<int,int>
#define PLL pair<LL,LL>
#define mp make_pair
#define fi first
#define se second

using namespace std;

int q, n, s[299][299];

int main(){
	scanf("%d", &q);
	while(q--){
		scanf("%d", &n);
		FI(i, 1, 2 * n) FI(j, 1, 2 * n) scanf("%d", &s[i][j]);
		
		int ans = 0;
		FI(i, 1, n) FI(j, 1, n){
			int i2 = n + n + 1 - i;
			int j2 = n + n + 1 - j;
			int mx = max(max(max(s[i][j], s[i][j2]), s[i2][j]), s[i2][j2]);
			
			ans += mx;
		}
		printf("%d\n", ans);
	}
	return 0;
}
