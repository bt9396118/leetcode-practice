/**
 * 题目：https://www.hackerrank.com/challenges/two-strings/forum/comments/563432
 * @param {*} s1 
 * @param {*} s2 
 * @returns 
 */

//第一种
function twoStrings(s1, s2) {
    // Write your code here
    let hashMap = {}

    for(let chr of s1){
        hashMap[chr] = true
    }

    for(let chr of s2){
        if(chr in hashMap){
            return 'Yes'
        }
    }
    return 'No'
}

//第二种
function twoStrings(s1, s2) {
    let newSet = new Set(s1.split('').map(el => el));
    for (let i = 0; i < s2.length; i++) {
        if (newSet.has(s2[i])) return 'YES';
    }
    return 'NO';
}