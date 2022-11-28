class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(value) {
        const newNode = new Node(value)
        this.front = newNode
        this.back = newNode
        this.length = 1
    }
    enqueue(value) {
        const newNode = new Node(value)
        if (!this.front) {
            this.front = newNode
            this.back = newNode
        } else {
            this.back.next = newNode
            this.back = newNode
        }
        this.length++
        return this


    }
    dequeue() {
        if (!this.front) return undefined
        let temp = this.front
        this.front = temp.next
        temp.next = null
        if (this.length === 0) {
            this.front = null
            this.back = null
        }
        this.length--
        return temp
    }
}


// Instantiating the object q
const q = new Queue(1)
q.enqueue(11)
q.enqueue(33)