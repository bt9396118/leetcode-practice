/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const reg = /^[A-Za-z0-9]*$/
    if(s.length === 0){
        return true;
    }
    let left = 0,right = s.length - 1;
    while(left < right){
        while(left < right && !reg.test(s.charAt(left)))left++;
        while(left < right && !reg.test(s.charAt(right)))right--;
        if(s[left].toLowerCase() !== s[right].toLowerCase()){
            return false;
        }
        left++;
        right--;
    }
    return true;
};