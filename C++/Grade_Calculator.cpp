//Grade calculator

#include<iostream>
using namespace std;
int main()
{
    int i;
    float mark, sum=0, avg;
    cout<<"Enter Marks obtained in 5 Subjects: ";
    for(i=0; i<5; i++)
    {
        EnterMarks:
        cin>>mark;
        if(mark>=0 && mark<=100)
            sum = sum+mark;
        else{    
            cout<<"Please enter marks from 0 to 100: ";
            goto EnterMarks;
        }
    }

    avg = sum/5;
    if(avg>=91 && avg<=100)
        cout<<"Grade = A1";
    else if(avg>=81 && avg<91)
        cout<<"Grade = A2";
    else if(avg>=71 && avg<81)
        cout<<"Grade = B1";
    else if(avg>=61 && avg<71)
        cout<<"Grade = B2";
    else if(avg>=51 && avg<61)
        cout<<"Grade = C1";
    else if(avg>=41 && avg<51)
        cout<<"Grade = C2";
    else if(avg>=33 && avg<41)
        cout<<"Grade = D";
    else
        cout<<"Bad luck you are failed...";
    
    cout<<endl;
    return 0;
}
