/*
 * @Author: BaoTong
 * @Date: 2022-07-16 21:01:20
 * @LastEditors: BaoTong
 * @LastEditTime: 2022-07-17 01:17:52
 * @FilePath: \leetcode-practice\【数组】剑指 Offer 39. 数组中出现次数超过一半的数字.js
 * @Description: edit
 */
/**
 * 哈希表方式
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const n = nums.length;
    const map = new Map();

    nums.map((v) => {
        map.set(v, map.has(v) ? map.get(v) + 1: 1)
    });

    for(let item of map.entries()){
        if(item[1] > (n/2)){
            return item[0]
        }
    }
};

/**
 * 摩尔投票法
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let candidate = null;

    for(let num of nums){
        if(count === 0){
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;

};

console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]))