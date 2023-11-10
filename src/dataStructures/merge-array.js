const array = [4, 8, 20, -2, -6]

//merge sorted array
function merge(leftArray, rightArray) {
    let sortedArray = []
    while (leftArray.length && rightArray.length) {
        if (leftArray[0] <= rightArray[0]) {
            sortedArray.push(leftArray.shift())
        }
        else {
            sortedArray.push(rightArray.shift())
        }
    }
    const returnArray = [...sortedArray, ...leftArray, ...rightArray]
    return returnArray
}

function mergeArray(array) {
    if (array.length < 2) return array
    const mid = Math.floor(array.length / 2)
    const left = array.slice(0, mid)
    const right = array.slice(mid)
    return merge(mergeArray(left), mergeArray(right))
}