class Queue {
    constructor(value) {
        this.stack1 = [],
            this.stack2 = []
    }
    enqueue(value) {
        return this.stack1.push(value)


    }
    dequeue() {
        while (this.stack1.length !== 0) {
            this.stack2.push(this.stack1.pop())
        }

        let temp = this.stack2.pop()

        while (this.stack2.length !== 0) {
            this.stack1.push(this.stack2.pop())
        }

        return temp
    }

    peek() {
        while (this.stack1.length !== 0) {
            this.stack2.push(this.stack1.pop())
        }
        var temp = this.stack2.pop()
        this.stack2.push(temp)

        while (this.stack2.length !== 0) {
            this.stack1.push(this.stack2.pop())
        }

        return temp
    }
}


// Instantiating the object q
const q = new Queue(1)
// q.enqueue(11)
// q.enqueue(33)
// q.peek()
// q.pop()
// q.pop()
// q.pop()