/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//深度优先搜素
var rightSideView = function(root) {
    var res = [];
    var dfs = function(node,depth) {
        if(node === null)return;
        if(depth === res.length)res.push(node.val);
        depth++;
        dfs(node.right,depth);
        dfs(node.left,depth);
    }
    dfs(root,0);
    return res;
};
//广度优先搜素-层序遍历
