/**
 * @param {number} n
 * @return {string}
 */

//解法一：递归解法
var countAndSay = function(n) {
    if(n === 1){
        return "1";
    }
    let s1 = countAndSay(n-1);
    const result = [];
    let local = s1.charAt(0);
    let count = 0;
    for(let i=0;i<s1.length;i++){
        if(s1.charAt(i) === local){
            count++;
        }else{
            result.push(count);
            result.push(local);
            count = 1;
            local = s1.charAt(i)
        }
    }
    result.push(count);
    result.push(local);
    return result.join("");
};

//解法二：栈解法
var countAndSay = function(n) {
    let str = "1"
    for(i=2;i<=n;i++){
        const result = [];
        let start = 0,pos=0;
        while(pos < str.length){
            while(pos < str.length && str[pos] === str[start]){
                pos++;
            }
            result.push('' + (pos-start) + str[start]);
            start = pos;
        }
        str = result.join('');
    }
    return str;
};