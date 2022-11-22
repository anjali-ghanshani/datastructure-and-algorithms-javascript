class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class linkedList {

    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        // if (!this.head) return undefined
        let pre = this.head
        let temp = this.head
        while (temp.next) {
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return temp
    }

    unshift(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    shift() {
        if (!this.head) return undefined
        let temp = this.head
        this.head = this.head.next
        temp.next = null
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return temp
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined
        let temp = this.head
        for (let i = 0; i < index; i++) {
            temp = temp.next
        }
        return temp
    }

    set(index, value) {
        let temp = this.get(index)
        if (temp) {
            temp.value = value
            return true
        }
        return false
    }

    insert(index, value) {
        // if index is zero (unshift)
        if (index === 0) return this.unshift(value)
        // if  index is the last node of linkedList (push)
        if (index === this.length - 1) return this.push(value)
        // if the index is less than 0 or greater than or equal to length of the linkedList (return false)
        if (index < 0 || index >= this.length) return false
        const newNode = new Node(value)
        const before = this.get(index - 1)
        const after = before.next
        before.next = newNode
        newNode.next = after
        this.length++
        return this
    }
    remove(index) {
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        if (index < 0 || index >= this.length) return undefined
        let before = this.get(index - 1)
        let temp = before.next
        before.next = temp.next
        temp.next = null
        this.length--
        return temp
    }


    reverse() {
        let temp = this.head
        this.head = this.tail
        this.tail = temp
        let next = temp.next
        let prev = null

        for (let i = 0; i < this.length; i++) {
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }
        return this
    }

}





const myLinkedList = new linkedList(22)
myLinkedList.push(11);
myLinkedList.push(3);
myLinkedList.push(7);

// myLinkedList.insert(1, "inserted value")
let abc = []
let typee = typeof (abc);







