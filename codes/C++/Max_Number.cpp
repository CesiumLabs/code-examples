#include <iostream>
#include <algorithm>

using namespace std;

int main(){
  //Declaring variables to store numbers
  int a,b,c;
  
  //Taking input from user
  cout<<"Enter Three numbers: "<<endl;
  cin>>a>>b>>c;
  
  int m = max({ a, b, c });
  cout<<m<<" is maximum"<<endl;
  
  //code executed successfully
  return 0;
}
