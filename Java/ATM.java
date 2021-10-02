import java.util.Scanner;
//--------------------------------------- ATM Class-----------------------------------
public class ATM {
    private double balance;
    private int pin;

    public ATM(double b, int p ){  // Constructor------------------
        balance = b;
        pin = p;
    }
    public void withdrawal(int amt){//withdrawal method---------------
        Scanner sc = new Scanner(System.in);
        if (this.balance >= amt)
        {
            System.out.println("Do you want receipt at the end\n1. Yes\n2. No");
            int chose = sc.nextInt();
            this.balance-=amt;
            if(chose==1){
                System.out.println("Withdrawn Balance : "+ amt);
                System.out.println("Current balance : "+this.balance);
            }
            System.out.println("Transaction successful\nVisit again");

        }
        else{
            System.out.println("Insuffiecient balance");
        }
    }
    public void checkBalance(){
        System.out.println(balance);
    }  //checkBalance method-------------
    public void changePin(int newPin){ //ChangePin-----------
        pin = newPin;
        System.out.println("Pin changed Successfully\nVisit again Thankyou!");
    }

    public static void main(String[] args) {
        System.out.println("-----------Welcome to ATM-----------");
        System.out.println("Enter Your Pin :");
        Scanner sc = new Scanner(System.in);
        ATM obj = new ATM(5000,1234);
        int p = sc.nextInt();
        if(p == obj.pin){
            System.out.println("Select an option : \n1)Withdraw amount\n2)Check Balance\n3)Change Pin");

            int n = sc.nextInt();

            if(n==1){
                System.out.println("Enter The amount : ");
                int amt = sc.nextInt();
                obj.withdrawal(amt);
            }
            else if(n==2){
                obj.checkBalance();
            }
            else if(n==3){
                System.out.println("Enter new pin : ");
                int newpin = sc.nextInt();
                obj.changePin(newpin);
            }
        }
        else {
            System.out.println("Invalid pin\nTry again");
        }
    }
}