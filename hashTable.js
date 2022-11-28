/* 
Hash table 
In JavaScript, a “hash table” is a data structure that can be utilized to map keys to their specified values. It is also known as a “hash map“. Hash tables efficiently perform the insertion and deletion operation for a key-value pair and search the value of a key within a hash table.

- characteristics of hash:
    1. one-way
    2. deterministic for same value it will always create the same hash 
(for different inputs, if the hash is same (same spot in memory) it will be a case of HT collision)

- methods to deal with hash table collision:
    separate chaining - at the same memory location a separate array is organised to store multiple value of same hash.
    linear probing (open addressing) - looks for different spot in memory instead of separate chaining.
    
*/
/* prime numbers generate more random hash that is why size = 7 */
class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size)
    }
    _hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(1) * 23) % this.dataMap.length
        }
        return hash
    }
    set(key, value) {
        let index = this._hash(key)
        if (!this.dataMap[index]) {
            this.dataMap[index] = []
        }
        this.dataMap[index].push([key, value])
        return this
    }

    get(key) {
        let index = this._hash(key)
        if (!this.dataMap[index]) return undefined
        for (let i = 0; i < this.dataMap[index].length; i++) {
            if (this.dataMap[index][i][0] === key) {
                return this.dataMap[index][i][1]
            }
        }

    }

    keys() {
        let allKeys = []
        for (let i = 0; i < this.dataMap.length; i++) {
            if (this.dataMap[i]) {
                for (let j = 0; j < this.dataMap[i].length; j++) {
                    allKeys.push(this.dataMap[i][j][0])
                }
            }
        }
        return allKeys
    }
}


let abc = new HashTable()
abc.set("bolts", 1400)
abc.set("washers", 50)
abc.set("bricks", 2000)
abc.set("sets", 200)
abc.set("pipes", 3000)
abc.set("screws", 4000)
abc.set("toys", 500)

