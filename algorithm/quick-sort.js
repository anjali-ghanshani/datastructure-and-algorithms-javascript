// in quick sort the first item is cosidered pivot item all all the other are compared against it and the pivot will finds its spot so that every element less than pivot will be on the left and pivot greater than pivot will be on the right

function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex]
    array[firstIndex] = array[secondIndex]
    array[secondIndex] = temp
}

function pivot(array, pivotIndex = 0, endIndex = array.length - 1) {
    let swapIndex = pivotIndex
    for (let i = pivotIndex + 1; i <= endIndex; i++) {
        if (array[i] < array[pivotIndex]) {
            swapIndex++
            swap(array, swapIndex, i)
        }
    }
    swap(array, pivotIndex, swapIndex)
    return swapIndex
}

function quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(array, left, right)
        quickSort(array, left, pivotIndex - 1)
        quickSort(array, pivotIndex + 1, right)
    }
    return array
}


console.log(quickSort([4, 6, 1, 7, 3, 2, 5]));


/* 
Big O of quick SOrt 

    - did not have to create new item(diff than merge sort) (space complexity o(1))
    - time complexity = 0(n) * o(log n) = O(nlog n)(this is the best and average case)
    - worst case will be O(n ^ 2)
    - if you have random data it is a effecient algorithm | if you have almost sorted data then, it is inefficient
 */