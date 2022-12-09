//  Last in first out (LIFO)

// 1 -> 2-> 3->


class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value)
        this.top = newNode
        this.length = 1
    }
    push(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.top = newNode
        } else {
            newNode.next = this.top
            this.top = newNode
        }
        this.length++
        return this
    }
    pop() {
        if (this.length === 0) return "stack is empty"
        let temp = this.top
        this.top = this.top.next
        temp.next = null
        this.length--
        return temp
    }
}




const mystack = new Stack("first");
mystack.push("second")
mystack.push("third")