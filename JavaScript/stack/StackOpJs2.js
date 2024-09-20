class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}
class Stack {
    constructor() {
        this.head = null
    }
    isEmpty() {
        return this.head === null
    }
    push(data){
        const newNode = new Node(data)
        if(this.isEmpty()){
            this.head = newNode
            return
        }
       newNode.next = this.head
       this.head = newNode
    }
    pop(){
        if(this.isEmpty()){
            return -1
        }
        const top = this.head.data
        this.head = this.head.next
        return top
    }
    peek() {
        if(this.isEmpty()){
            return -1
        }
        return this.head.data
    }
}

const s = new Stack()
s.push(10)
s.push(9)
s.push(8)
while(!s.isEmpty()){
    console.log(s.peek());
    s.pop()
}
