/**
 * @Author: btg
 * @Date: 2021-12-06 00:17:17
 * @Description: 
 */

 var RandomizedSet = function() {
    this.a = new Map();
    this.b = new Array();
    this.index = 0;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(!this.a.has(val)){
        this.a.set(val,this.index);
        this.b.push(val);
        this.index++;
        return true;
    }
    return false;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.a.has(val)){
        var oldIndex = this.a.get(val);
        var lastVal = this.b[this.b.length - 1];
        [this.b[oldIndex],this.b[this.b.length - 1]] = [this.b[this.b.length - 1],this.b[oldIndex]];
        this.a.set(lastVal,oldIndex);
        this.a.delete(val);
        this.b.pop();
        this.index--;
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const n = this.b.length
    return this.b[parseInt(Math.random()*n)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
