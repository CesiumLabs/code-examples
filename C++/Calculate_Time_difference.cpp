// Time difference
#include <iostream>
using namespace std;

struct TIME
{
    int seconds;
    int minutes;
    int hours;
};

int main()
{
    struct TIME t1, t2, difference;

    Time1:
    cout << "Enter start time." << endl;
    cout << "Enter hours, minutes and seconds respectively: ";
    cin >> t1.hours >> t1.minutes >> t1.seconds;
    bool b1 = (t1.hours>=1&&t1.hours<=12) && (t1.minutes>=1&&t1.minutes<=60) && (t1.seconds>=1&&t1.seconds<=60);
    if(!b1){
        cout<<"Please Enter valid time: ";
        goto Time1;
    }

    Time2:
    cout << "Enter stop time." << endl;
    cout << "Enter hours, minutes and seconds respectively: ";
    cin >> t2.hours >> t2.minutes >> t2.seconds;
    bool b2 = (t2.hours>=1&&t2.hours<=12) && (t2.minutes>=1&&t2.minutes<=60) && (t2.seconds>=1&&t2.seconds<=60);
    if(!b1){
        cout<<"Please Enter valid time: ";
        goto Time2;
    }

    
    difference.seconds = t1.seconds - t2.seconds;
    difference.minutes = t1.minutes - t2.minutes;
    difference.hours = t1.hours - t2.hours;

    
    cout << endl << "TIME DIFFERENCE: " << t1.hours << ":" << t1.minutes << ":" << t1.seconds;
    cout << " - " << t2.hours << ":" << t2.minutes << ":" << t2.seconds;
    cout << " = " << difference.hours << ":" << difference.minutes << ":" << difference.seconds;
    return 0;
}
