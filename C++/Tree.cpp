#include <iostream>
using namespace  std;

class Node{

public:
	int data;
	Node *left,*right;
	
	Node(int val){
		data=val;
		left=right=NULL;
	}	
};
void print(Node *root){

	if(root==NULL){
		return;
	}
		print(root->left);
		cout<<root->data <<" ";
		print(root->right);
	}


int main(){

	Node *root=new Node(6);

	
	root->left             = new Node(2);
    root->right         = new Node(3);
    root->left->left     = new Node(4);
    root->left->right = new Node(5);

    cout << "\nInorder traversal of binary tree is \n";

    print(root);
    cout<<endl;
 
    

}