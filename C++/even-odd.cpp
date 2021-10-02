#include <iostream>
using namespace std;
int main(){
    int a;
    cout<<"Enter a number"<<endl;
    //Taking input of the number which is requried to check even or odd.
    cin>>a;

    //Checking input number is divisible by 2 or not. 
    if(a%2 == 0){
        cout<<"Entered number is even"<<endl;
    }
    else{
        cout<<"Entered number is odd"<<endl;
    }

    //Code execuited successfully
    return 0;
}