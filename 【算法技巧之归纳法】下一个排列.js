/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {
    if(nums && nums.length <= 1)return nums;
    for(var i=nums.length-2;i >= 0;i--){
        if(nums[i] < nums[i+1])break;
    }
    if(i!=-1){
        for(var j=i+1;j<nums.length;j++){
            if(nums[j] <= nums[i])break;
        }
        [nums[i],nums[j-1]] = [nums[j-1],nums[i]];
    }
    for(var j=i+1,k=nums.length-1;j<k;j++,k--){
        [nums[j],nums[k]] = [nums[k],nums[j]];
    }
    return nums;
};

console.log(nextPermutation([1,3,2,7,6,5]))