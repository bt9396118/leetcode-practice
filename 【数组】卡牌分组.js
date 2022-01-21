/*
 * @Author: BaoTong
 * @Date: 2022-01-21 17:30:27
 * @LastEditors: BaoTong
 * @LastEditTime: 2022-01-21 17:31:03
 * @FilePath: \15算法刷题\leetcode-practice\【数组】卡牌分组.js
 * @Description: edit
 */
/**
 * @param {number[]} deck
 * @return {boolean}
 */
 var hasGroupsSizeX = function(deck) {
    //辗转相除法
  function gcd(num1, num2) {
      return num2 === 0 ? num1 : gcd(num2, num1 % num2); 
  }
  var map = new Map();
  deck.map((v) => {
      map.set(v, map.has(v) ? map.get(v) + 1 : 1);
  });
  var count = [...map.values()]
  var g = count[0]

  count.forEach(t => {
      g = gcd(g,t)
  })

  return g >= 2
};