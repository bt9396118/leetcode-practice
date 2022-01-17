/*
 * @Author: BaoTong
 * @Date: 2021-12-12 23:35:02
 * @LastEditors: BaoTong
 * @LastEditTime: 2021-12-13 00:13:14
 * @FilePath: \15算法刷题\快速排序.js
 * @Description: edit
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
    const pivot = (nums,l,r) => {
        if(l >= r)return;
        let mid = Math.round(Math.random() * (r - l)) + l;
        [nums[l],nums[mid]] = [nums[mid],nums[l]];
        let x = nums[l];
        let i = l + 1, j = r;
        while(i < j){
            while(i < j && nums[i] <= x)i++;
            while(i < j && nums[j] >= x)j--;
            if(i===j)break;
            [nums[i],nums[j]] = [nums[j],nums[i]];
        }
        if(nums[i] <= x){
            [nums[l],nums[i]] = [nums[i],nums[l]];
        }else{
            [nums[l],nums[i-1]] = [nums[i-1],nums[l]];
            i-=1;
        }
        pivot(nums, i+1, r)
        pivot(nums, l, i-1)
    }
    pivot(nums,0,nums.length - 1);
    return nums;
};

console.log(sortArray([5,1,9,7,2,3,4,6,8]));
