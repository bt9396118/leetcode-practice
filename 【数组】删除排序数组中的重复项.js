/**
 * 题目: 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成
 * 链接 https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2gy9m/
 * 笔记 https://www.yuque.com/yqmuh7/vh735v/mopfy4
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    var i = 0;
    // while(i<nums.length){
    //     if(nums[i]===nums[i-1])nums.splice(i-1,1);
    //     else i++;
    // }
    // return i;
    for(var x of nums){
        if(nums[i-1]!==x){
            nums[i++] = x
        };
    }
    return i;
};

// removeDuplicates([0,0,1,1,1,2,2,3,3,4])
console.log(removeDuplicates([3,3,3,3,4,4,4,5,5,5]))
