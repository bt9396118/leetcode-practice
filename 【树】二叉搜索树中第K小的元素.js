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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var res = [];
    var dfs = function(node) {
        if(node===null)return root;
        dfs(node.left);
        res.push(node.val);
        dfs(node.right);
    }
    dfs(root);
    return res[k-1];
};