/* const a = new Map()
const b = new Set()
 */
// versions of hashTable

// Map allows keys to be of any datatype
// object allows only key of string type
// Sets only stores key and not values

class HashTable {
    constructor(size) {
        this.data = new Array(size)
    }
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }
}


const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
