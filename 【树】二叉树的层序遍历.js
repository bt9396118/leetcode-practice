/**
 * Definition for a binary tree cnode.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    var q = [],res = [];
    q.push([root,0]);
    while (q.length!=0) {
        var cnode = q.shift();
        if(cnode[0]===null)continue;
        if(res.length === cnode[1])res.push([]);
        res[cnode[1]].push(cnode[0].val);
        q.push([cnode[0].left,cnode[1]+1]);
        q.push([cnode[0].right,cnode[1]+1]);
    }
    return res;
};