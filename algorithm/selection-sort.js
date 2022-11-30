// Selection Sort [3, 5, 6, 7, 3, 2, 2]
// it will keep the index of the minimum value in a min variable.

function selectSort(array) {
    let min
    for (let i = 0; i < array.length - 1; i++) {
        min = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) min = j
        }
        if (i !== min) {
            let temp = array[i]
            array[i] = array[min]
            array[min] = temp
        }
    }
    return array
}


selectSort([3, 5, 6, 7, 3, 2, 2]);