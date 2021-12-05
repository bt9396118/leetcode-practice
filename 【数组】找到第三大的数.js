/**
 * @Author: btg
 * @Date: 2021-12-05 17:16:47
 * @Description: 
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    var nums = [...new Set(nums)];
    nums.sort((a,b) => b-a);
    if(nums.length < 3){
        return nums[0];
    }else{
        return nums[2];
    }
};

