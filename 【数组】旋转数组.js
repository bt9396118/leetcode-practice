/*
 * @Author: BaoTong
 * @Date: 2021-11-22 22:19:20
 * @LastEditors: BaoTong
 * @LastEditTime: 2022-01-18 00:03:34
 * @FilePath: \15算法刷题\leetcode-practice\【数组】旋转数组.js
 * @Description: edit
 */

//解法一
const nums = [1,2,3,4,5,6,7];
const k = 3;

var rotate = function(nums, k) {
    var hold = nums[0];
    var index = 0;
    var length = nums.length;
    var visited = [];
    for(var i=0;i<length;i++){
        index = (index+k) % length;
        if(visited[index]){
            index = (index + 1) % length;
            hold = nums[index];
            i--;
        }else{
            visited[index] = true;
            var temp = nums[index];
            nums[index] = hold;
            hold = temp
        }
    }
};

//解法二
var rotate = function(nums, k) {
    var length = nums.length;
    var temp = [];
    for(var i=0;i<length;i++){
        temp[i] = nums[i];
    }
    for(var i=0;i<length;i++){
        nums[(i+k) % length] = temp[i]
    }
};

//解法三
var rotate = function(nums, k) {
    var length = nums.length;
    //最小移动长度
    k = k % length;
    reverse(nums,0,length-1);
    reverse(nums,0,k-1);
    reverse(nums,k,length-1);
};

var reverse = function (nums, start, end) {
    while(start < end){
        var temp = nums[start];
        nums[start++] = nums[end];
        nums[end--] = temp;
    }
}

rotate(nums,k);

console.log(nums);