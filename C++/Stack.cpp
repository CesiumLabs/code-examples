//implementing stack using array

#include <bits/stdc++.h>
using namespace std;
#define max 100               //defining max limit for stack
class Stack
{
    int arr[max];             //array for storing stack elements
    int top;                  //will work as a pionter to top of stack

public:
    Stack()                   //constructor
    {
        top = -1;
    }
    //Function to push data onto the stack
    void push(int data)
    {
        /*check if stack is full or not if full
        display overflow error else add element to stack*/
        if (top >= max - 1)
        {
            cout << "Overflow" << endl;
            return;
        }
        arr[++top] = data;
    }
    //Function to pop data from stack
    void pop()
    {
        /*check if there is any element to remove otherwise
        display underflow error*/
        if (top <= -1)
        {
            cout << "Underflow" << endl;
            return;
        }
        top--;
    }
    //Function to get the data from top of stack
    int peep()
    {
        if(top >= 0 && top <= max-1)
        return arr[top];
        return -1;
    }
    //Function to check if stack is empty or not
    //return true if empty else false
    bool isEmpty()
    {
        return top <= -1 ? true : false;
    }

};

int main()
{
    Stack s;
    s.push(1);
    s.push(3);
    s.push(4);
    s.push(5);
    cout << s.peep() << endl;
    s.pop();
    cout << s.peep() << endl;
    s.pop();
    cout << s.peep() << endl;
}