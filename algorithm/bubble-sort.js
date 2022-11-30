// Bubble sort - comparing each item with the next item the array and placing the value at its right spot, and looping through until sorting is done.

function bubbleSort(array) {
    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    return array
}


bubbleSort([3, 5, 6, 7, 3, 2, 2]);