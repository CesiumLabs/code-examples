# Tip : self.head means the first node in this code

class Node:
    '''
    Object to store single node of linked list
    Attributes:
        data: Data stored in node
        next_node: Reference to next node in linked list
    '''
    data = None
    next_node = None
    def __init__(self,data):
        self.data = data
    def __repr__(self):
        return "<Node data: %s>" % self.data


class LinkedList:
    #Singly Linked List

    def __init__(self):
        self.head=None

    def is_empty(self):
        return self.head == None

    def size(self):
        #Returns the number of nodes in the list in O(n) time
        current=self.head
        count=0

        while current:
            count +=1
            current=current.next_node
        return count
    
    def add(self,data):
        #Adds new node at head of the list in the beginning in O(1) time
        new_node= Node(data)
        new_node.next_node=self.head
        self.head = new_node
    
    def search(self,key):
        '''
        Search for the first node containing data that matches the key. Return the node or 'None' if not found
        Example :
        l=LinkedList()
        l.add(1) 
        l.add(2) 
        l.add(3)
        n=l.search(3)
        n
        <Node data: 3>
        '''
        current = self.head
        
        while current:
            if current.data == key:
                return current
            else:
                current=current.next_node
        return None


    def insert(self,data,index):
        """
        Inserts a new Node containing data at index position
        Insertion takes O(1) time but finding node at insertion point takes
        O(n) time.
        Takes overall O(n) time.

        Example : Suppose in the Linked list : 3->2->1
        We want to add 4 between 2 and 1. Basically at index 2.
        So here new is 4, prevnode is 2, nextnode is 1.
        We assign them by using below while loop for position using current variable.
        The loop is running till current reaches node of value 2.
        Now we assign prevnode = 2 , nextnode = 1.
        Then we change where they are pointing to by using new=4.
        Hence list will be like : 3->2->4->1
        
        Implementation:
        l=LinkedList()
        l.add(1)      
        l.add(2)      
        l.add(3)      
        l              
        [Head: 3]-> [2]-> [Tail: 1]
        l.insert(4,2) 
        l
        [Head: 3]-> [2]-> [4]-> [Tail: 1]

        """

        if index == 0 :
            self.add(data)
        
        if index > 0:
            new = Node(data)
            
            position= index
            current = self.head

            while position>1:
                current=current.next_node
                position-=1
            
            prevnode = current
            nextnode = current.next_node

            prevnode.next_node=new
            new.next_node=nextnode

    def remove(self,key):
        """
        Removes Node containing data that matches the key
        Returns the node or `None` if key doesn't exist
        Takes O(n) time

        Example :
        We can't just remove a node without repairing its before node to point at its after node.
        so for  Linked list : 4->3->2->1
        if we do remove(3), we should have Linked List : 4->2->1
        We have current variable to start from beginning head node. 
        Previous variable to keep track of the node just before the to-be deleted node.
        We also have found variable to be set true after to-be deleted node is found.
        
        Now, if node to be deleted is the first head node itself,make the next node head . 
        This means first node is deleted now.
        But if node to be deleted is somewhere in between , like the node with value 3 above, 
        Make the next node of previous i.e 4 to point to next node of to-be deleted node 3 . i.e node with value 2. 
        This causes Linked list : 4->2->1. Hence remove is done for node of value 3.
        Lastly, the else condition will update previous to current and current to next node to keep the node traversal going on
        till the if conditions get satisfied and we find our to-be deleted node.
        
        Implementation:
        l=LinkedList()
        l.add(1)      
        l.add(2)       
        l.add(3)      
        l.add(4)
        l
        [Head: 4]-> [3]-> [2]-> [Tail: 1]
        l.remove(3)
        <Node data: 3>
        l
        [Head: 4]-> [2]-> [Tail: 1]
        """

        current=self.head
        previous = None
        found = False
        while current and not found:
            if current.data==key and current == self.head:
                found = True
                self.head=current.next_node
            elif current.data == key :
                found = True
                previous.next_node=current.next_node
            else:
                previous=current
                current=current.next_node

        return current


    def __repr__(self):
        
        '''
        Return a string representation of the list. Takes O(n) time.
        Example : 
        l=LinkedList()
        l.add(1) 
        l.add(2) 
        l.add(3)
        l      
        [Head: 3]-> [2]-> [Tail: 1]
        '''

        nodes = []
        current = self.head
        while current:
            if current is self.head:
                nodes.append("[Head: %s]" % current.data)
            elif current.next_node is None:
                nodes.append("[Tail: %s]" % current.data)
            else:
                nodes.append("[%s]" % current.data)
            current = current.next_node
        return  '-> '.join(nodes)