#include <bits/stdc++.h>
using namespace std;
 
class Node {
public:
    string data;
    Node* next;
};

Node* push(Node* head_ref, string new_data)
{
    Node* new_node = new Node();
 
    new_node->data = new_data;
 
    new_node->next = (head_ref);
 
    (head_ref) = new_node;

    return head_ref;
}
 
void insertAfter(Node* prev_node, string new_data)
{
    
    if (prev_node == NULL)
    {
        cout<<"the given previous node cannot be NULL";
        return;
    }

    Node* new_node = new Node();

    new_node->data = new_data;
 
    new_node->next = prev_node->next;
 
    prev_node->next = new_node;
}
 
void deleteNode(Node **head_ref, int position)
{
     
    if (*head_ref == NULL)
        return;
     
    Node* temp = *head_ref;
 
    if (position == 0)
    {
        
        *head_ref = temp->next;
         
        free(temp);            
        return;
    }
 
    
    for(int i = 0; temp != NULL && i < position - 1; i++)
        temp = temp->next;
 
    if (temp == NULL || temp->next == NULL)
        return;
 

     Node *next = temp->next->next;
 
    free(temp->next); 
     
    temp->next = next;
}


Node* reverseList(Node* head) {
        Node *prev = NULL, *next = NULL;
 
        while (head != NULL) {
           
            next = head->next;
 
            
            head->next = prev;
 
            
            prev = head;
            head = next;
        }
    
        return prev;
    }

void join(Node* head1,Node* head2)
{
    Node* current = head1;
    while (current->next != NULL)
    {
        current = current->next;
    }
    current->next=head2;
}

void sorting (Node*head){
    for(Node*temp1=head;temp1->next!=NULL;temp1=temp1->next){

        for(Node*temp2=temp1->next;temp2!=NULL;temp2=temp2->next){

            if(temp1->data>temp2->data){
                string temp3=temp2->data;
                temp2->data=temp1->data;
                temp1->data=temp3;
            }       
        }
    }
}
 

int getCount(Node* head)
{
    int count = 0; 
    Node* current = head;
    while (current != NULL)
    {
        count++;
        current = current->next;
    }
    return count;
}

void printList(Node* n)
{
    while (n != NULL) {
        cout << n->data << " ";
        n = n->next;
    }
    cout<<endl<<endl;
}
 
int main()
{
    
    Node* head = new Node();
    Node* second = new Node();
    Node* third = new Node();
 
    head->data="first";
    head->next = second; 
 
    second->data = "second"; 
    second->next = third;
 
    third->data = "third";
    third->next = NULL;

    head=push(head, "front");
 
    printList(head);
    

    Node* head2=new Node();
    Node* fifth=NULL;
    Node* sixth = NULL;

    fifth = new Node();
    sixth = new Node();

    head2->data = "fourth";
    head2->next = fifth; 
 
    fifth->data = "fifth"; 
    fifth->next = sixth;
 
    sixth->data ="sixth";
    sixth->next = NULL;

    insertAfter(sixth, "end");

    printList(head2);

    join(head,head2);

    printList(head);

    head=reverseList(head);

    printList(head);

    cout<<endl<<getCount(head)<<endl;

    sorting(head);

    printList(head);

    return 0;
}