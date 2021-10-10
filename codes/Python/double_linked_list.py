class Node:
    def __init__(self, data=None):
        self.next = None
        self.data = data
        self.previous = None

class LinkedList:
    def __init__(self):
        self.head = Node()
    
    def __len__(self):
        cur = self.head
        total = 0
        while cur.next != None:
            total += 1
            cur = cur.next
        return total

    def append(self, data):
        new_node = Node(data)
        cur = self.head
        while cur.next != None:
            cur = cur.next
        new_node.previous = cur
        cur.next = new_node
        return

    def remove(self, index_position):
        if index_position >= len(self): raise IndexError("Out of range")
        current_index = 0
        cur = self.head
        while True:
            last_node = cur
            cur = cur.next
            if current_index == index_position:
                last_node.next = cur.next
                return
            current_index += 1
    
    def display(self):
        elements = []
        cur_node = self.head
        while cur_node.next != None:
            cur_node = cur_node.next
            elements.append(cur_node.data)
        return elements

    def get(self, index_position, raw=False):
        if index_position >= len(self): raise IndexError("Out of range")
        current_index = 0
        cur = self.head
        while True:
            cur = cur.next
            if current_index == index_position:
                return cur.data if not raw else cur
            current_index += 1

list = LinkedList()

list.append("Element 1")
list.append("Element 2")
list.append("Element 3")

print(list.get(0, raw=True).next.next.previous)
