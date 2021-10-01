#include <iostream>
using namespace std;

class college
{
    private:
    int fund;

    public:
    string name;
    int YoE;
    float HP;
    bool IsGovernment;

    void setFund(int fund_variable)
    {
        fund = fund_variable;             // sett function
    }

    int getFund()
    {
        return fund;
    }

};

int main()
{
    college iitb;
    iitb.name = "Indian Institute og Technology, Bombay";
    iitb.YoE= 1958;
    iitb.HP = 100;
    iitb.IsGovernment = true;
    iitb.setFund(100000);

    cout<<"College Name: "<<iitb.name<<endl;
    cout<<"YoE: "<<iitb.YoE<<endl;
    cout<<"HP: "<<iitb.HP<<endl;
    cout<<"IsGov: "<<iitb.IsGovernment<<endl;
    cout<<iitb.getFund();

}