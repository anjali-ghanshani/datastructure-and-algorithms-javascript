// "this" refers to an object its inside of.

//  An array is simply an object with property keys as integer.

class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }
    get(index) {
        return this.data[index]
    }
    push(value) {

        this.data[this.length] = value
        this.length++
        return this.length
    }
    pop() {
        let temp = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return temp


    }
    deleteAtIndex(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        console.log(this.data[this.length - 1]);
        delete this.data[this.length - 1];
        this.length--;
    }

}