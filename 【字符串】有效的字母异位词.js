/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length){
        return false;
    }
    let map = new Map();
    for(let i=0;i<s.length;i++){
        let letter = s.charCodeAt(i);
        map.set(letter,(map.get(letter) || 0) + 1)
    }
    for(let i=0;i<t.length;i++){
        let letter = t.charCodeAt(i);
        map.set(letter,map.get(letter) ? map.get(letter) - 1 : 1)
    }
    return [...map.values()].every(v=>v===0)
};

let s = "rat", t = "car"
console.log(isAnagram(s,t))