/**
 * @Author: btg
 * @Date: 2021-12-05 22:29:51
 * @Description: 移动零
 */

//双指针
 var moveZeroes = function(nums) {
    const n = nums.length;
    var fast = 0, slow = 0;
    while(fast < n){
        if(nums[fast] !== 0){
            [nums[slow],nums[fast]] = [nums[fast],nums[slow]]
            ++slow;
        }
        ++fast;
    }
    return nums;
};

console.log(moveZeroes([1,0]))
