// problem link : https://www.facebook.com/codingcompetitions/hacker-cup/2021/qualification-round/problems/A1

#include <bits/stdc++.h>
using namespace std ;
using namespace std::chrono;

#define ll long long 
#define pb push_back 
#define yes cout << "YES" 
#define no cout << "NO" 
#define all(x) (x).begin(),(x).end()

const long long int mod = 1e9 + 7 ;
const long long int INF = 1e18 ;

void readvec(vector<ll> &v){
    for(int i = 0 ; i < v.size() ; i++){
        cin >> v[i] ;
    }
}

void printvec(vector<ll> &v){
    for(int i = 0 ; i < v.size() ; i++){
        cout << v[i] << " ";
    }
}

//For debugging :
#ifndef ONLINE_JUDGE
#define debug(x) cerr << #x <<" "; _print(x); cerr << endl;
#else
#define debug(x)
#endif

void _print(long long t) {cerr << t;}
void _print(int t) {cerr << t;}
void _print(string t) {cerr << t;}
void _print(char t) {cerr << t;}
void _print(long double t) {cerr << t;}
void _print(double t) {cerr << t;}
void _print(unsigned long long t) {cerr << t;}

template <class T, class V> void _print(pair <T, V> p);
template <class T> void _print(vector <T> v);
template <class T> void _print(set <T> v);
template <class T, class V> void _print(map <T, V> v);
template <class T> void _print(multiset <T> v);
template <class T, class V> void _print(pair <T, V> p) {cerr << "{"; _print(p.first); cerr << ","; _print(p.second); cerr << "}";}
template <class T> void _print(vector <T> v) {cerr << "[ "; for (T i : v) {_print(i); cerr << " ";} cerr << "]";}
template <class T> void _print(set <T> v) {cerr << "[ "; for (T i : v) {_print(i); cerr << " ";} cerr << "]";}
template <class T> void _print(multiset <T> v) {cerr << "[ "; for (T i : v) {_print(i); cerr << " ";} cerr << "]";}
template <class T, class V> void _print(map <T, V> v) {cerr << "[ "; for (auto i : v) {_print(i); cerr << " ";} cerr << "]";}

//binary exponentiation 
long long binpow(long long a, long long b) {
    if (b == 0)
        return 1;
    long long res = binpow(a, b / 2);
    if (b % 2)
        return res * res * a;
    else
        return res * res;
}

bool vowel(char x){
    if(x == 'A' or x == 'E' or x == 'I' or x == 'O' or x == 'U'){
        return true ;
    }
    return false ;
}
ll ans = 0 ;
void solve(){
    string s ; cin >> s;
    vector<ll> v(26);
    for(int i = 0 ; i < 26 ; i++){
        ll count = 0 ;
        for(int j = 0 ; j < s.length() ; j++){
            if(vowel(s[j])){
                if(vowel(i + 'A')){
                    if(s[j] != i+'A'){
                        count += 2 ;
                    }else{
                        count;
                    }
                }else{
                    count++;
                }
            }else{
                if(vowel(i + 'A')){
                    count++;
                }else{
                    if(s[j] != i+'A'){
                        count += 2 ;
                    }else{
                        count;
                    }
                }
            }
        }

        if(count == 0){
            string x = s ;
            sort(all(x));
            if(x[0] == x[s.length()-1]){
                v[i] = 0;
            }else{
                v[i] = INF;
            }
        }else{
            v[i] = count ;
        }
    }
    ans = *min_element(all(v));
}

int main(){
    auto start = high_resolution_clock::now();
    ios::sync_with_stdio(false);
    cin.tie(0);

#ifndef ONLINE_JUDGE
    freopen("Error.txt", "w", stderr);
#endif
 
    int tests = 1 , test_case = 1;
    cin >> tests ;
    while(tests--){
        cout << setprecision(15) << fixed ;
        solve() ;
        cout << "Case #" << test_case << ": " << ans << '\n' ;
        test_case++;
    }

    auto stop = high_resolution_clock::now();
    auto duration = duration_cast<microseconds>(stop - start);
    cerr << "\n\nTime taken : " << fixed << duration.count() / 1000000.0 << "seconds" << "\n";
}

