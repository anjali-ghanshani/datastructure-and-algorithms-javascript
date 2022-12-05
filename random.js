// create a javascript program to find the middle node of thelinked list in one pass

// remove duplicates from a singly linked list



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



    removeDuplicate() {
        let temp = this.head
        let pre = this.head
        let unique = []
        while (temp != this.tail) {
            unique.forEach(compare())
            unique.push(temp.value)
            temp = temp.next
            pre = pre.next
        }

    }
}

const myList = new linkedList(22)
myList.push(11)
myList.push(3)
myList.push(7)
myList.push(11)


const unique = new Set([22, 11, 3, 7, 11]);
console.log(unique);
