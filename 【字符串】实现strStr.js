/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let n = haystack.length;
    let start = 0;
    let right = needle.length;
    if(right === 0)return 0;
    while (start <= n) {
        if(haystack.substr(start,right) === needle)return start;
        start++;
    }
    return -1;
};

