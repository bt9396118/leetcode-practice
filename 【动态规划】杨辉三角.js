/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const dp = [[1]];
    for(let i = 1; i < numRows; i++){
        dp.push([1]);
        for(let j = 1; j < i; j++){
            dp[i].push(dp[i-1][j-1] + dp[i-1][j])
        }
        dp[i].push(1)
    }
    return dp;
};
console.log(generate(5))