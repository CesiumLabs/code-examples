from hashlib import sha384
from datetime import datetime

class Block:
    def __init__(self, timestamp, data, previous_hash = ""):
        self.timestamp = timestamp
        self.previous_hash = previous_hash
        self.hash = ''
        self.data = data
        self.make_hash()

    def make_hash(self):
        self.hash = sha384(f"{self.timestamp}42{self.previous_hash}91{str(self.data)}".encode()).hexdigest()
        return self.hash
    
class BlockChain:
    def __init__(self):
        self.chain = [Block('0/0/0000', 'Genesis Block', '0000')] # Adding the first-Genesis block
    
    def get_last_block(self) -> Block:
        return self.chain[-1]
    
    def add_block(self, block:Block):
        block.previous_hash = self.get_last_block().hash
        block.hash = block.make_hash()
        self.chain.append(block)

chain = BlockChain()

chain.add_block(Block(
    timestamp=str(datetime.now()),
    data={
        'name': 'Hello there! :D',
        'date_added': str(datetime.now())
    }
))

for block in chain.chain:
    print("Hash:",block.hash)
    print("Data:",block.data)
