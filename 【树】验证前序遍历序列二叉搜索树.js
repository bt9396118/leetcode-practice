/**
 * @param {number[]} preorder
 * @return {boolean}
 */
 var verifyPreorder = function(preorder) {
    var res = [];
    var preEle = 0;

    for(var i=0;i<preorder.length;i++){
        if(preorder[i] < preEle)return false;
        while (res.length!=0 && preorder[i] > res[res.length-1]) {
            preEle = res.pop()
        }
        res.push(preorder[i])
    }
    return true
};