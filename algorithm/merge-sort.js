//  uses recursion
// merge here is a helper function for the merge sort function below
function merge(array1, array2) {
    let combined = []
    let i = 0
    let j = 0
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            combined.push(array1[i])
            i++
        } else {
            if (array2[j] < array1[i]) {
                combined.push(array2[j])
                j++
            }
        }
    }
    while (i < array1.length) {
        combined.push(array1[i])
        i++
    }
    while (j < array2.length) {
        combined.push(array2[j])
        j++
    }
    return combined
}

// let merge1 = merge([1, 3, 7, 8], [2, 4, 5, 6]);
// console.log(merge1)


/* 
- break arrays in half
- base case: when array.length is 1
- uses merge() to put arrays together
 */

function mergeSort(array) {
    if (array.length === 1) return array
    let mid = Math.floor(array.length / 2)
    let left = array.slice(0, mid)
    let right = array.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([1, 3, 7, 8, 2, 4, 5, 6]))