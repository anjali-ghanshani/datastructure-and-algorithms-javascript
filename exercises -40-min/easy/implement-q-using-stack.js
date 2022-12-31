class Queue {
    constructor() {
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
const q = new Queue()
// q.enqueue(11)
// q.enqueue(33)
// q.peek()
// q.pop()
// q.pop()
// q.pop()


class Stack {
    constructor(value) {
        this.queue1 = [],
            this.queue2 = []
    }

    push(value) {
        this.queue1.push(value)
        this.queue1.shift
        return this
    }

    pop() {
        while (this.queue1.length !== 1) {
            this.queue2.push(this.queue1.shift())
        }
        var pop = this.queue1.shift()

        while (this.queue2.length !== 0) {
            this.queue1.push(this.queue.shift())
        }

        return pop
    }
}

const s = new Stack()
