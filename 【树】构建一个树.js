function BinarySearchTree() {
    var Node = function(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    var root = null;

    //插入一个节点
    this.insert = function(key) {
        var newNode = new Node(key);

        if(root === null){
            root = newNode;
        }else{
            this.insertNode(root,newNode);
        }
    }
    this.insertNode = function(node,newNode) {
        if(newNode.key <= node.key){
            if(node.left === null){
                node.left = newNode;
            }else{
                this.insertNode(node.left,newNode);
            }
        }else{
            if(node.right === null){
                node.right = newNode;
            }else{
                this.insertNode(node.right,newNode);
            }
        }
    }

    //遍历树-前序遍历
    this.preOrderTraverse = function(callback) {
        this.preOrderTraverseNode(root,callback);
    }
    this.preOrderTraverseNode = function(node,callback) {
        if(node !== null){
            callback(node.key);
            this.preOrderTraverseNode(node.left,callback);
            this.preOrderTraverseNode(node.right,callback);
        }
    }

    //遍历树-中序遍历
    this.inOrderTraverse = function(callback) {
        this.inOrderTraverseNode(root,callback);
    }
    this.inOrderTraverseNode = function(node,callback) {
        if(node !== null){
            this.inOrderTraverseNode(node.left,callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right,callback);
        }
    }

    //遍历树-后序遍历
    this.postOrderTraverse = function(callback) {
        this.postOrderTraverseNode(root,callback);
    }
    this.postOrderTraverseNode = function(node,callback) {
        if(node !== null){
            this.postOrderTraverseNode(node.left,callback);
            this.postOrderTraverseNode(node.right,callback);
            callback(node.key);
        }
    }

    /* 
     * 二叉查找树
     * 查找最大值/最小值-时间复杂度为O(h)，其中h为树的高度
     * 1.左子树节点值 <= 父节点值 <= 右子树节点值
     * 2.从根节点一直往左子树走，最后就能到达最小值节点
     * 3.从根节点一直往右子树走，最后就能到达最大值节点
     */
    //查找最小值
    this.min = function() {
        return this.minNode(root)
    }
    this.minNode = function(node) {
        if(node){
            while (node && node.left!=null) {
                node = node.left
            }
            return node.key
        }
        return null;
    }
    //查找最大值
    this.max = function() {
        return this.maxNode(root);
    }
    this.maxNode = function(node) {
        if(node){
            while(node && node.right!=null){
                node = node.right;
            }
            return node.key;
        }
        return null;
    }

    /* 
     * 二叉查找树
     * 查找任意值
     * 1.若查找的节点比当前节点小，则在左子树中递归查找
     * 2.若查找的节点比当前节点大，则在右子树中递归查找
     */
    this.search = function(key) {
        return this.searchNode(root,key);
    }
    this.searchNode = function(node,key) {
        if(node === null){
            return false;
        }
        if(key < node.key){
            return this.searchNode(node.left,key);
        }else if(key > node.key){
            return this.searchNode(node.right,key);
        }else{
            return true;
        }
    }

    /* 
     * 二叉查找树
     * 删除节点
     * 1.待删除节点为叶子节点:直接删除
     * 2.待删除节点只有一个孩子：将其父节点和子节点相连，若待删除节点为根节点，需要将其孩子作为根节点
     * 3.待删除有两个孩子的节点：
     *   （1）当找到了需要移除的节点后，需要找到它右边子树中的最小节点；
     *   （2）用她右侧子树中最小节点的键去更新这个节点的值。通过这一步，我们改变了这个节点的键，也就是说它被移除了；
     *   （3）但是，这样在树中就有两个拥有相同键的节点了，这是不行的。要继续把右侧子树中的最小节点移除，毕竟它已经被
     *       移至要移除的节点的位置了；
     *   （4）最后，向它的父节点返回更新后节点的引用。
     */
    this.remove = function(key) {
        root = this.removeNode(root,key);
    }
    this.removeNode = function(node,key) {
        if(node === null){
            return null;
        }
        if(key < node.key){
            node.left = this.removeNode(node.left,key);
            return node;
        }else if(key > node.key){
            node.right = this.removeNode(node.right,key);
            return node;
        }else{
            //待删除节点为叶子节点
            if(node.left === null && node.right === null){
                node = null;
                return node;
            }
            //待删除节点只有一个孩子
            if(node.left === null){
                node = node.right;
                return node;
            }else if(node.right === null){
                node = node.left;
                return node;
            }
            //删除有两个孩子的节点
            let tmp = this.findMinNode(node.right);
            node.key = tmp.key;
            node.right = this.removeNode(node.right,tmp.key);
            return node;
        }
    }

    //找到最小节点
    this.findMinNode = function(node) {
        while(node && node.left !== null){
            node = node.left;
        }
        return node;
    }
}

var tree = new BinarySearchTree();
tree.insert(11);

tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

tree.insert(6);

function printNode(value) {
    console.log(value);
};

console.log("----前序遍历-----");
tree.preOrderTraverse(printNode);
console.log("----中序遍历-----");
tree.inOrderTraverse(printNode);
console.log("----后序遍历-----");
tree.postOrderTraverse(printNode);

console.log("----查找值-----");
console.log(tree.search(8) ? 'founded':'Not founded')

