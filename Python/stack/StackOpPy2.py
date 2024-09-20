class Node : 
    def __init__(self,data):
        self.data = data
        self.next = None
    
class Stack :
    def __init__(self):
        self.head = None
        
    def isEmpty(self) :
        return self.head is None
    
    def push(self, data) :
        new_node = Node(data)
        if self.isEmpty():
            self.head = new_node
            return
        new_node.next = self.head
        self.head = new_node
    
    def pop(self):
        if self.isEmpty():
            return -1
        top = self.head.data
        self.head = self.head.next
        return top
    def peek(self):
        if self.isEmpty():
            return -1
        return self.head.data

if __name__ == "__main__":
    s = Stack()
    s.push(1)
    s.push(2)
    s.push(3)
    while not s.isEmpty():
        print(s.peek())
        s.pop()