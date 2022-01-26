/**
 * @param {string} s
 * @return {number} 最长无重复子串的长度
 */
var lengthOfLongestSubstring = function(s) {
    var n = s.length;
    var map = new Map();
    var start=0;
    var long = 0;
    for(var end = 0;end<n;end++){
        if(map.has(s[end]) && map.get(s[end]) >= start){
            start=map.get(s[end])+1;
        }
        long = Math.max(long,end-start+1);
        map.set(s[end],end);
    }
    return long;
};

/**
 * @param {string} s
 * @return {number} 最长无重复子串
 */
var longestSubstring = function(s) {
    var n = s.length;
    var map = new Map();
    var set = new Set();
    var start=0,end=1;
    var long = 0;
    for(var end = 0;end<n;end++){
        if(map.has(s[end]) && map.get(s[end]) >= start){
            start=map.get(s[end])+1;
        }
        long = Math.max(long,end-start+1);
        map.set(s[end],end);
        set.add(s.substring(start,end+1));
    }
    arr=[...set].filter(a=>a.length===long);
    return arr;
};

console.log("longestSubstring",longestSubstring("abcabc"));