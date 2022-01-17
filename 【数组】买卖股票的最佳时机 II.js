/**
 * 题目: 给定一个数组 prices ，其中 prices[i] 是一支给定股票第 i 天的价格。
设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * 链接 https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2zsx1/
 * 笔记 https://www.yuque.com/yqmuh7/vh735v/pcfaxe
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
 if(!prices || prices.length < 2){
     return 0
 }
 let max = 0
 for(let i=1;i<prices.length;i++){
    if(prices[i-1] < prices[i]){
        max = max+prices[i]-prices[i-1]
    }
 }
 return max;
};

console.log(maxProfit([7,1,5,3,6,4]))