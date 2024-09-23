class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class Stack {
    constructor(head) {
        this.head = null
    }
   isEmpty() {
    return this.head == null
   }

   push(data) {
    const newNode = new Node(data)
    if(this.isEmpty()) {
        this.head = newNode
        return;
    }
    newNode.next = this.head
    this.head = newNode
   }

   pop() {
    if(this.isEmpty() ){
        return -1
    }
    const top = this.head.data
    this.head = this.head.next
    return top
   }
   peek() {
    if(this.isEmpty()) {
        return -1
    }
    return this.head.data
   }
}

const s = new Stack();
s.push(1)
s.push(2)
s.push(3)

while(!s.isEmpty()){
    console.log(s.peek());
    s.pop()
}