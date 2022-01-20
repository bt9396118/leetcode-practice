/*
 * @Author: BaoTong
 * @Date: 2022-01-18 00:05:54
 * @LastEditors: BaoTong
 * @LastEditTime: 2022-01-21 00:55:40
 * @FilePath: \15算法刷题\leetcode-practice\【算法技巧之快速幂运算】Pow(x,n).js
 * @Description: edit
 */

//暴力解法
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let res = 1;
    for(let i=0;i<n;i++){
        res *= x;
    }
    return res;
};

var myPow = function(x, n) {
    const fun = (n) => {
        if(Math.sign(n)===0){
            return 1;
        }
        let res = fun(Math.floor(Math.abs(n)/2));
        res *= res;
        if(Math.abs(n) % 2 === 1){
            res *= x;
        }
        if(Math.sign(n) > 0){
            
        }
    }
};

console.log(myPow(2.0000,10));
