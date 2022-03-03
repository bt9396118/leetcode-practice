/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var map = new Map();
    var strArr = s.split("");
    for(var i=0;i<s.length;i++){
        var ele = s.charAt(i);
        map.set(ele,map.has(ele) ? map.get(ele)+1 : 1);
    }

    for(var j=0;j<strArr.length;j++){
        if(map.get(strArr[j]) === 1){
            return j
        }
    }
    return -1;
};