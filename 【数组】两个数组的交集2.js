/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    let ans = [];
    let hash = {};
    // 记录每个元素出现次数
    for (let num of nums1) {
        hash[num] ? ++hash[num] : hash[num] = 1;
    };
    // 遍历nums2看看有没有数字在nums1出现过
    for (let num of nums2) { 
        let val = hash[num];
        if (val) {
            ans.push(num); // 推入res数组
            --hash[num]; // 匹配掉一个，就少了一个
        };
    };
    return ans;
};