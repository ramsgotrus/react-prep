//Merge Sorted Array Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
//Output: [1,2,2,3,5,6]

function mergeSortedArray(nums1, nums2, m, n) {
    let i = m - 1; let j = n - 1; let k = m + n - 1
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--]
        }
        else nums1[k--] = nums2[j--]
    }
    return nums1
}
nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
console.log(mergeSortedArray(nums1, nums2, m, n))