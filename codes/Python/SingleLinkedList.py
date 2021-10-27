class Node:
  def __init__(self,word,next=None):
    self.word = word
    self.next = next
  def setNext(self,nextNode):
    if isinstance(nextNode,Node):
      self.next = nextNode
    else : 
      self.next = None
  def getNext(self):
    return self.next

class SingleLinkedList:
  def __init__(self):
    self.head = None
    self.counter = 0

  def getNodeByIdx(self, index):
      curr = self.head
      for i in range(index-1):
        curr = curr.getNext()
      return curr

  def addNode(self,word):
    if self.head is None :
      self.head = Node(word)
    else :
      self.getNodeByIdx(self.counter).setNext(Node(word))

    self.counter += 1
  
  def getSize(self):
    return self.counter
  
  def printAll(self):
    curr = self.head
    for i in range(self.counter):
      print(curr.word)
      curr = curr.getNext()

  def remove(self):
    self.counter -= 1
    self.getNodeByIdx(self.counter).setNext(None)


sll = SingleLinkedList()
sll.addNode("first")
sll.addNode("second")
sll.addNode("third")

sll.printAll()
sll.remove()
print("\n--after remove--\n")
sll.printAll()