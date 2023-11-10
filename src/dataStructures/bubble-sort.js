//bubble sort you have take arra[0] and check if its greater than array[i+] if yes, then swap
const array = [4, 8, 20, -2, -6]

function bubbleSort(array){
    let swapped 
    do{
        swapped = false
        for(let i =0; i < array.length-1; i ++){
            if(array[i] > array[i+1]){
                let temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp
                swapped = true
            }
        }

    }
    while(swapped)
}

//Big-O => O(n^2)