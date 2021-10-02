



public class LinkedListApp {

    
    public static void main(String[] args) {
        // TODO code application logic here
        LinkList x = new LinkList();
        x.insertFirst(5);
        x.insertFirst(6);
                 x.displayList();

        //x.insertFirst(10);
       // x.insertFirst(20);
       // x.displayList();
       // x.deleteFirst();
         x.delete(2);
        
        //Node k = x.find(2);
       // k.displayNode();
         x.displayList();

    }

}

class Node {

    int data;
    Node next;

    Node(int item) { //constructor
        this.data = item;
        this.next = null;
    }

    void displayNode() {
        System.out.print(this.data + " ");
    }
}

class LinkList {

    private Node head;

    public LinkList() { //constructor
        head = null;
    }

    public boolean isEmpty() {
        return (this.head == null);
    }

    public void insertFirst(int i) {
        Node newNode = new Node(i);
        newNode.next = head;
        head = newNode;
        //System.out.println(head);
    }

    public Node deleteFirst() {
        if (isEmpty()) {
            System.out.println("List is empty,nothing to delete");
            return null;
        }
        Node temp = head;
        head = head.next;//head move to second object
        temp.next = null;// break the link,security problem
        //because we return temp its next have link with other object
        return temp;
    }

    public void displayList() {
        if (isEmpty()) {
            System.out.println("List is empty, Nothing to display");

        }
        Node current = head;
        while (current != null) {
            current.displayNode();
            current = current.next;
        }
        System.out.println();
    }

    public Node find(int key) {
        Node current = head;
        int count = 1;
        while (current != null) {
            if (count == key) {
                return current;
            }
            current = current.next;
            count++;
        }
        System.out.println("Item not found");
        return null;

    }

    public void delete(int key) {
        if (isEmpty()) {
            System.out.println("List is em[ty. Nothing to delete");
            return;
        }

        Node current = head;
        Node previous = head;
        int count = 1;
        while (current != null) {
            if (count == key) {
                if (count == 1) {
                    head = head.next;
                } else {
                    previous.next = current.next;
                }
                System.out.println("Item deleted");
                return;
            }
            previous = current;
            current = current.next;
            count++;
        }
        System.out.println("Item not available. Deletion terminated");
    }
}
