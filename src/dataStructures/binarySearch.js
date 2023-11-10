function bindaySearch(nums, target) {
    let leftIndx = 0;
    let rightIndex = nums.length - 1
    while (leftIndx <= rightIndex) {
        let middleIndex = Math.floor((leftIndx + rightIndex) / 2)
        if (target == nums[middleIndex]) return middleIndex
        else if (target < nums[middleIndex]) {
            rightIndex = middleIndex - 1
        }
        else leftIndx = middleIndex + 1
    }
    return -1
}
//Time complexity 0(longn)
console.log(bindaySearch([-5, 2, 4, 6, 10], 10))