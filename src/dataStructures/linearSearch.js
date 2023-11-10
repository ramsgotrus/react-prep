function linearSearch(nums,target){
    for(let i =0; i<nums.length; i ++){
        if(nums[i] === target)
        return i
    }
    return -1
}

//Time complexity Big-0 = O(n)
console.log(linearSearch([-5, 2, 4, 6, 10], 10))

