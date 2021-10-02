class MyCircularQueue:

    def __init__(self, k: int):
        self.head = self.tail = self.size = 0
        self.arr = [0] * k
        

    def enQueue(self, value: int) -> bool:
        if self.isFull(): return False
        self.arr[self.tail] = value
        self.tail = (self.tail + 1) % len(self.arr)
        self.size += 1
        return True
    

    def deQueue(self) -> bool:
        if self.isEmpty(): return False
        self.head = (self.head + 1) % len(self.arr)
        self.size -= 1
        return True
    
        
    def Front(self) -> int:
        if(self.isEmpty()): return -1
        else:
            return self.arr[self.head]
        

    def Rear(self) -> int:
        if(self.isEmpty()): return -1
        else:
            return self.arr[self.tail-1]
        

    def isEmpty(self) -> bool:
        return self.size == 0
        

    def isFull(self) -> bool:
        return self.size == len(self.arr)
