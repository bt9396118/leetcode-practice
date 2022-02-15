/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var sum = function(nums) {
    var sum = nums.reduce(function(prev,cur) {
        return prev + cur; 
    },0);
    return sum;
}
var five_sum = function(nums, target) {
    var dfs = function(i,num,s) {
        if(num === 5){
           return s === target; 
        }
        if(s > target || s+sum(nums.slice(i,nums.length)) < target || nums.length - i + num < 5)return false;
        if(nums.length === num){
            if(s===target && num===5){
                return true;
            }
            return false;
        }
        return dfs(i+1,num+1,s+nums[i]) || dfs(i+1,num,s)
    }
    return dfs(0,0,0);
};