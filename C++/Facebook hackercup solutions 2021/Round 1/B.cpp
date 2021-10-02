// problem link : https://www.facebook.com/codingcompetitions/hacker-cup/2021/round-1/problems/B

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


void solve(ll test_case){
    ll n , m , a , b ; cin >> n >> m >> a >> b ;

    //impossible case condition :
    if(n+m-1 > a or n+m-1 > b){
        cout << "Case #" << test_case << ": " << "Impossible" << '\n' ;
        return ;
    }

    ll arr[n][m]; //declaring the matrix

    if(n == 2 or m == 2){
        if(n == 2 and m == 2){
            arr[0][0] = a-2 ;
            arr[1][1] = 1 ;
            arr[0][1] = 1 ;
            arr[1][0] = b-2 ;
        }else{
            if(m == 2){
                for(int i = 0 ; i < n ; i++){
                    arr[i][1] = 1 ;
                    arr[i][0] = 1000 ;
                }
                arr[0][0] = a - n ; 
                arr[n-1][0] = b - n ;
            }else{
                for(int i = 0 ; i < m ; i++){
                    arr[0][i] = 1 ;
                    arr[1][i] = 1000 ;
                }
                arr[1][0] = b - m ;
                arr[1][m-1] = a - m ; 
            }
        }
        cout << "Case #" << test_case << ": " << "Possible" << '\n' ;
        for(int i = 0 ; i < n ; i++){
            for(int j = 0 ; j < m ; j++){
                cout << arr[i][j] << " ";
            }
            cout << endl ;
        }
        return ;
    }
    
    for(int i = 0 ; i < n ; i++){
        for(int j = 0 ; j < m ; j++){
            arr[i][j] = 1 ;
        }
    }

    for(int i = 1 ; i < n-1 ; i++){
        for(int j = 1 ; j < m-1 ; j++){
            arr[i][j] = 1000;
        }
    }
    for(int i = 1 ; i < m-1 ; i++){
        arr[0][i] = 1000 ;
    }

    //filling the remaining values : 
    arr[1][0] = a - (n+m-2);
    arr[1][m-1] = b - (n+m-2);

    //printing the matrix formed :
    cout << "Case #" << test_case << ": " << "Possible" << '\n' ;
    for(int i = 0 ; i < n ; i++){
        for(int j = 0 ; j < m ; j++){
            cout << arr[i][j] << " ";
        }
        cout << endl ;
    }
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
        solve(test_case) ;
        test_case++;
    }

    auto stop = high_resolution_clock::now();
    auto duration = duration_cast<microseconds>(stop - start);
    cerr << "\n\nTime taken : " << fixed << duration.count() / 1000000.0 << "seconds" << "\n";
}

