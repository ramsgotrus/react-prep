//QuickSort identify the pivot element in the array
//. pivot could be a first element, last element or random element and put small element on left array and greater 
// element on right array and you repeat the process untill one of the array become 1.
const array = [4, 8, 20, -2, -6]

function quickSort(array) {
    if (array.length < 2) return array
    let pivot = array[array.length - 1]
    let leftArray = []
    let rightArray = []
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            leftArray.push(array[i])
        }
        else rightArray.push(array[i])
    }
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
}

//Big-0 = O(n^2)
//console.log(quickSort(array))